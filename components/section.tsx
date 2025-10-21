import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, description, children, className }: SectionProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-6xl px-6",
        "rounded-lg border border-amber/15 bg-obsidian/80 shadow-ember backdrop-blur",
        className
      )}
    >
      <div className="space-y-6 py-10">
        <header className="space-y-3">
          <h2 className="font-display text-3xl uppercase tracking-[0.25em] text-amber">
            {title}
          </h2>
          {description ? (
            <p className="text-base font-serif text-bone/70">{description}</p>
          ) : null}
        </header>
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
}
