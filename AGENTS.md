# Project Agent Instructions

This repository is a Next.js 16 App Router application for a link shortener. Treat these instructions as the default operating rules for any LLM working in this project.

## Source Of Truth

- Read the relevant guide in `node_modules/next/dist/docs/` before changing any Next.js behavior, routing, server/component patterns, or app directory conventions.
- Use the repository files as the primary source of truth for conventions:
  - `app/layout.tsx` and `app/page.tsx` for app structure
  - `proxy.ts` for Clerk middleware and route matching
  - `db/schema.ts` and `drizzle.config.ts` for database shape and migrations
  - `components/ui/*` and `lib/utils.ts` for shared UI patterns
  - `app/globals.css` for design tokens and global styling
- Topic-specific instructions should live in separate markdown files under `docs/`. Keep this file focused on always-on project rules and point new guidance to the docs directory instead of expanding this file endlessly.
- **CRITICAL: Before writing ANY code, you MUST read every relevant `.md` file in the `docs/` directory. This is non-negotiable. Skipping this step will result in incorrect, inconsistent, or policy-violating output.**
  - `docs/auth.md` — Clerk auth rules: route protection, homepage redirect, modal-only sign in/sign up
  - `docs/ui-components.md` — UI component rules: always use shadcn/ui, never create custom duplicates

## Stack And Structure

- Framework: Next.js 16 with the App Router.
- Language: TypeScript.
- Styling: Tailwind CSS 4 with shadcn/ui-style components and `class-variance-authority` variants.
- Auth: Clerk. The middleware entry point is the root-level `proxy.ts`; do not assume a `src/` directory or a legacy middleware location.
- Database: Drizzle ORM with PostgreSQL via `@neondatabase/serverless`.

## Working Rules

- Prefer the smallest correct change. Do not rewrite unrelated code or reformat whole files.
- Preserve the existing architecture and folder layout unless the task explicitly calls for a broader refactor.
- Favor server components by default in the App Router. Add client components only when state, effects, event handlers, or browser APIs require them.
- Keep TypeScript strict and explicit. Avoid `any`, unsafe casts, and hidden type holes unless there is no practical alternative.
- Use existing path aliases and shared helpers instead of introducing new ad hoc imports.
- Do not create a `src/` directory for new work in this repository.

## Next.js Rules

- Before adding or changing framework behavior, verify the current Next.js 16 documentation. This project explicitly warns that APIs and conventions may differ from older Next.js assumptions.
- Use App Router patterns for pages, layouts, metadata, route handlers, and server actions.
- Keep `app/layout.tsx` as the top-level shell and avoid duplicating global providers or global markup in child routes.
- Use route-level files and nested layouts only when they improve clarity or isolate concerns.

## Auth Rules

- Assume Clerk is part of the baseline app shell.
- Keep auth-aware logic consistent with the existing `ClerkProvider`, `SignInButton`, `SignUpButton`, `UserButton`, and `auth()` usage.
- If a route needs protection, handle it in the App Router or middleware flow that matches the existing `proxy.ts` setup.
- Do not move Clerk middleware into a `middleware.ts` file unless the project structure changes and the new approach is verified first.

## UI And Styling Rules

- Refer to `docs/ui-components.md` before adding or modifying any UI element.
- All UI is built with shadcn/ui. Do not create custom components that duplicate shadcn/ui functionality.
- Reuse the shared `Button` component and `cn()` utility before adding new button primitives or duplicate class composition logic.
- Follow the existing Tailwind token system in `app/globals.css`. Prefer the project’s design tokens over hard-coded colors and ad hoc styling.
- Keep interfaces accessible: visible focus states, semantic elements, good contrast, and sensible keyboard behavior.
- Maintain the repo’s existing visual language unless the task explicitly asks for a redesign.
- If you add new shared UI patterns, keep them consistent with shadcn/ui conventions and the variant-based approach used in `components/ui/button.tsx`.

## Data And Database Rules

- Define schema changes in `db/schema.ts` and keep `drizzle.config.ts` aligned with the schema location and output path.
- Treat migrations and schema updates as first-class changes; do not hand-wave database edits in UI-only work.
- When database behavior changes, verify the runtime assumptions around PostgreSQL and the Neon driver before shipping the code.

## Code Quality Rules

- Prefer readable, composable functions over large monolithic components.
- Use named exports for shared utilities and components when the repo already follows that pattern.
- Keep JSX simple and declarative. If markup gets dense, extract a component.
- Do not introduce new abstractions unless they reduce repetition or clarify a real pattern.
- Avoid unnecessary comments. Add a comment only when the code would otherwise be hard to understand.

## Validation Rules

- After making code changes, run the most relevant validation step available, usually `npm run lint` and `npm run build` when the change touches application code.
- If the change affects database schema or migrations, validate the Drizzle setup before concluding the task.
- Fix any issues introduced by the change before handing the work back.

## Documentation Rules

- Put topic-specific guidance in `docs/*.md` files.
- If a recurring pattern or decision is needed, document it once in `docs/` and reference it from here.
- If existing documentation conflicts with the codebase, treat the codebase as the authority and update the docs to match reality.

## When In Doubt

- Inspect the current files in the repo before making assumptions.
- Prefer the existing implementation style over theoretical best practices from older Next.js knowledge.
- If a task depends on missing project guidance, create or update the relevant file under `docs/` rather than expanding this root instructions file with one-off details.
