# PowerLab project workflow

The owner chooses goals and approves results. ChatGPT helps plan tasks and review evidence; Codex implements an approved task on a branch, runs checks, and opens a pull request (PR). GitHub keeps the durable record in issues, commits, PRs, and repository documents. Creating an issue or starting a conversation does not start implementation automatically.

This is a manual workflow using the existing GitHub checks. It adds no Projects board, autonomous agents, background automation, or dependencies. Claude Code remains an optional independent reviewer for substantial architecture or numerical work, as recorded in `PROJECT_CONTEXT.md`.

## Recover context in a new conversation

1. Give the agent `TVestly/powerlab` and the task issue or PR link. Ask it to follow [AGENTS.md](AGENTS.md), including the required reading below.
2. Have it inspect current `main`, the selected issue and comments, relevant merged/open PRs, and check results. It should identify the baseline commit, what is implemented, what is proposed, and the next authorized action.
3. If a summary conflicts with merged code or verified checks, record the discrepancy and correct the summary with evidence. Approved product decisions still govern intended behavior; do not silently change them to match a bug.
4. If repository or GitHub access is unavailable, state what could not be verified and request the specific missing material. Never reconstruct facts from an old chat or claim unseen checks passed.

Read the files in this order; each has a distinct job:

| Document                                             | What it owns                                                           |
| ---------------------------------------------------- | ---------------------------------------------------------------------- |
| [AGENTS.md](AGENTS.md)                               | Agent rules, required reading, and handoff responsibilities            |
| [README.md](README.md)                               | Entry point, local setup, and development commands                     |
| [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md)             | Durable product vision, decisions, boundaries, and long-term direction |
| [PROJECT_STATUS.md](PROJECT_STATUS.md)               | Verified implementation snapshot, evidence, and known gaps             |
| [ROADMAP.md](ROADMAP.md)                             | Prioritized task overview with links and delivery state                |
| [PROJECT_WORKFLOW.md](PROJECT_WORKFLOW.md)           | This process and reusable prompts                                      |
| [PRODUCT.md](PRODUCT.md)                             | Short product purpose and success criteria                             |
| [ARCHITECTURE.md](ARCHITECTURE.md)                   | Current technical structure, responsibilities, and decisions           |
| [MODULE_STANDARD.md](MODULE_STANDARD.md)             | How to add a module consistently                                       |
| [ENGINEERING_STANDARDS.md](ENGINEERING_STANDARDS.md) | Model assumptions, units, numerical validation, and limitations        |

## From an idea to accepted work

1. **Plan:** ChatGPT reads the current context and recommends one small outcome with rationale, scope, exclusions, acceptance criteria, and verification. Record substantive decisions in the relevant document or issue; brainstorming stays a proposal.
2. **Authorize:** The owner selects the task and scope. Use an existing issue where possible; otherwise use the [task template](.github/ISSUE_TEMPLATE/task.md). A task number is a human label, distinct from its GitHub issue number: Task 002 is Issue #5. No mandatory labels, board, or milestones are needed.
3. **Implement:** Codex checks current `main` and local changes, creates a dedicated branch such as `docs/task-002-project-workflow`, and works only within the approved scope. Keep the issue's current status and branch/PR link accurate when GitHub updates are authorized. Explain blockers and continue independent useful work.
4. **Verify and document:** Run the applicable repository checks from `README.md` and `AGENTS.md`; CI runs formatting, type checking, tests, build, and audit. Report exact commands and results, including failed, skipped, or unrun checks. For documentation, also verify links, task mappings, and status claims. For numerical or UI work, add the relevant independent examples or browser checks. Passing tests do not substitute for owner feedback.
5. **Review:** Open a PR against `main` using the [PR template](.github/pull_request_template.md). Link the issue, summarize the outcome in plain English, and explain how to inspect it. Mark branch changes as proposed until merged. ChatGPT or an optional reviewer checks the diff, acceptance criteria, evidence, and scope; Codex addresses findings and reruns affected checks.
6. **Accept and merge:** The owner reviews the result and decides whether to merge. An agent must not merge without explicit approval. Use `Closes #N` only when the PR delivers the entire issue; otherwise use `Refs #N` and name remaining work. An abandoned or merely closed PR is not delivered work.
7. **Reconcile:** After the approved merge, the owner or an explicitly requested follow-up asks Codex to verify the merged commit and its checks, then refresh status, roadmap, task issue, and [Issue #4](https://github.com/TVestly/powerlab/issues/4). Put repository corrections through a small PR if needed. Close a task only after its acceptance criteria are satisfied; keep Issue #4 open. Recommend the next task and wait for its implementation request.

Use a short **Current status** paragraph in each task issue: **Planned**, **In progress**, **In review**, **Blocked** (with reason), or **Completed** (with merged PR and verification evidence). An open issue can still be unstarted; a closed issue can be cancelled rather than completed. GitHub state and evidence take precedence over an outdated status paragraph.

## Keep records accurate without duplicating them

- Update affected documents in the same PR as the work. Preserve the existing product vision and filenames; explain substantive proposed changes for owner review. Put detailed task scope in its issue and link to it from the roadmap.
- In `PROJECT_STATUS.md`, identify the checked `main` baseline and keep current-PR work in a separate proposed section. Date validation evidence and distinguish local results, GitHub CI, visual review, and deployment. A successful local run is not a verified deployment or a claim about another commit's CI.
- In `ROADMAP.md`, change priority or delivery state only with a stated decision or evidence. Do not copy the full product vision or acceptance criteria into it.
- Issue #4 is a short owner overview: links to authoritative documents, merged work, the active issue/PR, one recommended next step, and owner actions. Before merge, link new documents on the branch and label them proposed; after merge, use `main` links. Correct its obsolete board-setup statement as part of Task 002.
- At handoff, say what changed, where to inspect it, what checks actually ran, known gaps, and the next owner action. Report separately anything that could not be saved or updated. No status changes happen automatically through this workflow.

## Reusable prompts

Replace placeholders with an issue number or PR link. These prompts request one bounded step; they do not grant permission to merge or start subsequent tasks.

**Plan the next task — ChatGPT**

> Review TVestly/powerlab on current main. Follow AGENTS.md and its reading guide; inspect relevant issues, merged/open PRs, and checks. Summarize what is implemented and what remains proposed. Recommend the single next small task from ROADMAP.md, with scope, exclusions, acceptance criteria, and verification. Preserve approved decisions. State access gaps. Do not implement it yet.

**Implement an approved task — Codex**

> Implement Issue #N in TVestly/powerlab within its approved scope. Follow AGENTS.md and PROJECT_WORKFLOW.md, read the required context, and inspect current main and related issues/PRs. Use a dedicated branch, update affected documentation with accurate proposed-versus-merged status, run applicable checks, and open a PR linked to the issue. Keep the issue and owner overview current. Report evidence and remaining owner actions. Do not merge or start another task.

**Review a PR — ChatGPT or another reviewer**

> Review PR <link> in TVestly/powerlab against its issue, approved product decisions, and PROJECT_WORKFLOW.md. Inspect the actual diff and check results. Identify correctness, scope, documentation, and acceptance gaps with file references. Distinguish verified findings from untested concerns. Explain what the owner should inspect and whether changes are needed. Do not modify or merge the PR.

**Refresh project status — Codex**

> Refresh TVestly/powerlab's status after PR <link>. Follow AGENTS.md; verify whether it merged, the resulting main commit, its checks, and any remaining acceptance criteria. Reconcile PROJECT_STATUS.md and ROADMAP.md in a focused documentation PR where needed; update the task issue and Issue #4 with evidence and working document links. Keep Issue #4 open. Report failed or unverified checks and the single recommended next task. Do not merge or begin that task.
