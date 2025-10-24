import { Metadata } from "next";
import Link from "next/link";

import { externalLinks } from "@/lib/data";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Community & Inclusion"
};

export default function InclusionPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-12 pb-24">
      <Section title="How Does Participation Work For Non Heathens?">
        <div className="space-y-5 text-lg text-bone/90">
          <p>
            Hearthfire Community participates in a pluralistic approach to spirituality. We provide a safe space
            for all inclusive expressions of faith. We embrace a diversity of faiths to worship as members of
            Hearthfire in a welcoming capacity. Hearthfire does not tolerate proselytizing, derision, or hostility
            towards the faiths of its members. Often the ritual being conducted is more focused on the ideas and
            attributes allowing people to easily substitute their own Gods, Spirits and other theology into the
            ritual easily.
          </p>
          <div className="space-y-3">
            <h3 className="font-serif text-xl text-amber">
              I Just Want To Check An Event Out But Not Sure I Want To Participate, Is That Ok?
            </h3>
            <p>
              Absolutely, every event we've held at least a few people are showing up for their first time. They
              are not sure what they believe, and they are not sure they would be comfortable diving into a
              spiritual event feet first. We respect that fully and we have simple methods in place to skip over
              any one that isn't ready for that commitment. If you are just interested in coming for lunch and
              fellowship you won't be alone and won't be pressured otherwise.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Declaration of Flames">
        <div className="space-y-5 text-lg text-bone/90">
          <p>
            Hearthfire is a zero-tolerance space for racism, bigotry, and exclusion across race, gender,
            sexuality, ability, faith, or heritage. We believe honor is measured by how we stand for one another.
          </p>
          <p>
            Harassment, gatekeeping, or coded hate symbols have no place in our hall. We act quickly, document
            clearly, and remove harmful behavior without debate. Compassion is our default, but consequences are
            certain when harm is done.
          </p>
          <p>
            No flame of hatred burns here. Hearthfire stands for honor, not exclusion. We welcome families, solos,
            queer kin, interfaith folks, and anyone ready to share the work of building community.
          </p>
          <div className="rounded border border-amber/40 bg-white/5 p-6 shadow-ember">
            <h3 className="font-serif text-xl text-amber">Accountability in Practice</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base">
              <li>Dedicated inclusion liaison on every ritual team.</li>
              <li>Clear reporting pathways in person and via email.</li>
              <li>Documented follow-up with involved parties.</li>
              <li>Restorative options when safe, removal when not.</li>
            </ul>
          </div>
          <div>
            <Link
              href={externalLinks.declarationOfFlames}
              className="inline-flex items-center rounded border border-iron bg-iron/80 px-5 py-3 font-semibold text-bone transition hover:bg-amber hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              Read the full Declaration
            </Link>
          </div>
        </div>
      </Section>

      <Section title="What Is Hearthfires Stance On Inclusivity?">
        <div className="space-y-5 text-lg text-bone/90">
          <p>
            Hearthfire is a Heathen focused group. We know a lot of people have had bad experiences with Heathens
            in the past and we are well aware that Heathenry has a significant problem with white supremacy and
            bigotry broadly. Our Go�i, Wolf The Red has been an active and aggressive fighter of those hateful
            beliefs, and in 2024 he carried those principles forward and wrote the Declaration of Flames, a very
            powerful document that can be summarized as such.
          </p>
          <p>
            Inclusivity means racism and bigotry have no place in Paganism of any kind, and anyone who discriminates
            based on race, ancestry, ethnicity, place of origin, sex, gender, gender identity, gender expression,
            sexual and romantic identities, socioeconomic status, appearance, presentation, age, ability, or
            religion is not someone who should be associated with. If you stand with hatred, you stand alone.
          </p>
          <p>
            To find out more on the Declaration of Flames visit
            <br />
            <Link
              href="https://wolfthered.com/declaration-of-flames/"
              className="underline decoration-amber/40 hover:decoration-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              https://wolfthered.com/declaration-of-flames/
            </Link>
          </p>
        </div>
      </Section>
    </div>
  );
}

