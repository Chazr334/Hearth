import { Metadata } from "next";

import { AccessibilityNote } from "@/components/accessibility-note";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Accessibility"
};

export default function AccessibilityPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-16 pb-24">
      <Section title="I'm Disabled In Some Way, And I've Faced Discrimination From Other Groups For It In The Past, Have Been Made To Feel Unwelcome, Or Just Wasn't Thought Of At All. How Does Hearthfire Approach Accessibility?">
        <div className="space-y-5 text-lg text-bone/90">
          <p>
            Accessibility is a top priority for Hearthfire. We already make sure to only rent sites that are ADA
            compliant, and we make sure all event set ups are done with things like mobility aids in mind. Plenty
            of space for wheelchairs, crutches and canes. We also make sure people who need to go through the
            food line first to have plenty of time and options to choose from.
          </p>
          <p>
            For ritual any and all accommodations will be made, wheelchair ramps are always set out and utilized,
            and if at any point anything is needed to make your stay with us more comfortable we want that feed
            back to make sure no one is left behind. There is parking up close to the pavilions for folks who
            need it and the bathrooms are ADA compliant.
          </p>
          <p>
            For those that get overwhelmed and overstimulated, we have plenty of space for those people to step
            away and get some fresh air and have time to themselves to decompress. There is absolutely no stigma
            tied to this, many of our long term members take advantage of this. Feel free to bring any items that
            may help you stay feeling comfortable, such as headphones, a comfort item, or stimming device.
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

