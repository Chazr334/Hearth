import { CalendarDays, MapPin, SunMedium } from "lucide-react";

import type { Event } from "@/lib/data";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: Event;
}

const tagStyles: Record<Event["tags"][number], string> = {
  ritual: "bg-iron/60 text-bone",
  service: "bg-moss/60 text-bone",
  fellowship: "bg-amber/80 text-obsidian"
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded border border-amber/25 bg-obsidian/85 p-6 shadow-ember transition hover:-translate-y-1 hover:border-amber/50">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-xl text-amber">{event.title}</h3>
        <SunMedium className="h-5 w-5 text-amber" aria-hidden />
      </div>
      <div className="flex items-center gap-2 text-sm text-bone/70">
        <CalendarDays className="h-4 w-4 text-amber" aria-hidden />
        <span className="font-semibold">{event.time}</span>
      </div>
      <div className="flex items-start gap-2 text-sm text-bone/70">
        <MapPin className="mt-1 h-4 w-4 text-amber" aria-hidden />
        <span>{event.location}</span>
      </div>
      <p className="flex-1 text-sm text-bone/80">{event.summary}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
              tagStyles[tag]
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
