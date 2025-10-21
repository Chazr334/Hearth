import { Metadata } from "next";

import { RuneDivider } from "@/components/rune-divider";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Field Guide"
};

export default function FieldGuidePage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-16 pb-24">
      <Section title="What to Bring">
        <div className="space-y-4 text-lg text-bone/90">
          <p>
            A Rock for the Horgr: choose a stone from your home or a place you
            love. It anchors your household to the hall during ritual and
            receives the shared libation. Afterward, the stone returns with you,
            carrying the blessing back home.
          </p>
          <p>
            Bring water, a dish for the potluck if you're able, and any
            mobility or comfort aids you use regularly. We always have extra
            seating, utensils, and non-alcoholic beverages.
          </p>
        </div>
      </Section>

      <RuneDivider />

      <Section title="What to Wear">
        <div className="space-y-4 text-lg text-bone/90">
          <p>
            Be yourself, and remember it's a public park (no skyclad).
            Some folks arrive in linen tunics, renfaire garb, or Skyrim-inspired
            layers. Others wear jeans, band tees, and hiking boots. Dress for
            the weather and for comfort.
          </p>
        </div>
      </Section>

      <Section title="General Info">
        <div className="space-y-3 text-lg text-bone/90">
          <p>
            Arriving early? Fantastic. Early birds help with pavilion setup,
            signage, and welcoming first-time visitors.
          </p>
          <p>
            We coordinate grill use on site. Label your dishes, note allergens,
            and expect a shared clean-up sweep before we close.
          </p>
          <p>Coolers of water are provided. Please bring reusable bottles.</p>
        </div>
      </Section>

      <Section title="Dogs">
        <div className="space-y-3 text-lg text-bone/90">
          <p>
            Friendly dogs are welcome on a six-foot leash. Mind reactivity,
            clean up promptly, and keep pups out of the ritual circle unless
            pre-arranged with staff.
          </p>
        </div>
      </Section>

      <Section title="Weapons & Substances">
        <div className="space-y-3 text-lg text-bone/90">
          <p>No alcohol or drugs are permitted at Hearthfire events.</p>
          <p>
            Firearms stay secured in vehicles for the duration of the gathering.
          </p>
          <p>
            Ritual blades are welcome in responsible hands. Keep them sheathed
            when you're not actively using them in the rite.
          </p>
        </div>
      </Section>
    </div>
  );
}
