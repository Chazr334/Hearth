"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  life: number;
  age: number;
  baseAlpha: number;
  flicker: number;
  color: string;
  offset: number;
  sway: number;
};

const BASE_COLORS = [
  "255,182,72",
  "255,204,124",
  "255,146,60"
] as const;

export function EmberField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame: number | null = null;
    let disposed = false;
    let ctx: CanvasRenderingContext2D | null = null;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastTime = performance.now();
    let running = false;

    const randomBetween = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const resetParticle = (particle: Particle, initial = false) => {
      particle.x = Math.random() * (width + 120) - 60;
      particle.y = initial
        ? Math.random() * height
        : height + Math.random() * height * 0.2;
      particle.size = randomBetween(0.6, 1.8);
      particle.speed = randomBetween(18, 36);
      particle.drift = randomBetween(-22, 22);
      particle.life = randomBetween(2.8, 6.2);
      particle.age = initial ? Math.random() * particle.life : 0;
      particle.baseAlpha = randomBetween(0.28, 0.6);
      particle.flicker = randomBetween(0.0012, 0.0026);
      particle.color = BASE_COLORS[Math.floor(Math.random() * BASE_COLORS.length)];
      particle.offset = Math.random() * Math.PI * 2;
      particle.sway = randomBetween(8, 22);
    };

    const createParticle = (initial = false): Particle => {
      const particle = {
        x: 0,
        y: 0,
        size: 1,
        speed: 25,
        drift: 0,
        life: 3,
        age: 0,
        baseAlpha: 0.38,
        flicker: 0.002,
        color: BASE_COLORS[0],
        offset: 0,
        sway: 8
      };
      resetParticle(particle, initial);
      return particle;
    };

    const resize = () => {
      if (!canvas || !ctx) {
        return;
      }
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = (now: number) => {
      const context = ctx;
      if (!context || !running) {
        return;
      }
      const delta = Math.min((now - lastTime) / 1000, 0.033);
      lastTime = now;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      particles.forEach((particle) => {
        particle.age += delta;
        particle.y -= particle.speed * delta;
        particle.x += (particle.drift * delta) / 1.5;
        particle.x +=
          Math.sin(now * particle.flicker + particle.offset) *
          (particle.sway * delta);

        if (
          particle.y < -particle.size ||
          particle.age >= particle.life ||
          particle.x < -80 ||
          particle.x > width + 80
        ) {
          resetParticle(particle);
        }

        const lifeProgress = Math.max(0, 1 - particle.age / particle.life);
        const flicker =
          0.6 + 0.4 * Math.sin(now * particle.flicker * 600 + particle.offset);
        const alpha = Math.min(
          particle.baseAlpha * lifeProgress * flicker,
          0.95
        );

        context.beginPath();
        context.fillStyle = `rgba(${particle.color}, ${alpha.toFixed(3)})`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      });

      if (!disposed) {
        animationFrame = requestAnimationFrame(render);
      }
    };

    const start = () => {
      if (running || disposed) {
        return;
      }
      ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }
      running = true;
      resize();
      const density = Math.min(
        150,
        Math.max(55, Math.floor((width * height) / 22000))
      );
      particles = Array.from({ length: density }, () => createParticle(true));
      lastTime = performance.now();
      animationFrame = requestAnimationFrame(render);
    };

    const stop = () => {
      running = false;
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
      }
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        stop();
      } else {
        start();
      }
    };

    const handleResize = () => {
      resize();
    };

    if (!motionQuery.matches) {
      start();
    }

    motionQuery.addEventListener("change", handleMotionChange);
    window.addEventListener("resize", handleResize);

    return () => {
      disposed = true;
      stop();
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div className="ember-layer" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
