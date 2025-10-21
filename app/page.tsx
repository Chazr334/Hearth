import { Callout } from "@/components/callout";
import { Hero } from "@/components/hero";
import { RuneDivider } from "@/components/rune-divider";
import { Section } from "@/components/section";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <Section
        title="Light the Fire"
        description="We gather as modern heathens with reverence for the sagas and the living world we tend."
      >
        <div className="space-y-6 text-lg leading-relaxed text-bone/90">
          <p>
            Hearthfire began as a circle of friends bound by story, service, and
            the promise of an open flame. We study the lore, we honor the
            ancestors, and we craft new verses that belong to every voice who
            shares the hall.
          </p>
          <p>
            When we meet, we carry the warmth of our own homes to the horgr.
            Each stone set upon the altar speaks of kin, of land, of the vows we
            uphold. We tend the fire together so no one stands in the cold.
          </p>
        </div>
      </Section>

      <Section
        title="Keep the Flame"
        description="Community flourishes when every hand, heart, and story is welcomed."
      >
        <div className="space-y-6 text-lg leading-relaxed text-bone/90">
          <p>
            Hearthfire is pluralistic and proudly inclusive. We respect all
            paths that honor the reciprocity between people, the gods, and the
            land. Our rituals interweave scholarship, lived experience, and
            shared care.
          </p>
          <p>
            No flame of hatred burns here. Hearthfire stands for honor, not
            exclusion. We walk beside LGBTQIA+ folks, people of color, disabled
            kin, mixed-faith families, and seekers who carry more questions than
            titles.
          </p>
        </div>
        <RuneDivider />
        <div className="grid gap-6 md:grid-cols-2">
          <Callout
            title="Community Agreements"
            description="Explore the rules and etiquette that keep our gatherings safe, kind, and reverent."
            href="/policies"
          />
          <Callout
            title="Accessibility in Practice"
            description="From ADA venues to quiet corners, learn how we tend every body and every sense."
            href="/accessibility"
          />
        </div>
      </Section>

      <Section
        title="Share the Warmth"
        description="Ready to visit? Find what you need to join the circle."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Callout
            title="Upcoming Gatherings"
            description="Plan your first visit or your next return. Rituals, service, and fellowship await."
            href="/events"
          />
          <Callout
            title="Field Guide"
            description="Get the essentials: what to bring, how we flow, and why every stone matters."
            href="/field-guide"
          />
          <Callout
            title="Questions?"
            description="Reach out to the Hearthfire council with logistics, press inquiries, or collaborations."
            href="/contact"
          />
        </div>
      </Section>
    </div>
  );
}
