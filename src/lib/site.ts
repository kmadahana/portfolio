/**
 * Central site configuration.
 *
 * This is the one place to edit your personal details — name, tagline, and every
 * external link used across the site (header, footer, hero, and contact page).
 * Swap the placeholder values below for your own.
 */

/** A single navigation entry rendered in the header and used for the page title map. */
export type NavItem = {
  href: string;
  label: string;
};

export const navItems: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const site = {
  /** Your name, shown in the hero, header wordmark, and metadata. */
  name: "Kevin Madahana",

  /** Short role label used in metadata and the about page. */
  role: "Junior Developer",

  /** One-line positioning statement for the hero. Keep it punchy. */
  tagline: "Building clean, considered interfaces — and the systems beneath them.",

  /** A slightly longer supporting line shown beneath the hero tagline. */
  intro:
    "Final-year Computer Science student at Kabarak University and junior developer at Finsprint, focused on frontend and growing into full-stack.",

  /**
   * Bio paragraphs for the /about page, rendered one after another with a
   * staggered reveal. Edit the prose here.
   */
  bio: [
    "I'm Kevin, a final-year Computer Science student at Kabarak University and a junior developer at Finsprint, where I contribute to building software used in production.",
    "My foundation is in frontend development. I care about interfaces that are clean, intuitive, and considered — where thoughtful layout and attention to detail make a product genuinely pleasant to use. That focus on the user-facing layer is where I do my strongest work.",
    "More recently, I've been expanding into backend development — the logic, data, and systems that support the interface. I'm motivated by understanding how an application works end to end, and by growing into a developer who can take a project from concept to a fully functioning product. Currently, I'm deepening my skills in React and TypeScript and working with APIs, databases, and Node.",
    "I'm early in my career and committed to continuous learning. I approach each project as an opportunity to improve, and I value writing code that is clean, maintainable, and built to last.",
  ],

  /** Direct contact details. */
  email: "the.kevn.makamu@gmail.com",
  phone: "+254743154550",

  /** External profiles. The keys map to icons in the footer and contact page. */
  socials: {
    github: "https://github.com/kmadahana",
    linkedin: "https://www.linkedin.com/in/kevin-madahana-150909246/",
    instagram: "https://www.instagram.com/madahanaaa/",
    // Twitter / X
    twitter: "https://x.com/kmadahanaa",
  },
} as const;

/**
 * Helpers that turn raw contact details into correctly-schemed links.
 * `wa.me` expects the number with no `+`, spaces, or dashes.
 */
export const contactLinks = {
  mailto: `mailto:${site.email}`,
  tel: `tel:${site.phone}`,
  whatsapp: `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}`,
} as const;
