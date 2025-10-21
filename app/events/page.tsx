import { Metadata } from "next";
import Script from "next/script";

import { EventCard } from "@/components/event-card";
import { RuneDivider } from "@/components/rune-divider";
import { Section } from "@/components/section";
import { events } from "@/lib/data";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Rituals & Events"
};

const eventJsonLd = events.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.title,
  startDate: event.date,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: event.location
  },
  organizer: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  },
  description: event.summary
}));

export default function EventsPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 pb-24">
      <Section
        title="How Our Gatherings Work"
        description="Home -> Community -> Divine -> Home again."
      >
        <div className="space-y-6 text-lg leading-relaxed text-bone/90">
          <p>
            Each soul bears a stone from their own hearth, to bind home to hall,
            self to kin. We raise the horgr together, share words with the gods
            and ancestors, pour libations, and then return each stone home with
            renewed blessing. Home -> Community -> Divine -> Home again.
          </p>
          <p>
            Ritual teams rotate, blending poetry, historical text, and lived
            testimony. Offerings often include mead substitutes, crafted goods,
            and the stories that keep us rooted. Music, skaldic recitation, and
            shared silence all have space beside the flame.
          </p>
        </div>
      </Section>

      <RuneDivider />

      <Section title="Logistics & Rhythm">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl text-amber">The Flow</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-bone/85">
              <li>Setup starts around 10:00 AM. Early arrivals help stage the hall.</li>
              <li>Potluck dishes gather near the grill; label ingredients clearly.</li>
              <li>Clean water is always on site; bring a reusable bottle.</li>
              <li>Dogs are welcome on a six-foot leash. Mind reactivity and paws.</li>
              <li>Ritual blades are permitted with care. Sheath when not in use.</li>
              <li>Firearms remain secured in vehicles. No alcohol or drugs at events.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl text-amber">Horgr Cycle</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-bone/85">
              <li>Bring a stone from home. Hold its story close.</li>
              <li>Build the shared altar; offer thanks with voice or silence.</li>
              <li>Libation flows across the stones to seal the blessing.</li>
              <li>Retrieve your stone, now carrying the hall's warmth home.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Upcoming Gatherings">
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      <Script
        id="events-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd)
        }}
      />
    </div>
  );
}
