"use client";

/**
 * Sticky site header with the wordmark and primary navigation.
 *
 * Client Component because it reads the current pathname to mark the active
 * link (`aria-current="page"`) and style it. Links use Next's <Link> for
 * instant client-side navigation and automatic prefetching.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();

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

        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-fg"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                  {/* Accent underline marks the active route. */}
                  <span
                    className={`absolute inset-x-3 -bottom-px h-px bg-accent transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
