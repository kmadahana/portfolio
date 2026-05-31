/**
 * Site footer: a short note and the row of social icons.
 * Server Component — no interactivity needed.
 */
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export function Footer() {
  // Rendered at build time; safe to compute the year here for a static site.
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-sm text-fg-subtle">
          © {year} {site.name}. 
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
