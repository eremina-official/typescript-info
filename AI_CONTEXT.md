# AI Context File

## Project Overview
This project is a React application built with TypeScript and Vite, designed to provide information and examples of TypeScript features. It serves as a summary of TypeScript usage patters and habits for devs moving from JavaScript to TypeScript.

## Tech Stack
- **Build Tool**: Vite
- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Material UI (MUI) v7, App.css
- **Routing**: React Router 7

## Project Structure
- `src/`: Source code root
  - `pages/`: Individual page components (lazy loaded)
  - `components/`: Reusable UI components (e.g., CodeBlock, NavigationDrawer)
  - `router/`: Router configuration (`BrowserRouter.tsx`) and path constants (`RoutePaths.ts`)
  - `assets/`: Static assets (images, SVGs)
  - `data/`: Data files
  - `App.tsx`: Main application layout with NavigationDrawer
  - `constants.ts`: Global constants including menu items and layout dimensions

## Key Conventions

### Routing
- **Lazy Loading**: All pages are lazy-loaded in `src/router/BrowserRouter.tsx` using `React.lazy`.
- **Wrapper**: Routes use `LazyPageWrapper` to handle suspense states.
- **Paths**: Route paths are defined in `src/router/RoutePaths.ts` to ensure type safety and avoid magic strings.

### Navigation
- **Menu Items**: The sidebar navigation menu items are defined in `src/constants.ts` in the `menuItems` array.
- **Drawer**: `NavigationDrawer` component handles the sidebar UI.

### Styling
- **Material UI**: The project uses MUI components (`Box`, `Typography`, `Stack`, etc.) extensively.
- **Code Highlighting**: A custom `CodeBlock` component is used for displaying code snippets.
- **Responsive**: Layout adapts to screen size using MUI's `useMediaQuery`.

### Development
- **New Pages**: To add a new page:
  1. Create the component in `src/pages/`.
  2. Add the path key and value in `src/router/RoutePaths.ts`.
  3. Import (lazy) and add the route in `src/router/BrowserRouter.tsx`.
  4. Add the menu item in `src/constants.ts`.

## Commands
- `npm start`: Start dev server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
