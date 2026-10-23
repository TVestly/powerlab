# Working on PowerLab

Read README.md, PRODUCT.md, ARCHITECTURE.md, MODULE_STANDARD.md, and ENGINEERING_STANDARDS.md before making changes.

- Keep PowerLab independent of any course. Deliver small, complete learning capabilities.
- Use TypeScript, React, Vite, Tailwind CSS, and Vitest. Do not introduce a backend, Python, account system, AI API, or desktop packaging without a demonstrated requirement.
- Register topics through the module registry. Keep calculations separate from UI and use shared utilities instead of duplicates.
- Preserve accessible navigation, mobile layouts, light/dark themes, and clear unfinished-feature labels.
- Validate engineering models, units, assumptions, and numerical tolerances with independent expected results.
- Run npm test, npm run typecheck, npm run build, and npm run format:check for relevant changes. Report failures honestly and explain user-visible limitations.
- Use a feature branch and prepare a pull request against main when supported. Do not merge directly into main.
- Never commit credentials, generated builds, or node_modules. Explain setup and delivery in beginner-friendly language.
