/**
 * Project catalogue.
 *
 * Add, remove, or reorder entries here — the /projects grid is driven entirely
 * by this array, so no JSX changes are needed to update your portfolio.
 *
 * `demoUrl` is optional: omit it and the card simply won't render a demo link.
 */

export type Project = {
  /** Project name shown as the card title. */
  title: string;
  /** One or two sentences: the problem you solved and your role. */
  description: string;
  /** Technologies used — rendered as tags. */
  stack: readonly string[];
  /** Public, working demo. Omit if the project isn't hosted anywhere. */
  demoUrl?: string;
  /** Source repository. Omit for closed-source work. */
  sourceUrl?: string;
  /** Set true to highlight a flagship project (spans wider on large screens). */
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    title: "School Finance System",
    description:
      "A web application for managing school finances — tracking fees, payments, and student records in one place.",
    stack: ["PHP"],
    sourceUrl: "https://github.com/kmadahana/school-finance-sys",
  },
  {
    title: "Financial Manager",
    description:
      "A Laravel application for managing personal or business finances, with Blade-rendered views for tracking income and expenses.",
    stack: ["Laravel", "Blade"],
    // Repo name is intentionally spelled "Finacial" — the link must match it.
    sourceUrl: "https://github.com/kmadahana/Finacial-Manager",
  },
  {
    // TODO: rename and refine the description once you decide what to call this.
    title: "First",
    description:
      "An early hands-on Laravel project where I built out routing, Blade views, and database-backed pages while learning the framework.",
    stack: ["Laravel", "Blade"],
    sourceUrl: "https://github.com/kmadahana/first",
  },
];
