import Link from "next/link";

import { navigationLinks, socialLinks } from "@/lib/data";
import { siteConfig } from "@/lib/seo";

export function SiteFooter() {
  return (
    <footer className="border-t border-amber/20 bg-obsidian/95">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="font-display text-lg uppercase tracking-[0.3em] text-amber">
            Hearthfire
          </h3>
          <p className="text-sm text-bone/70">
            Light the Fire * Keep the Flame. Inclusive Heathen community rooted
            in honor, story, and care.
          </p>
          <p className="text-sm text-bone/60">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.locality}, {siteConfig.address.region}{" "}
            {siteConfig.address.postalCode}
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg text-amber">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-bone/80">
            {navigationLinks.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-amber">Gathering Care</h4>
          <ul className="mt-4 space-y-2 text-sm text-bone/80">
            {navigationLinks.slice(4).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-amber">Stay Connected</h4>
          <ul className="mt-4 space-y-2 text-sm text-bone/80">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-amber/10 bg-obsidian py-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-smoke">
          We keep the flame for all who seek wisdom, kinship, and the light of
          the hearth.
        </p>
      </div>
    </footer>
  );
}
