# Architecture Instructions

## Folder Structure

The project should follow this structure:

- app/                → Main application code
  - _assets/          → Static assets (fonts, texts, etc.)
  - _components/      → Reusable UI components
  - _lib/             → Utility functions and helpers, hooks, types, etc.
  - _styles/          → Global and component styles, Tailwind configuration
  - (root)            → Routes and layouts (e.g., page.tsx, layout.tsx)
- public/             → Public files (SVGs, images, etc.)
- tests/              → Tests

---

## Architecture Principles

- Components should not contain business logic.
- Components should not directly access the database.
- Data access must go through repositories.
- Business logic must live in services.
- Services can use repositories.
- Pages and components call services, not repositories directly.
- Avoid tight coupling between modules.
- Prefer dependency injection when possible.
