# Auth Instructions

## Provider

All authentication in this app is handled exclusively by **Clerk**. Do not introduce any other auth library, custom session logic, or alternative sign-in mechanism.

## Route Protection

- `/dashboard` is a protected route. Users must be signed in to access it.
- Enforce protection in the Clerk middleware configured in `proxy.ts` — not in individual page components.
- If an unauthenticated user navigates to `/dashboard`, Clerk should redirect them to sign in.

## Homepage Redirect

- If an already-authenticated user visits the homepage (`/`), redirect them to `/dashboard`.
- Implement this redirect using Clerk's `auth()` helper inside the homepage server component or via middleware logic in `proxy.ts`.

## Sign In / Sign Up

- Sign in and sign up must **always** be triggered as a **Clerk modal** — never navigate to a dedicated `/sign-in` or `/sign-up` page.
- Use `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` from `@clerk/nextjs` for all auth trigger points.
- Do not create standalone sign-in or sign-up route pages.

## Key Clerk Components And Helpers

| Usage                    | API                                  |
| ------------------------ | ------------------------------------ |
| Protect a route (server) | `auth()` from `@clerk/nextjs/server` |
| Trigger sign-in modal    | `<SignInButton mode="modal">`        |
| Trigger sign-up modal    | `<SignUpButton mode="modal">`        |
| Show signed-in user menu | `<UserButton>`                       |
| Guard UI conditionally   | `<SignedIn>` / `<SignedOut>`         |

## What To Avoid

- Do not use NextAuth, `next-auth`, `iron-session`, JWT utilities, or any custom session approach.
- Do not add a `middleware.ts` file to replace `proxy.ts` unless the project structure is explicitly migrated.
- Do not render Clerk sign-in/sign-up as full-page routes.
