import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/Reveal";
import {
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/icons";
import { contactLinks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

type ContactMethod = {
  /** Accessible label (screen readers + hover tooltip); not shown as text. */
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Internal/scheme links (mailto:, tel:) shouldn't open a new tab. */
  newTab?: boolean;
};

// Each method uses the correct URL scheme: mailto:, tel:, wa.me, or https://.
const methods: ContactMethod[] = [
  { label: "Email", href: contactLinks.mailto, Icon: MailIcon },
  { label: "Phone", href: contactLinks.tel, Icon: PhoneIcon },
  { label: "WhatsApp", href: contactLinks.whatsapp, Icon: WhatsAppIcon, newTab: true },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon, newTab: true },
  { label: "X (Twitter)", href: site.socials.twitter, Icon: XIcon, newTab: true },
];

export default function ContactPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
      <Reveal as="p" className="font-mono text-sm text-fg-muted">
        Say hello
      </Reveal>
      <Reveal
        as="h1"
        delay={80}
        className="mt-3 font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl"
      >
        Get in touch
        <span className="text-accent">.</span>
      </Reveal>
      <Reveal
        as="p"
        delay={160}
        className="mt-4 max-w-md text-lg leading-relaxed text-fg-muted"
      >
        The fastest way to reach me is email, but I&rsquo;m around on all of
        these.
      </Reveal>

      {/* Icons only — each links out with the correct scheme. */}
      <Reveal
        as="ul"
        delay={240}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        {methods.map(({ label, href, Icon, newTab }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(newTab
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-bg-elevated/50 text-2xl text-fg-muted transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-accent focus-visible:text-accent"
            >
              <Icon />
            </a>
          </li>
        ))}
      </Reveal>
    </main>
  );
}
