# PowerLab

An extensible electrical engineering learning workspace for university students. PowerLab is independent of any university course. This foundation release includes a dashboard, module directory, four topic previews, responsive navigation, and persistent light/dark themes. Calculators and simulations are not implemented yet.

## Start a new conversation or task

Point ChatGPT or Codex to `TVestly/powerlab` and ask it to follow [AGENTS.md](AGENTS.md). [PROJECT_WORKFLOW.md](PROJECT_WORKFLOW.md) provides the reading guide, task process, and copyable prompts. [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) preserves approved product direction; [PROJECT_STATUS.md](PROJECT_STATUS.md) records verified progress; [ROADMAP.md](ROADMAP.md) links the prioritized tasks.

The owner's [overview in Issue #4](https://github.com/TVestly/powerlab/issues/4) is a quick entry point. Check current `main`, issues, and PRs before choosing work. A roadmap entry does not start implementation; the owner selects the task and approves its scope.

## Open the application

**Hosting status (2026-10-24): setup is blocked on the owner's Cloudflare account connection.** [Task 003 / Issue #6](https://github.com/TVestly/powerlab/issues/6) approves free Cloudflare Pages hosting with Git-connected PR previews. This branch proposes the instructions and hosting regression tests; it does not establish a live website. No production or PR-preview URL has been verified. [PROJECT_STATUS.md](PROJECT_STATUS.md) records the evidence and outstanding work.

Once configured, two kinds of link will be available:

| Website    | What you are testing                                   | Verified link                                                              |
| ---------- | ------------------------------------------------------ | -------------------------------------------------------------------------- |
| Production | Latest successfully deployed, accepted `main` commit   | Pending owner setup and verification                                       |
| PR preview | Proposed changes from that PR's branch, before merging | Pending owner setup and verification; find it in the PR's Cloudflare check |

Visitors will only need a browser. The owner needs Cloudflare and GitHub accounts for the one-time setup below. A production link cannot demonstrate unmerged changes.

### One-time Cloudflare Pages setup (owner)

1. Sign in to the [Cloudflare dashboard](https://dash.cloudflare.com/). Use the free plan and go to **Workers & Pages → Create application → Pages → Connect to Git** (also called **Import an existing Git repository**). Choose the Pages Git integration, not Direct Upload or a Workers application.
2. Select GitHub and authorize the **Cloudflare Workers & Pages** GitHub app for **only `TVestly/powerlab`**. This allows Cloudflare to read the source, receive updates, and publish deployment checks/preview links. Review the permission screen in GitHub; repository/account authorization must be performed by the owner. Never paste passwords or tokens into chat or commit them to this repository.
3. Select `TVestly/powerlab` and enter the settings below. Choose an available project name such as `powerlab`; Cloudflare supplies the actual `pages.dev` address. Do not assume an example name is available.

| Setting                                       | Value                                                                              |
| --------------------------------------------- | ---------------------------------------------------------------------------------- |
| Production branch                             | `main`                                                                             |
| Framework preset                              | None; enter the explicit build settings below                                      |
| Root directory                                | Leave blank (repository root)                                                      |
| Build command                                 | `npm run build`                                                                    |
| Build output directory                        | `dist`                                                                             |
| Node.js version                               | `24`, already specified in `.node-version`; remove conflicting dashboard overrides |
| Application secrets, bindings, deploy command | None required for this static Pages app                                            |

4. Select **Save and Deploy**. Inspect the build log for Node 24 and a successful build. In the project's **Settings → Builds / Builds & deployments → Branch control**, keep automatic production deployments enabled for `main`, and choose **All non-Production branches** for previews. Use these same build settings for Production and Preview. Leave preview access public so the owner can test without signing in.
5. Open the successful production deployment's link in a signed-out/private browser window. Copy the actual URL and its Git commit from the deployment details into the Task 003 PR and status record after checking them. Initial production publishes existing accepted `main`; it does not publish this branch.
6. Open the Task 003 PR linked from [Issue #6](https://github.com/TVestly/powerlab/issues/6). Find its Cloudflare deployment check and open **Details / View deployment**. If the integration was connected after this branch was pushed and no preview exists, verify branch controls first; retry a listed preview deployment, or ask the implementer to push the next Task 003 update to the same branch. Do not merge just to obtain a preview.

Cloudflare account setup is not possible with the current session's available connections. If a project already exists, use its settings instead of creating a duplicate and share only its public URL. If Pages Git integration cannot be enabled, report the blocker in Issue #6; changing host or buying a plan needs a separate owner decision.

Official references: [Git setup](https://developers.cloudflare.com/pages/get-started/git-integration/), [GitHub permissions and PR checks](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/), [React build settings](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/), [Node version selection](https://developers.cloudflare.com/pages/configuration/build-image/), and [branch deployment controls](https://developers.cloudflare.com/pages/configuration/branch-build-controls/).

### Find a preview and check its commit

Open the PR's Cloudflare check, then the successful **Preview** deployment for that PR branch. Compare the deployment's Git commit with the latest commit on the PR's **Commits** tab. Record the full SHA (Git's commit identifier), deployment URL, environment, and test date in the PR. Cloudflare also lists deployments under **Workers & Pages → your project → Deployments**.

Prefer the deployment-specific URL for review evidence. A branch alias moves as new commits deploy, and the random prefix in a deployment URL is not the Git SHA. Check deployment details to identify the source. Production has its own project address and must report branch `main` and the accepted commit. If a newer build fails, the previous successful deployment may still be served. A green GitHub Actions check does not prove Cloudflare deployed, and a successful Cloudflare build does not prove all GitHub checks passed.

Automatic PR previews apply to branches within `TVestly/powerlab`; Cloudflare does not provide them for fork PRs. Theme preference belongs to each browser origin: a preview and production can have different saved themes. Preview URLs are public and may remain accessible after merge. The [preview documentation](https://developers.cloudflare.com/pages/configuration/preview-deployments/) explains these addresses; the [free-plan limits](https://developers.cloudflare.com/pages/platform/limits/) include 500 builds per month and one concurrent build. Wait for a queued build or report quota problems instead of upgrading the plan silently.

### Test the actual app before merging

1. Open the verified **PR preview**, confirming its branch/commit as above. Visit the dashboard, then **Browse modules**, and open all four topics. Every topic must say **Coming soon** and explain that calculations, visualizations, and exercises are not implemented.
2. Copy a topic URL into a new tab, refresh, use browser Back and Forward after navigating, and return to Dashboard. Keep the `#` in copied links. Supported routes are:

| Page                | Suffix after the site's address  |
| ------------------- | -------------------------------- |
| Dashboard           | `/#/`                            |
| Module directory    | `/#/modules`                     |
| Three-Phase Systems | `/#/modules/three-phase-systems` |
| Transformers        | `/#/modules/transformers`        |
| Transmission Lines  | `/#/modules/transmission-lines`  |
| Electric Machines   | `/#/modules/electric-machines`   |

3. Switch to dark, refresh, and confirm dark persists. Repeat for light. Check a desktop window and a narrow/mobile window: readable text, usable navigation, no blank page, missing styling, horizontal overflow, or unexpected 404s. Use Tab and Enter to check navigation and the theme button.
4. Review both the GitHub **Checks** results and the Cloudflare deployment. Report problems in the PR before explicitly approving a merge. Task 003 stays open until the accepted production deployment is verified after merge.

After an owner-approved merge, repeat this test on the production URL and compare its deployed commit with the resulting `main` commit. Record that separate evidence in `PROJECT_STATUS.md`, Issue #6, and the open overview in Issue #4. Do not reuse pre-merge preview evidence as production verification.

### Local fallback for this PR

This requires Git, Node.js 24 LTS, and a terminal; it is a fallback for a developer while Cloudflare setup is blocked, **not** satisfaction of the no-install browser acceptance criterion. In a new folder, run:

```sh
git clone --branch chore/task-003-cloudflare-pages --single-branch https://github.com/TVestly/powerlab.git powerlab-task-003
cd powerlab-task-003
npm ci
npm run build
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
```

Open `http://127.0.0.1:4173/#/` and follow the same app test above. `git rev-parse HEAD` prints the tested commit; compare it with the PR. Keep the terminal running, then stop with Ctrl+C. This serves the production build locally, not a Cloudflare deployment.

### Local development

1. Install **Node.js 24 LTS**, which includes npm.
2. Open a terminal in the `powerlab` folder (the folder containing this file).
3. Run `npm ci` once to install the required tools.
4. Run `npm run dev` and leave that terminal open.
5. Open the local address printed by Vite in your browser (normally port 5173).
6. Stop the application with Ctrl+C when finished.

No account, API key, database, or backend is required. To reopen the application later, repeat step 4. In a remote development environment, use your editor's port forwarding for port 5173.

## Development commands

- `npm test`: automated navigation, module discovery, theme, and static-hosting hash-link tests (simulated browser; not a deployment check).
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
