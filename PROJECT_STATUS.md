# PowerLab — Project Status

**Updated:** 2026-10-25
**Verified main baseline:** [`44d9bdf`](https://github.com/TVestly/powerlab/commit/44d9bdf8c588e12c35b9af0b84521475af8729c6) (merge of PR #12). GitHub PR states and check results remain authoritative for integration and CI status. Cloudflare has successfully deployed this accepted main commit. Task 003 documentation and regression tests remain proposed in unmerged [PR #13](https://github.com/TVestly/powerlab/pull/13) on `chore/task-003-cloudflare-pages`.

## Current phase

**Foundation, durable project context, and the Task 002 development workflow are established on main.** PRs #11 and #12 are merged. Task 003 now has a production deployment; account setup is complete. PR-preview verification, owner review, and separate post-merge production verification remain outstanding. Later tasks have not started. See [ROADMAP.md](ROADMAP.md) for priorities and [PROJECT_WORKFLOW.md](PROJECT_WORKFLOW.md) for the accepted task process.

## Integrated work

- [PR #1 — Build PowerLab modular application foundation](https://github.com/TVestly/powerlab/pull/1) merged on 2026-10-23.
- [PR #2 — Document PowerLab vision and verified project status](https://github.com/TVestly/powerlab/pull/2) merged on 2026-10-23. The context/status files and agent handoff instructions are now in the repository; this did not complete Task 002.
- [PR #3 — Fix failing checks, update test dependencies, and reconcile project status](https://github.com/TVestly/powerlab/pull/3) merged on 2026-10-23. Maintenance details and recorded validation follow below.
- [PR #11 — Organize project context and AI development workflow](https://github.com/TVestly/powerlab/pull/11) merged on 2026-10-24, delivering Task 002 (Issue #5). It adds the roadmap, context recovery guide, reusable prompts, agent handoff rules, and lightweight issue/PR templates.
- [PR #12 — Reconcile Task 002 status](https://github.com/TVestly/powerlab/pull/12) merged on 2026-10-24. Current main's [Checks run](https://github.com/TVestly/powerlab/actions/runs/40079311403) passed installation, formatting, type checking, tests, build, and audit; job/step results were inspected separately from local branch validation.
- The application contains the React/TypeScript/Vite foundation, dashboard/navigation, a theme toggle, and four **preview** modules: Three-Phase Systems, Transformers, Transmission Lines, Electric Machines.
- Product, architecture, module, and engineering standards are documented. Automated UI/storage tests and a GitHub Actions checks workflow are present.

## Maintenance and verification — 2026-10-23

- Corrected formatting in the context/status documentation that caused the post-PR #2 checks to fail. Removed obsolete instructions to merge the already-merged documentation PR.
- Updated Vitest from 3.2.7 to 4.1.12 and regenerated the npm lockfile. The three audit findings were in development/test tooling; the update removes the vulnerable Tinypool dependency and updates the mocker package. Application source and production dependency versions are unchanged.
- Added `npm run audit` to GitHub checks, failing on known moderate-or-higher vulnerabilities in all dependencies, including development tools.
- Updated checkout/setup-node actions to their Node.js 24-based v5 releases and explicitly limited workflow permissions to reading repository contents.
- Local verification on Node.js 24: clean `npm ci --no-audit` installation; **6 tests passed in 2 files**; type checking and production build passed. The separate `npm run audit` reported **0 vulnerabilities**.
- `npm run format:check` passed. See [GitHub Actions](https://github.com/TVestly/powerlab/actions/workflows/checks.yml) for the check results attached to each branch, PR, and merged commit.
- The UI tests use a simulated browser environment. A manual visual/browser acceptance review and public deployment have **not** been performed in this maintenance pass. An audit result reflects known advisories at the time it runs, not a permanent security guarantee.

## Task 002 — delivered and verified on 2026-10-24

[PR #11](https://github.com/TVestly/powerlab/pull/11) delivered [Issue #5](https://github.com/TVestly/powerlab/issues/5) at commit `665deaca449b673009823e99f8f60a1d09f094cb`. The merged diff contains only documentation and issue/PR templates; product vision, application behavior, dependencies, and existing CI are preserved. The workflow uses manual Issues/PR/document updates; background status automation remains outside its scope.

The [Checks run on the merged main commit](https://github.com/TVestly/powerlab/actions/runs/40077388580) completed successfully. GitHub's job/step results confirm `npm ci`, formatting, type checking, tests, production build, and audit all passed. This verifies the merged commit separately from PR #11's pre-merge checks.

PR #11's recorded local validation on Node.js 24 passed **6 tests in 2 files**, type checking, build, formatting, and an audit with **0 vulnerabilities**. The post-merge review verified the required reading path, reusable prompts, task/issue mappings, and templates. [Issue #4](https://github.com/TVestly/powerlab/issues/4) is the open owner overview with accepted document links on `main` and any pending status-reconciliation PR. No manual browser acceptance review or deployment is claimed.

## Available to the student

- Navigate the dashboard and module directory; visit placeholder topic pages.
- Toggle between light/dark themes with browser preference persistence.
- Read clear notices that actual engineering calculators, simulations, and exercises are not yet implemented.
- Open the [production application](https://powerlab-auj.pages.dev), confirmed by the owner on 2026-10-25, or run it locally using [README.md](README.md).

## Task 003 — production connected; PR work remains proposed

[Issue #6](https://github.com/TVestly/powerlab/issues/6) approved free Cloudflare Pages with GitHub integration on 2026-10-24. This supersedes the old roadmap suggestion to evaluate GitHub Pages. The branch adds a beginner-friendly [setup and review guide](README.md#one-time-cloudflare-pages-setup-owner), production-versus-preview explanations, exact local fallback steps, and regression tests using the app's hash router. Application behavior, build configuration, dependencies, lockfile, and GitHub Actions workflow are preserved. No engineering calculations or numerical models are added.

The existing build already produces `dist/`, selects Node 24 via `.node-version`, and uses root assets with hash routes. No hosting code adjustment is justified by the local checks. Creating a Cloudflare Pages Git-connected project is an account action, not something a repository configuration file can authorize.

### Deployment evidence — 2026-10-25

| Target                                       | URL / source commit                                                                                                                     | Verification                                                                                                                                                                                          |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Production from accepted `main`              | [powerlab-auj.pages.dev](https://powerlab-auj.pages.dev); `44d9bdf8c588e12c35b9af0b84521475af8729c6`                                    | Owner confirmed the production URL and completed Git connection; Cloudflare's [check](https://github.com/TVestly/powerlab/runs/121107807625) independently confirms successful deployment of this SHA |
| Preview of `chore/task-003-cloudflare-pages` | Deployment-specific URL and SHA will be reported in [PR #13](https://github.com/TVestly/powerlab/pull/13) when Cloudflare provides them | This documentation push requests a preview from the existing Git integration; do not substitute the production URL                                                                                    |
| Local production build                       | `http://127.0.0.1:4173/#/`, when started locally                                                                                        | Local evidence only; not a public preview                                                                                                                                                             |

The owner completed the previously blocked account setup and reported production success on 2026-10-25. Cloudflare's GitHub check completed successfully at **08:31 Europe/Oslo** for accepted main `44d9bdf`, with deployment-specific address [e2c1a06d.powerlab-auj.pages.dev](https://e2c1a06d.powerlab-auj.pages.dev). That address belongs to the main deployment; although the check labels its link “Preview URL,” it is not PR #13's preview. The existing Pages project is `powerlab`; no duplicate project or alternative hosting service is needed.

Independent hosted browser checks could not run: the environment's outbound proxy rejected the production URL with HTTP 403, and the web retrieval tool could not open it. This is an access limitation of the test environment, not evidence that the public site failed. The owner's confirmation and Cloudflare's successful check establish the recorded hosting state; no agent-run hosted desktop/mobile, signed-out access, or theme test is claimed. Dashboard settings have not been independently inspected. No credentials were requested or committed.

### Branch verification — 2026-10-24

Local validation on Node.js 24.19.0 with the lockfile's Vitest 4.1.12:

- `npm ci --cache /workspace/work/npm-cache`: passed; the preinstalled dependencies were stale, so final evidence uses this clean installation.
- `npm test`: passed, **12 tests in 3 files**, including six new hash-route cases. An initial concurrent run timed out in the history test and affected the following test; the isolated file rerun and subsequent full-suite run passed without changing assertions or timeouts.
- `npm run typecheck`, `npm run build`, `npm run format:check`, and `git diff --check`: passed.
- `npm run audit -- --cache /workspace/work/npm-cache`: passed, **0 vulnerabilities**. No manifest or lockfile changes.
- Checked **47 relative documentation links/anchors** and reviewed task mappings and proposed-versus-merged claims.
- Served `dist/` with `npm run preview -- --host 127.0.0.1 --port 4173 --strictPort`. Automated Chromium checks passed at **1440×1000** and **390×844**: dashboard, directory, four topic previews, copied links in new tabs, refresh, Back/Forward, return navigation, both themes persisting after reload, keyboard activation, and no horizontal overflow. All 33 observed responses per viewport were successful, including JS/CSS, with no page errors or failed requests. Inspected desktop dark and mobile light/dashboard/topic screenshots. The sandbox initially blocked the server/browser; the permitted rerun succeeded. This uses the environment's browser tooling, not a new project dependency or hosted test.

These local results apply to the initial PR implementation, not a Cloudflare-hosted browser run. The 2026-10-25 follow-up changes documentation only, records the production evidence above, and pushes the existing branch to request a preview. Its local formatting check, 47 relative documentation links/anchors, and `git diff --check` passed; application tests/type checking/build/audit are left to the existing CI for this documentation-only follow-up. See [PR #13](https://github.com/TVestly/powerlab/pull/13) for the resulting preview URL/commit and checks on the pushed documentation commit. Hosted acceptance testing and owner preview review remain outstanding. Post-merge production verification cannot be performed before an approved merge. Task 003 is not complete.

## Still missing

- Numerical engineering solvers, conductor designer, phasor activity, and interactive circuit simulations.
- Project save/load functionality beyond theme preference.
- Hosted PR-preview acceptance testing, owner merge approval, and post-merge production verification for Task 003.

## Next owner action

Open [PR #13](https://github.com/TVestly/powerlab/pull/13), follow its Cloudflare preview link once available, confirm the deployed commit, and use [README's browser test plan](README.md#test-the-actual-app-before-merging). Setup does not need to be repeated. Keep Issue #6 open: after an owner-approved merge, independently verify production against the accepted `main` commit and reconcile these records and Issue #4. The separate interface review (#7) remains planned; it has not started.

## Decision rules

- Trust merged code, CI evidence, and visual previews over planned features when reporting current functionality.
- Use `PROJECT_CONTEXT.md`, `PRODUCT.md`, and the specific architecture/engineering documents for lasting product intent.
- Work on feature branches with reviewable pull requests; the owner decides when to merge.
- Keep status claims tied to checks that actually ran. Consult current GitHub results before saying the latest `main` passes.
- This file is a short digest, **not** the full task backlog.
