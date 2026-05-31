"use client";

/**
 * CurrentlyInto — an interactive snapshot of where Kevin's focus is right now.
 *
 * Pick a facet (click, or focus + Enter/Space, or hover) and its detail slides
 * in. Keyboard-accessible via a radiogroup pattern. Client Component because it
 * holds the selected-facet state.
 */
import { useState } from "react";

type Facet = {
  key: string;
  label: string;
  detail: string;
};

const facets: Facet[] = [
  {
    key: "frontend",
    label: "Frontend",
    detail:
      "Clean, intuitive interfaces with careful attention to layout and detail.",
  },
  {
    key: "backend",
    label: "Backend",
    detail:
      "The logic, data, and APIs that support the interface — the layer I'm growing into.",
  },
  {
    key: "endtoend",
    label: "End to end",
    detail: "Taking a project from concept through to a working product.",
  },
  {
    key: "quality",
    label: "Code quality",
    detail:
      "Writing code that is clean, maintainable, and built to last.",
  },
];

export function CurrentlyInto() {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-2xl border border-border bg-bg-elevated/50 p-6">
      <p className="font-mono text-sm text-fg-muted">Where I&rsquo;m focused</p>

      <div
        role="radiogroup"
        aria-label="Current focus areas"
        className="mt-4 flex flex-wrap gap-2"
      >
        {facets.map((facet, i) => {
          const isActive = i === active;
          return (
            <button
              key={facet.key}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "border-accent bg-accent/10 text-accent-bright"
                  : "border-border text-fg-muted hover:border-border-strong hover:text-fg"
              }`}
            >
              {facet.label}
            </button>
          );
        })}
      </div>

      {/* Detail panel. `key` retriggers the reveal animation on each change. */}
      <p
        key={active}
        className="reveal mt-5 min-h-12 text-lg leading-relaxed text-fg"
      >
        {facets[active].detail}
      </p>
    </div>
  );
}
