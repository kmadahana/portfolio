"use client";

/**
 * Sticky site header with the wordmark and primary navigation.
 *
 * Client Component because it reads the current pathname to mark the active
 * link (`aria-current="page"`) and style it, and holds the open/closed state
 * of the mobile menu. Links use Next's <Link> for instant client-side
 * navigation and automatic prefetching.
 *
 * Responsive behaviour: from `sm` up the links sit inline next to the
 * wordmark; below `sm` they collapse behind a hamburger toggle that reveals a
 * stacked panel (the inline row would otherwise overflow narrow phones).
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { navItems, site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-fg transition-colors hover:text-blue-bright"
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        {/* Inline links — from the `sm` breakpoint up. */}
        <ul className="hidden items-center gap-1 sm:flex sm:gap-2">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    active ? "text-fg" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                  {/* Accent underline marks the active route. */}
                  <span
                    className={`absolute inset-x-3 -bottom-px h-px bg-accent transition-opacity duration-200 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger toggle — only below `sm`. */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-xl text-fg-muted transition-colors hover:border-accent hover:text-accent sm:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile panel — stacked links, shown when the toggle is open. */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-border transition-[max-height,opacity] duration-300 ease-out sm:hidden ${
          open
            ? "max-h-72 border-t opacity-100"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <ul className="space-y-1 px-6 py-3">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors duration-200 ${
                    active
                      ? "bg-surface/60 text-fg"
                      : "text-fg-muted hover:bg-surface/40 hover:text-fg"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
