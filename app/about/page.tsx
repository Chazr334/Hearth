import { Metadata } from "next";

import { RuneDivider } from "@/components/rune-divider";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "About & Belief"
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-16 pb-24">
      <Section title="Statement of Basic Belief">
        <div className="space-y-6 text-lg leading-relaxed text-bone/90">
          <p>
            Hearthfire embraces Heathenry as a living, pluralistic path. We
            honor the Aesir and the Vanir, the landwights and the honored dead,
            while welcoming every seeker who approaches with respect, curiosity,
            and care. Tradition guides us, but community shapes the hall we
            build together.
          </p>
          <p>
            We ground our ritual work in scholarship, historical practice, and
            accountable modern interpretation. Every rite is crafted to uplift
            both ancestral wisdom and contemporary kin, ensuring that reverence
            never becomes a gate.
          </p>
        </div>
      </Section>

      <RuneDivider />

      <Section title="What Is Heathenry?" description="A brief guide for new kin.">
        <div className="space-y-6 text-lg leading-relaxed text-bone/90">
          <p>
            Heathenry is a family of modern revival traditions rooted in the
            pre-Christian beliefs of Northern Europe. We recognize a tapestry of
            gods, often described as the Aesir and the Vanir, whose stories
            illustrate duty, wisdom, and reciprocity.
          </p>
          <p>
            At Hearthfire we place special care on the pillars of honor,
            kinship, reciprocity, and the bond to land. The horgr altar, the
            sharing of stories, and the giving of gifts are all ways we weave
            those values into daily life.
          </p>
          <p>
            Our community includes reconstructionists, eclectic pagans, and
            curious newcomers. Together we explore saga study, rune lore,
            language, craft, and service to community. We know that living faith
            is sustained by both myth and action.
          </p>
        </div>
      </Section>
    </div>
  );
}
