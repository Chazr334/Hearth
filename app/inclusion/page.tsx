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
      <Section title="Declaration of Flames">
        <div className="space-y-5 text-lg text-bone/90">
          <p>
            Hearthfire is a zero-tolerance space for racism, bigotry, and
            exclusion across race, gender, sexuality, ability, faith, or
            heritage. We believe honor is measured by how we stand for one
            another.
          </p>
          <p>
            Harassment, gatekeeping, or coded hate symbols have no place in our
            hall. We act quickly, document clearly, and remove harmful behavior
            without debate. Compassion is our default, but consequences are
            certain when harm is done.
          </p>
          <p>
            No flame of hatred burns here. Hearthfire stands for honor, not
            exclusion. We welcome families, solos, queer kin, interfaith folks,
            and anyone ready to share the work of building community.
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
    </div>
  );
}
