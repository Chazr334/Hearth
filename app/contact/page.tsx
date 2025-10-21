import { Metadata } from "next";
import { Mail } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-16 pb-24">
      <Section title="Reach Out">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <p className="text-lg text-bone/90">
              We welcome questions about gatherings, accessibility, press, and
              collaboration. Use the form and a member of the Hearthfire council
              will reply within three days.
            </p>
            <ContactForm />
          </div>
          <div className="space-y-6 rounded border border-amber/30 bg-white/5 p-6">
            <div className="flex items-center gap-3 text-amber">
              <Mail aria-hidden className="h-6 w-6" />
              <h3 className="font-serif text-xl">Auto-response</h3>
            </div>
            <p className="text-sm text-bone/80">
              Thank you for writing to Hearthfire. We have received your message
              and will reply soon. For urgent matters at an active event, please
              speak with a coordinator on site.
            </p>
            <div>
              <h4 className="font-serif text-lg text-amber">Social</h4>
              <ul className="mt-3 space-y-2 text-sm text-bone/85">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="underline decoration-transparent hover:decoration-amber"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
