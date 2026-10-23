# Working on PowerLab

Read README.md, PRODUCT.md, ARCHITECTURE.md, MODULE_STANDARD.md, and ENGINEERING_STANDARDS.md before making changes.

- Keep PowerLab independent of any course. Deliver small, complete learning capabilities.
- Use TypeScript, React, Vite, Tailwind CSS, and Vitest. Do not introduce a backend, Python, account system, AI API, or desktop packaging without a demonstrated requirement.
- Register topics through the module registry. Keep calculations separate from UI and use shared utilities instead of duplicates.
- Preserve accessible navigation, mobile layouts, light/dark themes, and clear unfinished-feature labels.
- Validate engineering models, units, assumptions, and numerical tolerances with independent expected results.
- Run npm test, npm run typecheck, npm run build, and npm run format:check for relevant changes. Report failures honestly and explain user-visible limitations.
- For dependency changes, also run npm run audit, inspect the lockfile diff, and verify a clean npm ci. Resolve moderate-or-higher audit findings before merging; do not use npm audit fix --force without reviewing the proposed dependency changes.
- Use a feature branch and prepare a pull request against main when supported. Do not merge directly into main.
- Never commit credentials, generated builds, or node_modules. Explain setup and delivery in beginner-friendly language.

## Durable project context and handoffs

- Before planning or implementing, read `PROJECT_CONTEXT.md` (durable product intent), `PROJECT_STATUS.md` (current verified snapshot), and the task-relevant docs. Do not rely on old conversation transcripts as the source of truth.
- The GitHub `main` branch and merged pull requests determine what has been integrated. Distinguish implemented, tested, proposed, and merely documented features. Unmerged branch work must not be described as shipped.
- For significant changes, update affected product/architecture/engineering documentation in the same pull request; preserve clear distinction between current behavior and planned capabilities.
- Report to the non-programmer owner in plain English: what changed, where to preview it, what tests actually ran, known gaps, and the recommended next small task with rationale.
- Never quietly rewrite approved product vision or introduce architectural dependencies solely because a library is fashionable. Record substantive departures as explicit proposals for owner review.
- The planned Task 002 project-tracking workflow is **not completed** by merely adding context/status files; its future backlog, issue conventions, and roadmap require separate approval and implementation.
