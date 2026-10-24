# Working on PowerLab

## Start every task

1. Read this file, then [README.md](README.md), [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md), and [PROJECT_STATUS.md](PROJECT_STATUS.md) for purpose, approved decisions, and verified progress.
2. Read [ROADMAP.md](ROADMAP.md) and [PROJECT_WORKFLOW.md](PROJECT_WORKFLOW.md) for priorities, the task lifecycle, document ownership, and reusable prompts.
3. Before making changes, read [PRODUCT.md](PRODUCT.md), [ARCHITECTURE.md](ARCHITECTURE.md), [MODULE_STANDARD.md](MODULE_STANDARD.md), and [ENGINEERING_STANDARDS.md](ENGINEERING_STANDARDS.md), plus task-specific documents and code.
4. Inspect current `main`, the target issue and its comments, relevant merged/open PRs, and available check results. State the baseline and any access limits. Resolve stale summaries against evidence; do not infer progress from chat history.

## Implementation rules

- Keep PowerLab independent of any course. Deliver small, complete learning capabilities.
- Use TypeScript, React, Vite, Tailwind CSS, and Vitest. Do not introduce a backend, Python, account system, AI API, or desktop packaging without a demonstrated requirement.
- Register topics through the module registry. Keep calculations separate from UI and use shared utilities instead of duplicates.
- Preserve accessible navigation, mobile layouts, light/dark themes, and clear unfinished-feature labels.
- Validate engineering models, units, assumptions, and numerical tolerances with independent expected results.
- Run npm test, npm run typecheck, npm run build, and npm run format:check for relevant changes. Report failures honestly and explain user-visible limitations.
- For dependency changes, also run npm run audit, inspect the lockfile diff, and verify a clean npm ci. Resolve moderate-or-higher audit findings before merging; do not use npm audit fix --force without reviewing the proposed dependency changes.
- Work on a dedicated branch from current `main`, preserving existing local work. Link the approved issue in the PR. Do not merge without explicit owner approval or start the next task automatically.
- Never commit credentials, generated builds, or node_modules. Explain setup and delivery in beginner-friendly language.

## Durable project context and handoffs

- The GitHub `main` branch and merged pull requests determine what has been integrated. Distinguish implemented, tested, proposed, and merely documented features. Unmerged branch work must not be described as shipped.
- Update affected documentation in the same PR: `PROJECT_STATUS.md` for capabilities, evidence, and limitations; `ROADMAP.md` for task priorities/state; the relevant product/architecture/engineering document for approved decisions. Link to the document that owns each fact instead of copying long explanations. Keep these existing files in place.
- In status and roadmap updates, separate the verified `main` baseline from work proposed by the current PR. Record checks actually run, results, and unrun checks. After an approved merge, verify the merged commit and CI before reconciling summaries and Issue #4; a closed issue alone does not prove delivery.
- Use the lightweight issue and PR templates. Keep issue scope, acceptance criteria, progress, and PR links current when authorized to update GitHub; report any update you could not perform. Issue #4 is the owner's open overview, not a task to close.
- Report to the non-programmer owner in plain English: what changed, where to preview it, what tests actually ran, known gaps, and the recommended next small task with rationale.
- Never quietly rewrite approved product vision or introduce architectural dependencies solely because a library is fashionable. Record substantive departures as explicit proposals for owner review.
- Task 002 uses repository documents, Issues, branches, PRs, and the existing checks. Do not add a Projects board, autonomous agents, background automation, or dependencies under this task. Future proposals need their own approved scope.
