# TechStack Conference 2026 - Project Overview

This is the source code for the "TechStack Conference 2026" website, a modern single-page application built with React, Vite, and TypeScript. It serves as the information hub for the conference, featuring session catalogs, schedules, speaker details, and registration information.

## Technology Stack

*   **Framework:** React 19
*   **Build Tool:** Vite 7
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS 4, PostCSS, clsx, Framer Motion (animations)
*   **Routing:** React Router DOM 7
*   **Icons:** Lucide React
*   **Testing:** Vitest, React Testing Library
*   **Linting:** ESLint

## Building and Running

### Prerequisites
*   Node.js (LTS version recommended)
*   npm

### Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with HMR. |
| `npm run build` | Compiles the application for production (TypeScript check + Vite build). |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint to check for code quality and style issues. |
| `npm run test` | Runs unit tests using Vitest. |
| `npm run preflight` | Runs linting, tests, and a production build verification. |

## Architecture & Key Files

The project follows a feature-based and component-driven structure:

*   **`src/App.tsx`**: The main entry point for routing. It utilizes `React.lazy` and `Suspense` for code-splitting routes to optimize performance.
*   **`src/main.tsx`**: Application entry point where the React app is mounted.
*   **`src/components/Layout.tsx`**: Defines the global application shell, including the responsive navigation header, footer, and dark/light mode toggling logic.
*   **`src/lazyLoad.ts`**: Contains helper functions for lazy loading route components, often used for prefetching strategies in the navigation.
*   **`src/pages/`**: Contains the top-level page components (e.g., `Home.tsx`, `Catalog.tsx`, `About.tsx`).
*   **`src/components/`**: Reusable UI components (e.g., `Loading.tsx`, `ParticleBackground.tsx`).
*   **`src/data/`**: Hosts static data and TypeScript interfaces that drive the application content (e.g., `sessions.ts` for session data).

## Development Conventions

*   **Styling:** Use Tailwind CSS utility classes. Dynamic class names should be constructed using `clsx` or `tailwind-merge`.
*   **Dark Mode:** The application supports dark mode via the `dark` class on the `<html>` element, managed in `Layout.tsx`.
*   **Performance:** Route components should be lazy-loaded. Navigation links often implement "prefetch on hover" behavior using functions from `lazyLoad.ts`.
*   **Type Safety:** Strict TypeScript rules are enforced. Ensure all components and data structures are properly typed.
*   **Testing:** Unit tests are located alongside their source files (e.g., `Home.test.tsx`) or in `src/components/` for component tests.
