# Coding Standards

## General

- Use TypeScript in all files.
- Avoid using `any`.
- Use strict typing whenever possible.
- Use descriptive names for variables, functions, and files.
- Do not create files longer than ~300 lines.
- Split large components into smaller components.
- Prefer pure functions when possible.
- Avoid deeply nested logic.

---

## React / Next.js

- All components are Server Components by default.
- Add "use client" only when necessary.
- Do not fetch data in Client Components if it can be fetched on the server.
- Keep Client Components small.
- Put UI components in `app/_components/`.
- Put business logic in `app/_services/`.
- Put utilities in `app/_lib/`.

---

## Styling

- Prefer Tailwind (if the project uses it).
- Avoid inline styles.
- Create reusable UI components.
- Keep styling consistent across the app.
