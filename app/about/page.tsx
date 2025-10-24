import { Metadata } from "next";

import { RuneDivider } from "@/components/rune-divider";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "About & Belief"
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-16 pb-24">
      <Section title="Statement Of Basic Belief">
        <div className="space-y-6 text-lg leading-relaxed text-bone/90">
          <p>
            Hearthfire seeks to establish a foundation of inclusive and pluralistic Heathenry while allowing our
            community to grow and prosper spiritually.
          </p>
        </div>
      </Section>

      <RuneDivider />

      <Section title="What Is Heathenry?">
        <div className="space-y-6 text-lg leading-relaxed text-bone/90">
          <p>
            Heathenry is the polytheistic faith derived from the ancient Germanic peoples and the Gods they
            worshiped and its iterations in the modern day. At Hearthfire, we believe in and use the pre-christian
            pan-germanic faith of the people who worshiped the Germanic Gods in ancient times as our foundation.
            Our approach is historically informed, which helps inspire and develop modern living traditions and
            practices today.
          </p>
        </div>
      </Section>

      <RuneDivider />

      <Section title="Is Hearthfire Right For You?">
        <div className="space-y-5 text-lg leading-relaxed text-bone/90">
          <p>
            Are you looking for an inclusive Heathen Kindred led by well read, educated, compassionate and
            understanding leadership that still knows how to have fun? Then this is the place for you. Our food is
            always good, the fellowship is better, and the rituals led by our Go�i, Wolf The Red, will leave you
            spiritually rejuvenated and with much to think about!
          </p>
          <p>
            While Hearthfire has its foundation in Norse Heathenry, we aim to make everyone feel welcome, whether
            it's your first time with us or you have been with us since the beginning. No matter your path we
            believe you will find something valuable with us.
          </p>
          <p>
            Maybe you are an open minded Christian who is searching for something more, or just don't like the way
            Christian Nationalism is headed in this country. Maybe you're a pagan who is looking for more stability
            or guidance, or are just tired of being solitary. Maybe you're an atheist but are interested in the
            histories and culture surrounding the viking age and want to hang out with fellow nerds. And maybe you
            aren't sure what you believe but you would love to meet other folks who are inclusive and good natured,
            and would enjoy sharing a meal and have a chat.
          </p>
          <p>
            All this and more is not only welcome at Hearthfire, but encouraged. I assure you, you will find a
            place here in our community.
          </p>
        </div>
      </Section>
    </div>
  );
}

