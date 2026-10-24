# PowerLab

An extensible electrical engineering learning workspace for university students. PowerLab is independent of any university course. This foundation release includes a dashboard, module directory, four topic previews, responsive navigation, and persistent light/dark themes. Calculators and simulations are not implemented yet.

## Start a new conversation or task

Point ChatGPT or Codex to `TVestly/powerlab` and ask it to follow [AGENTS.md](AGENTS.md). [PROJECT_WORKFLOW.md](PROJECT_WORKFLOW.md) provides the reading guide, task process, and copyable prompts. [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) preserves approved product direction; [PROJECT_STATUS.md](PROJECT_STATUS.md) records verified progress; [ROADMAP.md](ROADMAP.md) links the prioritized tasks.

The owner's [overview in Issue #4](https://github.com/TVestly/powerlab/issues/4) is a quick entry point. Check current `main`, issues, and PRs before choosing work. A roadmap entry does not start implementation; the owner selects the task and approves its scope.

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
- `npm run audit`: check all dependencies, including development tools, for known vulnerabilities; moderate or higher findings fail the check.

GitHub Actions runs formatting, type checking, tests, the production build, and the dependency audit on pushes and pull requests. Review any failures before merging. A passing audit is a point-in-time check of known advisories, not a guarantee that software has no vulnerabilities.

## Project map

- `src/app/`: shell, routes, and workspace screens.
- `src/modules/`: typed module registry; add independent topics here.
- `src/engineering/`: future domain calculations, independent of React.
- `src/shared/math/`: future reusable mathematical utilities.
- `src/visualizations/`: future reusable visual components.
- `src/storage/`: browser preferences and future project storage adapters.

Read [PRODUCT.md](PRODUCT.md), [ARCHITECTURE.md](ARCHITECTURE.md), [MODULE_STANDARD.md](MODULE_STANDARD.md), and [ENGINEERING_STANDARDS.md](ENGINEERING_STANDARDS.md) before expanding the platform.
