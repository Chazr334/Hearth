export const siteConfig = {
  name: "Hearthfire",
  tagline: "Light the Fire * Keep the Flame",
  description:
    "Hearthfire is an inclusive, historically informed Heathen community gathering kin and friends around the flame.",
  url: "https://hearthfire.example.com",
  locale: "en_US",
  contactEmail: "contact@hearthfire.org",
  address: {
    street: "123 Ember Lane",
    locality: "Asheville",
    region: "NC",
    postalCode: "28801",
    country: "USA"
  }
};

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    slogan: siteConfig.tagline,
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country
    },
    sameAs: [
      "https://instagram.com/hearthfire",
      "https://facebook.com/hearthfire"
    ]
  };
}
