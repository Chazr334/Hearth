import Link from "next/link";

import { cn } from "@/lib/utils";

interface CalloutProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function Callout({ title, description, href, className }: CalloutProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col gap-3 rounded border border-amber/25 bg-obsidian/80 p-6 transition hover:border-amber/60 hover:shadow-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber",
        className
      )}
    >
      <h3 className="font-serif text-2xl text-amber transition group-hover:text-bone">
        {title}
      </h3>
      <p className="text-sm text-bone/75">{description}</p>
      <span className="mt-auto text-xs font-semibold uppercase tracking-[0.3em] text-iron group-hover:text-amber">
        Explore
      </span>
    </Link>
  );
}
