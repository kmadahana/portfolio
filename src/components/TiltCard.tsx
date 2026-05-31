"use client";

/**
 * TiltCard — wraps content in a subtle, cursor-following 3D tilt with a moving
 * light glare. Used to make the portrait feel alive rather than static.
 *
 * Pointer-driven, so it's a Client Component. It bails out entirely for users
 * who prefer reduced motion and for touch/coarse pointers (no hover to track).
 */
import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";

type TiltCardProps = {
  children: ReactNode;
  /** Maximum tilt in degrees at the corners. */
  max?: number;
  className?: string;
};

export function TiltCard({ children, max = 9, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Tilt angles + normalized cursor position (for the glare), all in one state.
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const handleMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      // Only fine pointers (mouse/trackpad) drive the tilt.
      if (e.pointerType !== "mouse") return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width; // 0..1
      const py = (e.clientY - r.top) / r.height; // 0..1
      setT({
        ry: (px - 0.5) * 2 * max, // left/right → rotateY
        rx: (0.5 - py) * 2 * max, // up/down → rotateX
        gx: px * 100,
        gy: py * 100,
        active: true,
      });
    },
    [max],
  );

  const reset = useCallback(
    () => setT({ rx: 0, ry: 0, gx: 50, gy: 50, active: false }),
    [],
  );

  const style: CSSProperties = {
    transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${
      t.active ? 1.02 : 1
    })`,
    transition: t.active ? "transform 80ms linear" : "transform 400ms ease",
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={style}
      // motion-reduce: drop the transform animation for sensitive users.
      className={`relative will-change-transform motion-reduce:!transform-none ${className}`}
    >
      {children}
      {/* Glare that follows the cursor; fades out when not hovering. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 motion-reduce:hidden"
        style={{
          opacity: t.active ? 1 : 0,
          background: `radial-gradient(220px circle at ${t.gx}% ${t.gy}%, rgba(255,255,255,0.18), transparent 60%)`,
        }}
      />
    </div>
  );
}
