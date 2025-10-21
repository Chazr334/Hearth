import { Metadata } from "next";

import { AccessibilityNote } from "@/components/accessibility-note";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Accessibility"
};

export default function AccessibilityPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-16 pb-24">
      <Section title="Access First">
        <div className="space-y-4 text-lg text-bone/90">
          <p>
            Hearthfire only books ADA-compliant venues. Expect step-free routes,
            ramps or lifts, accessible restrooms, and parking that stays close
            to the ritual hall.
          </p>
          <p>
            Folks who need extra time in the food line or at the altar get it
            without question. We invite mobility aids, service animals, and any
            assistive tech you use daily.
          </p>
        </div>
      </Section>

      <Section title="Sensory Support">
        <div className="space-y-4 text-lg text-bone/90">
          <p>
            Quiet decompression spaces are marked at every gathering. Bring
            headphones, stim toys, weighted wraps, or any comfort item you
            prefer. Zero stigma, always.
          </p>
          <p>
            Leadership checks in throughout the day. If you need a break, a
            buddy, or a change to ritual flow, let us know with a thumbs-up,
            message, or direct ask.
          </p>
        </div>
        <div className="mt-6 space-y-3">
          <AccessibilityNote>
            We maintain printed and digital copies of rituals. Ask for large
            print or high contrast versions as needed.
          </AccessibilityNote>
          <AccessibilityNote>
            ASL interpreters are coordinated on request. Give us two weeks lead
            time when possible.
          </AccessibilityNote>
        </div>
      </Section>

      <Section title="Ongoing Commitments">
        <div className="space-y-4 text-lg text-bone/90">
          <p>
            Accessibility is a living practice. If something blocks your way,
            we listen, adjust, and document the fix so it becomes standard.
          </p>
          <p>
            Email accessibility@hearthfire.org or talk with any coordinator at
            the event for support in real time.
          </p>
        </div>
      </Section>
    </div>
  );
}
