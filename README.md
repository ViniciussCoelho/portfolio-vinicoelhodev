# portfolio-vinicoelhodev

My personal portfolio. It uses the same visual identity as my [blog](https://github.com/ViniciussCoelho/blog), with a sketchbook look: hand drawn doodles, a dotted paper background and the bunny from the blog logo.

The site is available in Portuguese and English.

## Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS 4
- No extra dependencies. Client side JavaScript is limited to the dark mode toggle and a small IntersectionObserver that starts the doodle animations when they enter the screen. The animations themselves are CSS, and the language dropdown uses a native `<details>`.

All pages are generated statically at build time.

## Running locally

```bash
npm install
npm run dev
```

The site opens at http://localhost:3000.

Other commands:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

In dev mode the page shows dashed hints for values that are still missing, and the example projects are visible. None of this shows up in the production build.

## Editing content

All content lives in `src/data/`, separate from the components:

| What | File |
| --- | --- |
| Name, role, description, site URL | `src/data/site.ts` |
| GitHub, LinkedIn, email, resume, blog URL | `src/data/site.ts` |
| Hero and About text | `src/data/about.ts` |
| Experience and education | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Tech stack | `src/data/stack.ts` |
| Interface text (headings, nav, notes) | `src/i18n/dictionaries/pt.ts` and `en.ts` |

Links can also be set through environment variables (see `.env.example`). If a value is empty, it's not rendered on the page.

To add a project, add an item to `src/data/projects.ts`. Items with `placeholder: true` only show up in dev mode, so remove the flag once the project is filled in. Project images go in `public/images/projects/`.

To add the resume, put the PDF in `public/resume.pdf` and set `resume: "/resume.pdf"` in `src/data/site.ts`.

## Languages

There are two routes: `/pt` (default) and `/en`. Translated content is written as `{ en: "...", pt: "..." }`. Plain strings like `"PostgreSQL"` are the same in both languages.

`src/proxy.ts` handles the `/` route and redirects to:

1. the language picked in the header dropdown (saved in a `lang` cookie), or
2. the browser language (`Accept-Language`), or
3. Portuguese.

## Deploy

The project is ready for Vercel. Just import the repository, no extra configuration needed.

After the first deploy, set `NEXT_PUBLIC_SITE_URL` with the final domain, so canonical URLs, Open Graph, `robots.txt` and `sitemap.xml` use it. Without it, the build uses the Vercel production URL. To show the blog and YouTube links, set `BLOG_URL` and `YOUTUBE_URL` as well.
