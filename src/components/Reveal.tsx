/**
 * Reveal — a thin wrapper that applies the page-load fade-and-rise animation
 * (defined in globals.css) to its children, offset by `delay` milliseconds.
 *
 * It's a Server Component: the animation is pure CSS, so nothing ships to the
 * client. Use the `as` prop to keep the markup semantic (e.g. `as="section"`).
 */
import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in milliseconds before this element animates in. */
  delay?: number;
  /** The element/tag to render. Defaults to a `div`. */
  as?: ElementType;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  return (
    <Tag
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
