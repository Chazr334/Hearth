"use client";

import { useEffect, useRef } from "react";

type FlameParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  age: number;
  hue: number;
  baseAlpha: number;
  turbulence: number;
};

type SmokeParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  age: number;
  baseAlpha: number;
  drift: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export function HearthFlame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ctx: CanvasRenderingContext2D | null = null;
    let animationFrame: number | null = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let disposed = false;
    let running = false;
    let lastTime = performance.now();

    let flames: FlameParticle[] = [];
    let smoke: SmokeParticle[] = [];

    const bounds = () => canvas.getBoundingClientRect();

    const resize = () => {
      if (!ctx) {
        return;
      }
      const rect = bounds();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnFlame = (initial = false): FlameParticle => {
      const particle: FlameParticle = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 2,
        life: 2,
        age: 0,
        hue: 30,
        baseAlpha: 0.6,
        turbulence: 0.002
      };
      resetFlame(particle, initial);
      return particle;
    };

    const resetFlame = (particle: FlameParticle, initial = false) => {
      const baseX = width * 0.5;
      const baseSpread = width * 0.22;
      particle.x = baseX + randomBetween(-baseSpread, baseSpread);
      particle.y = height - (initial ? randomBetween(0, height * 0.4) : 0);
      particle.vx = randomBetween(-12, 12);
      particle.vy = randomBetween(45, 70);
      particle.radius = randomBetween(3.8, 7.2);
      particle.life = randomBetween(1.8, 2.8);
      particle.age = initial ? Math.random() * particle.life : 0;
      particle.hue = randomBetween(20, 38);
      particle.baseAlpha = randomBetween(0.4, 0.75);
      particle.turbulence = randomBetween(0.0012, 0.0024);
    };

    const spawnSmoke = (initial = false): SmokeParticle => {
      const particle: SmokeParticle = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 4,
        life: 3,
        age: 0,
        baseAlpha: 0.3,
        drift: 0
      };
      resetSmoke(particle, initial);
      return particle;
    };

    const resetSmoke = (particle: SmokeParticle, initial = false) => {
      const baseX = width * 0.5;
      const baseSpread = width * 0.18;
      particle.x = baseX + randomBetween(-baseSpread, baseSpread);
      particle.y = height - (initial ? randomBetween(0, height * 0.2) : 4);
      particle.vx = randomBetween(-12, 12);
      particle.vy = randomBetween(18, 28);
      particle.radius = randomBetween(6, 16);
      particle.life = randomBetween(3.5, 6.2);
      particle.age = initial ? Math.random() * particle.life : 0;
      particle.baseAlpha = randomBetween(0.12, 0.23);
      particle.drift = randomBetween(0.5, 1.4);
    };

    const updateFlame = (particle: FlameParticle, delta: number, now: number) => {
      particle.age += delta;
      particle.y -= particle.vy * delta;
      particle.x += particle.vx * delta;
      particle.x += Math.sin(now * particle.turbulence + particle.age * 2.5) * 6 * delta;
      particle.radius += delta * 1.5;

      if (
        particle.age >= particle.life ||
        particle.y < height * 0.35 ||
        particle.x < -40 ||
        particle.x > width + 40
      ) {
        resetFlame(particle);
      }
    };

    const updateSmoke = (particle: SmokeParticle, delta: number, now: number) => {
      particle.age += delta;
      particle.y -= particle.vy * delta;
      particle.x += particle.vx * delta * 0.25;
      particle.x += Math.sin(now * 0.0008 + particle.age * 1.2) * particle.drift;
      particle.radius += delta * 1.2;

      if (
        particle.age >= particle.life ||
        particle.y < -height * 0.1 ||
        particle.x < -80 ||
        particle.x > width + 80
      ) {
        resetSmoke(particle);
      }
    };

    const render = (now: number) => {
      const context = ctx;
      if (!context || !running) {
        return;
      }
      const delta = clamp((now - lastTime) / 1000, 0, 0.04);
      lastTime = now;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      flames.forEach((particle) => {
        updateFlame(particle, delta, now);

        const life = 1 - particle.age / particle.life;
        const alpha = clamp(
          particle.baseAlpha * (life ** 1.5) * (0.7 + 0.3 * Math.sin(now * 0.008 + particle.age * 4)),
          0,
          1
        );

        context.beginPath();
        context.fillStyle = `hsla(${particle.hue}, 95%, ${clamp(50 + life * 25, 40, 75)}%, ${alpha})`;
        context.ellipse(
          particle.x,
          particle.y,
          particle.radius * 0.6,
          particle.radius,
          Math.sin(now * 0.002 + particle.age) * 0.6,
          0,
          Math.PI * 2
        );
        context.fill();
      });

      context.globalCompositeOperation = "screen";
      smoke.forEach((particle) => {
        updateSmoke(particle, delta, now);

        const life = 1 - particle.age / particle.life;
        const alpha = clamp(
          particle.baseAlpha * life * (0.8 + 0.2 * Math.sin(now * 0.0016 + particle.age * 2)),
          0,
          0.25
        );

        context.beginPath();
        context.fillStyle = `rgba(92, 92, 92, ${alpha})`;
        context.ellipse(
          particle.x,
          particle.y,
          particle.radius,
          particle.radius * 0.8,
          Math.sin(now * 0.001 + particle.age) * 0.3,
          0,
          Math.PI * 2
        );
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

      const area = width * height;
      const targetFlames = clamp(Math.floor(area / 6000), 55, 125);
      const targetSmoke = clamp(Math.floor(area / 9000), 40, 90);

      flames = Array.from({ length: targetFlames }, () => spawnFlame(true));
      smoke = Array.from({ length: targetSmoke }, () => spawnSmoke(true));

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
    <div className="hearth-flame-layer" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
