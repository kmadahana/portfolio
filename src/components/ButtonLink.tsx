/**
 * A link styled as a button, in two variants:
 *  - "primary":   solid accent fill, for the main call-to-action.
 *  - "secondary": outlined, for supporting actions.
 *
 * Renders an internal Next <Link> for app routes (e.g. "/about") and a plain
 * <a> (new tab, safe rel) for external URLs, chosen automatically from `href`.
 */
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-bright shadow-[0_8px_30px_-8px_var(--red)]",
  secondary:
    "border border-border-strong text-fg hover:border-accent hover:text-accent",
};

const baseClasses =
  "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-offset-4";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Force external behaviour; otherwise inferred from an "http"/"mailto"/"tel" href. */
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: ButtonLinkProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  const isExternal = external ?? !href.startsWith("/");

  if (isExternal) {
    const opensNewTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(opensNewTab
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
