/**
 * Portrait — the single source of truth for Kevin's photo.
 *
 * The image is statically imported once here (so Next.js infers its dimensions
 * and generates a blur-up placeholder), then reused across pages. Callers pass a
 * `className` to control the *shape* and size of the frame, so the same photo
 * can appear as an arch, a squircle, or a circle on different pages.
 *
 * Server Component — no client JS. Wrap it in <TiltCard> for interactivity.
 */
import Image from "next/image";
import photo from "../../public/about.jpg";
import { site } from "@/lib/site";

type PortraitProps = {
  /** Shape + size of the frame, e.g. "aspect-[4/5] rounded-t-[140px] rounded-b-3xl". */
  className?: string;
  /** Responsive sizes hint for the optimizer. */
  sizes: string;
  /** Load eagerly (use for above-the-fold images like the hero/about photo). */
  priority?: boolean;
  /** Show the subtle accent/blue wash that ties the photo into the theme. */
  overlay?: boolean;
  /** Fine-tune cropping of the (landscape) source, e.g. "object-top". */
  objectPosition?: string;
  alt?: string;
};

export function Portrait({
  className = "",
  sizes,
  priority = false,
  overlay = true,
  objectPosition = "object-center",
  alt,
}: PortraitProps) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <Image
        src={photo}
        alt={alt ?? `Portrait of ${site.name}`}
        fill
        priority={priority}
        placeholder="blur"
        sizes={sizes}
        className={`object-cover ${objectPosition}`}
      />
      {overlay && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-blue/20 mix-blend-screen"
        />
      )}
    </div>
  );
}
