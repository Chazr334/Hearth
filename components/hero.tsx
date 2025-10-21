"use client";

import Link from "next/link";
import { ReactNode, useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface Particle {
  key: number;
  left: string;
  bottom: string;
  delay: string;
}

export function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const handler = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  const particles: Particle[] = useMemo(() => {
    if (reducedMotion) {
      return [];
    }
    return Array.from({ length: 20 }, (_, index) => ({
      key: index,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 50}%`,
      delay: `${Math.random() * 6}s`
    }));
  }, [reducedMotion]);

  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/60 to-obsidian" />
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-32">
        <div className="relative z-10 space-y-6">
          <p className="inline-flex rounded-full border border-amber/40 bg-obsidian/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-amber">
            Light the Fire * Keep the Flame
          </p>
          <h1 className="font-display text-4xl uppercase tracking-[0.2em] text-bone md:text-5xl">
            All who seek wisdom, kinship, and the light of the hearth are welcome
            within our circle.
          </h1>
          <p className="max-w-3xl font-serif text-xl text-bone/80">
            We are Hearthfire, an inclusive, historically informed Heathen community
            tending story, ritual, and service in the Southern Appalachians and beyond.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="/events">Upcoming Gatherings</CTAButton>
            <CTAButton href="/field-guide" variant="secondary">
              Field Guide
            </CTAButton>
          </div>
        </div>
      </div>
      {particles.length > 0 && (
        <div className="pointer-events-none absolute inset-0">
          {particles.map((particle) => (
            <span
              key={particle.key}
              className="ember-particle"
              style={{
                left: particle.left,
                bottom: particle.bottom,
                animationDelay: particle.delay
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      )}
    </section>
  );
}

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber",
        variant === "primary"
          ? "bg-iron text-bone hover:bg-amber hover:text-obsidian"
          : "border border-amber/60 text-amber hover:bg-amber hover:text-obsidian"
      )}
    >
      {children}
    </Link>
  );
}
