import { Metadata } from "next";

import { PolicyList } from "@/components/policy-list";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Rules & Etiquette"
};

const policies = [
  "Respect every person, including kids and pets. No harassment, shouting, or intimidation.",
  "Consent first. Do not touch others or their belongings without a clear yes.",
  "Parents and guardians supervise their own children. Do not pick up or discipline someone else's child.",
  "Label food with common allergens. If you have severe allergies, bring dedicated dishes and utensils.",
  "No alcohol or drugs at Hearthfire events.",
  "Photography or video only with permission. No candid or professional shoots without prior approval. Drones are not allowed.",
  "Smoke or vape away from the main group and watch the wind.",
  "Firearms stay secured in vehicles. Ritual blades are welcome with responsible handling.",
  "Keep the ritual space quiet. Silence phones and step out for calls.",
  "Label your gear and return shared items to their stations.",
  "Follow the guidance of Hearthfire leadership. Disciplinary action is at their discretion."
];

export default function PoliciesPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-12 pb-24">
      <Section title="Rules & Etiquette">
        <div className="space-y-6 text-lg text-bone/90">
          <p>
            These guidelines keep our gatherings safe, welcoming, and focused.
            Thank you for helping Hearthfire stay warm for everyone.
          </p>
          <PolicyList items={policies} />
        </div>
      </Section>
    </div>
  );
}
