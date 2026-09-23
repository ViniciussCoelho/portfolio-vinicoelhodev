# vinicoelho — portfolio

Personal portfolio of Vinicius Coelho. Next.js (App Router) + TypeScript + Tailwind CSS v4,
fully static, with the same visual identity as the blog.

## Running

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build && npm start
```

In `npm run dev`, dashed hints show which values are still missing, and placeholder projects are
visible. Neither shows up in production builds.

## Where to edit content

| What                                        | File                                      |
| ------------------------------------------- | ----------------------------------------- |
| Name, role, description, site URL           | `src/data/site.ts`                        |
| GitHub, LinkedIn, email, resume, `BLOG_URL` | `src/data/site.ts`                        |
| Hero intro and About text                   | `src/data/about.ts`                       |
| Experience and education                    | `src/data/experience.ts`                  |
| Projects                                    | `src/data/projects.ts`                    |
| Tech stack                                  | `src/data/stack.ts`                       |
| Interface strings (headings, notes, nav…)   | `src/i18n/dictionaries/{pt,en}.ts`        |

## Languages

The site is available in Portuguese (`/pt`, default) and English (`/en`). Translatable content in
`src/data/` is written as `{ en: "...", pt: "..." }`; plain strings (e.g. `"PostgreSQL"`) are
shared by both languages.

`src/proxy.ts` redirects `/` to the visitor's language: the one they last picked in the header
dropdown (remembered in a `lang` cookie), otherwise the browser's `Accept-Language`, otherwise
Portuguese.

Links can also be set through environment variables (see `.env.example`), which is handy on Vercel.
Empty values are not rendered.

Resume: put the PDF in `public/resume.pdf` and set `resume: "/resume.pdf"`.
Project images: put them under `public/images/projects/` and fill in `image` on the project.

## Deploy

Import the repo on Vercel; no configuration needed. Set `NEXT_PUBLIC_SITE_URL` to the final domain
so canonical URLs, Open Graph, `robots.txt` and `sitemap.xml` use it (it falls back to Vercel's
production URL otherwise).
