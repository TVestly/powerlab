# PowerLab

An extensible electrical engineering learning workspace for university students. PowerLab is independent of any university course. This foundation release includes a dashboard, module directory, four topic previews, responsive navigation, and persistent light/dark themes. Calculators and simulations are not implemented yet.

## Open the application

1. Install **Node.js 24 LTS**, which includes npm.
2. Open a terminal in the `powerlab` folder (the folder containing this file).
3. Run `npm ci` once to install the required tools.
4. Run `npm run dev` and leave that terminal open.
5. Open the local address printed by Vite in your browser (normally port 5173).
6. Stop the application with Ctrl+C when finished.

No account, API key, database, or backend is required. To reopen the application later, repeat step 4. In a remote development environment, use your editor's port forwarding for port 5173.

## Development commands

- `npm test`: automated navigation, module discovery, and theme tests.
- `npm run typecheck`: TypeScript validation.
- `npm run build`: type checking and production build into `dist/`.
- `npm run preview`: serve the built version locally.
- `npm run format:check`: check formatting; `npm run format` applies formatting.

## Project map

- `src/app/`: shell, routes, and workspace screens.
- `src/modules/`: typed module registry; add independent topics here.
- `src/engineering/`: future domain calculations, independent of React.
- `src/shared/math/`: future reusable mathematical utilities.
- `src/visualizations/`: future reusable visual components.
- `src/storage/`: browser preferences and future project storage adapters.

Read [PRODUCT.md](PRODUCT.md), [ARCHITECTURE.md](ARCHITECTURE.md), [MODULE_STANDARD.md](MODULE_STANDARD.md), and [ENGINEERING_STANDARDS.md](ENGINEERING_STANDARDS.md) before expanding the platform.
