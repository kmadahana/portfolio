# Portfolio

A personal portfolio site for a full-stack engineer, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Self-hosted fonts via `next/font`, image optimization via `next/image`, no backend.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Where to edit your info

Everything personal lives in a couple of typed files — no need to touch the page markup.

| What | File |
| --- | --- |
| **Name, tagline, bio, email, phone, social URLs** | `src/lib/site.ts` |
| **Projects** (title, description, stack, demo + source links) | `src/lib/projects.ts` |
| **About photo** | `public/about.jpg` |
| **Colors & fonts** | `src/app/globals.css` (palette CSS variables) and `src/app/layout.tsx` (fonts) |

### Contact placeholders

`src/lib/site.ts` ships with placeholders — swap these for the real values:

- `email`: `you@example.com`
- `phone`: `+10000000000` (used for both `tel:` and the `wa.me` WhatsApp link, which strips non-digits automatically)
- `socials.github` / `.linkedin` / `.instagram` / `.twitter`: `https://…/yourhandle`

The contact page derives the correct `mailto:`, `tel:`, and `https://wa.me/<number>` links from these values.

### Swapping the about photo

Replace `public/about.jpg` with your own image (keep the filename, or update the import in `src/app/about/page.tsx`). The photo is statically imported, so Next.js infers its dimensions and generates a blur-up placeholder automatically.

## Project structure

```
src/
  app/
    layout.tsx        # shared shell: fonts, header nav, footer, metadata
    page.tsx          # / — hero
    about/page.tsx    # /about — bio + photo
    projects/page.tsx # /projects — grid driven by lib/projects.ts
    contact/page.tsx  # /contact — contact links
    globals.css       # palette (CSS variables), atmosphere, animations
  components/          # Nav, Footer, ProjectCard, ButtonLink, Reveal, icons…
  lib/
    site.ts            # all personal details + link helpers
    projects.ts        # project catalogue
public/
  about.jpg            # about-page photo
```

## Design notes

- **Theme:** deep navy base with a sharp warm-red accent, defined as CSS variables in `globals.css` and exposed to Tailwind via `@theme`.
- **Fonts:** Bricolage Grotesque (display) + Manrope (body) + JetBrains Mono (accents), self-hosted through `next/font`.
- **Motion:** a pure-CSS staggered page-load reveal that respects `prefers-reduced-motion`.
- **Accessibility:** semantic landmarks, labelled links, alt text, visible focus rings, and keyboard-navigable throughout.
