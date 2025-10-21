export type EventTag = "ritual" | "service" | "fellowship";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  tags: EventTag[];
}

export const events: Event[] = [
  {
    id: "first-light",
    title: "First Light of the Brume Season",
    date: "2024-11-09",
    time: "Gather at 10:00 AM * Ritual at Noon",
    location: "Briar Creek Park Pavilion, Asheville, NC",
    summary:
      "We kindle the horgr stones for the quiet months, sharing harvest stories and blessing winter stores.",
    tags: ["ritual", "fellowship"]
  },
  {
    id: "river-cleanse",
    title: "River Cleanse & Hearthcraft",
    date: "2024-12-07",
    time: "Meet at 10:00 AM * Potluck at 1:00 PM",
    location: "French Broad River Greenway, Asheville, NC",
    summary:
      "Morning service tending the river trail, followed by craft tables for charms and yuletide offerings.",
    tags: ["service", "fellowship"]
  },
  {
    id: "embers-night",
    title: "Night of Embers Blot",
    date: "2025-01-18",
    time: "Setup at 5:00 PM * Ritual at Dusk",
    location: "Laurel Ridge Lodge, Black Mountain, NC",
    summary:
      "An evening hall blot with story, stone libations, and the turning of the flame toward the new year.",
    tags: ["ritual"]
  }
];

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/hearthfire"
  },
  {
    label: "Facebook",
    href: "https://facebook.com/hearthfire"
  },
  {
    label: "Email",
    href: "mailto:contact@hearthfire.org"
  }
];

export const externalLinks = {
  declarationOfFlames: "https://example.com/declaration-of-flames"
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & Belief" },
  { href: "/inclusion", label: "Community & Inclusion" },
  { href: "/events", label: "Rituals & Events" },
  { href: "/field-guide", label: "Field Guide" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/policies", label: "Rules & Etiquette" },
  { href: "/contact", label: "Contact" }
];
