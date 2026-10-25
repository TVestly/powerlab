# PowerLab — Project Status

**Updated:** 2026-10-25
**Verified main baseline:** [`3a4374b`](https://github.com/TVestly/powerlab/commit/3a4374b32dad5eec395a1fb35868f3fd064d48a2) (merge of PR #13). GitHub confirms the merge, successful CI, and a successful Cloudflare deployment of this exact commit. Deployment success and hosted browser acceptance are separate evidence.

## Current phase

**Foundation, project workflow, and Task 003's hosting documentation and regression tests are integrated on main.** Cloudflare production and PR deployments are configured. Task 003's remaining acceptance evidence is tracked in [Issue #6](https://github.com/TVestly/powerlab/issues/6); a merged PR does not substitute for the required hosted browser checks. Later tasks have not started. See [ROADMAP.md](ROADMAP.md) and [PROJECT_WORKFLOW.md](PROJECT_WORKFLOW.md).

## Integrated work

- [PR #1 — Build PowerLab modular application foundation](https://github.com/TVestly/powerlab/pull/1) merged on 2026-10-23.
- [PR #2 — Document PowerLab vision and verified project status](https://github.com/TVestly/powerlab/pull/2) merged on 2026-10-23. The context/status files and agent handoff instructions are now in the repository; this did not complete Task 002.
- [PR #3 — Fix failing checks, update test dependencies, and reconcile project status](https://github.com/TVestly/powerlab/pull/3) merged on 2026-10-23. Maintenance details and recorded validation follow below.
- [PR #11 — Organize project context and AI development workflow](https://github.com/TVestly/powerlab/pull/11) merged on 2026-10-24, delivering Task 002 (Issue #5). It adds the roadmap, context recovery guide, reusable prompts, agent handoff rules, and lightweight issue/PR templates.
- [PR #12 — Reconcile Task 002 status](https://github.com/TVestly/powerlab/pull/12) merged on 2026-10-24. That merge commit's [Checks run](https://github.com/TVestly/powerlab/actions/runs/40079311403) passed installation, formatting, type checking, tests, build, and audit.
- [PR #13 — Cloudflare Pages setup and preview verification](https://github.com/TVestly/powerlab/pull/13) merged on 2026-10-25 at `3a4374b32dad5eec395a1fb35868f3fd064d48a2`. It adds hosting/review documentation and six hash-route regression tests without changing runtime application behavior, dependencies, or CI. The owner configured the Cloudflare Git integration; repository files alone did not create the hosting account connection.
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

## Task 003 — merged implementation and deployment evidence

[Issue #6](https://github.com/TVestly/powerlab/issues/6) approved free Cloudflare Pages with GitHub integration on 2026-10-24. PR #13 integrated the [setup and review guide](README.md#one-time-cloudflare-pages-setup-owner), production-versus-preview explanations, local fallback steps, and hash-router regression tests. No engineering calculations or numerical models were added.

The existing build already produces `dist/`, selects Node 24 via `.node-version`, and uses root assets with hash routes. No hosting code adjustment is justified by the local checks. Creating a Cloudflare Pages Git-connected project is an account action, not something a repository configuration file can authorize.

### Deployment evidence — 2026-10-25

| Target                          | URL / source commit                                                                                                    | Verification                                                                                                                                                                                                                                 |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Production from accepted `main` | [powerlab-auj.pages.dev](https://powerlab-auj.pages.dev); `3a4374b32dad5eec395a1fb35868f3fd064d48a2`                   | Cloudflare's [post-merge check](https://github.com/TVestly/powerlab/runs/121113601218) confirms successful deployment of the merged SHA; deployment-specific URL: [4cb3c358.powerlab-auj.pages.dev](https://4cb3c358.powerlab-auj.pages.dev) |
| Historical PR #13 preview       | [6deda2a4.powerlab-auj.pages.dev](https://6deda2a4.powerlab-auj.pages.dev); `abbf78ba49fad8ca6474a14aec7ab92a4e86cdf9` | [Cloudflare check](https://github.com/TVestly/powerlab/runs/121111169963) confirms the pre-merge deployment; this is not the current production commit                                                                                       |
| Local production build          | `http://127.0.0.1:4173/#/`, when started locally                                                                       | Local evidence only; not a public preview                                                                                                                                                                                                    |

The owner completed setup and reported initial production success on 2026-10-25, then merged PR #13 at **09:00 Europe/Oslo**. The post-merge review confirmed GitHub's `merged` state and merge SHA against current main, then checked CI and Cloudflare independently. Cloudflare's generic “Preview URL” field on a main check is a deployment-specific main address, not a PR preview. The existing Pages project is `powerlab`; no duplicate project is needed.

The [Checks run for merged main](https://github.com/TVestly/powerlab/actions/runs/40174958118) passed. Inspected job/step results confirm `npm ci`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run audit` all succeeded. These results belong to `3a4374b`, independently of PR #13's pre-merge checks.

Independent hosted browser checks could not run: the environment's outbound proxy rejected the production URL with HTTP 403, and the web retrieval tool could not open it. This is an access limitation of the test environment, not evidence that the public site failed. The owner's confirmation and Cloudflare's successful check establish the recorded hosting state; no agent-run hosted desktop/mobile, signed-out access, or theme test is claimed. Dashboard settings have not been independently inspected. No credentials were requested or committed.

### Pre-merge local verification — 2026-10-24

Local validation on Node.js 24.19.0 with the lockfile's Vitest 4.1.12:

- `npm ci --cache /workspace/work/npm-cache`: passed; the preinstalled dependencies were stale, so final evidence uses this clean installation.
- `npm test`: passed, **12 tests in 3 files**, including six new hash-route cases. An initial concurrent run timed out in the history test and affected the following test; the isolated file rerun and subsequent full-suite run passed without changing assertions or timeouts.
- `npm run typecheck`, `npm run build`, `npm run format:check`, and `git diff --check`: passed.
- `npm run audit -- --cache /workspace/work/npm-cache`: passed, **0 vulnerabilities**. No manifest or lockfile changes.
- Checked **47 relative documentation links/anchors** and reviewed task mappings and proposed-versus-merged claims.
- Served `dist/` with `npm run preview -- --host 127.0.0.1 --port 4173 --strictPort`. Automated Chromium checks passed at **1440×1000** and **390×844**: dashboard, directory, four topic previews, copied links in new tabs, refresh, Back/Forward, return navigation, both themes persisting after reload, keyboard activation, and no horizontal overflow. All 33 observed responses per viewport were successful, including JS/CSS, with no page errors or failed requests. Inspected desktop dark and mobile light/dashboard/topic screenshots. The sandbox initially blocked the server/browser; the permitted rerun succeeded. This uses the environment's browser tooling, not a new project dependency or hosted test.

These local results apply to the initial implementation, not a Cloudflare-hosted browser run. PR #13 is merged and the merged commit's automated checks/deployment passed. At this review, signed-out hosted navigation, direct links/refresh/history, theme persistence, and desktop/mobile acceptance have no recorded post-merge results. Keep [Issue #6](https://github.com/TVestly/powerlab/issues/6) open until that evidence is recorded; the merge establishes owner approval to integrate, not proof that every browser check was performed.

## Still missing

- Numerical engineering solvers, conductor designer, phasor activity, and interactive circuit simulations.
- Project save/load functionality beyond theme preference.
- Recorded hosted browser acceptance and post-merge production smoke-test results for Task 003.

## Next owner action

Record the post-merge [production](https://powerlab-auj.pages.dev) browser results in Issue #6 using [README's test plan](README.md#test-the-actual-app-before-merging). The next roadmap task is [Task 004 — interface review (#7)](https://github.com/TVestly/powerlab/issues/7), which remains planned and needs a separate request. Hosting is available; the outstanding blocker to Task 003 completion is verification evidence, not another deployment setup step.

## Decision rules

- Trust merged code, CI evidence, and visual previews over planned features when reporting current functionality.
- Use `PROJECT_CONTEXT.md`, `PRODUCT.md`, and the specific architecture/engineering documents for lasting product intent.
- Work on feature branches with reviewable pull requests; the owner decides when to merge.
- Keep status claims tied to checks that actually ran. Consult current GitHub results before saying the latest `main` passes.
- This file is a short digest, **not** the full task backlog.
