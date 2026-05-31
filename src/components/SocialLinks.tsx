/**
 * A row of icon links to external social profiles, driven by `site.socials`.
 * Reused in the footer. Each link has an accessible label and opens in a new tab.
 */
import { site } from "@/lib/site";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

type SocialEntry = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const entries: SocialEntry[] = [
  { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "X (Twitter)", href: site.socials.twitter, Icon: XIcon },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {entries.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg-muted text-lg transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:text-accent"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
