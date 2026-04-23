# UI Components Instructions

## Library

All UI elements in this app are built exclusively with **shadcn/ui**. Do not create custom components from scratch when a shadcn/ui equivalent exists.

## Rules

- **Always** use shadcn/ui components for any UI element (buttons, inputs, dialogs, forms, cards, badges, etc.).
- **Never** build a custom component that duplicates functionality provided by shadcn/ui.
- Add new shadcn/ui components via the CLI: `npx shadcn@latest add <component>`.
- All installed components live in `components/ui/`. Do not move them or alter their generated structure.
- Compose and extend shadcn/ui components through props and Tailwind utility classes, not by rewriting the component source.
- Use the `cn()` helper from `lib/utils.ts` for all conditional class merging.

## Adding A Component

1. Run `npx shadcn@latest add <component-name>` from the project root.
2. Import from `@/components/ui/<component-name>`.
3. Do not manually copy component source from the shadcn/ui docs — always use the CLI.

## Styling

- Apply layout and spacing adjustments via Tailwind classes passed as `className` props.
- Design tokens are defined in `app/globals.css`; align new work with existing CSS variables.
- Do not introduce a separate component library (e.g., MUI, Chakra, Radix primitives directly) alongside shadcn/ui.
