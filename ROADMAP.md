# PowerLab roadmap

**Reviewed:** 2026-10-24 against `main` at `44d9bdf`, merged PRs #1–#3, #11, and #12, and Task 003's approved Issue #6. Task 002 is delivered and reconciled; current main's [Checks run passed](https://github.com/TVestly/powerlab/actions/runs/40079311403). Task 003 changes on this branch remain proposed. Check live GitHub state before acting on this snapshot.

The product direction remains in [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md). [PROJECT_STATUS.md](PROJECT_STATUS.md) owns capability and validation details; issues own task scope and acceptance criteria. This roadmap orders the work without promising dates or authorizing the next task.

## Completed on main

| Work                                                                                                 | Evidence                                                                                                                       |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Task 001: application foundation, navigation, four topic previews, themes, and checks                | [PR #1](https://github.com/TVestly/powerlab/pull/1)                                                                            |
| Preserve product vision and verified status; initial agent handoff guidance                          | [PR #2](https://github.com/TVestly/powerlab/pull/2); did not complete Task 002                                                 |
| Restore checks, refresh test dependencies, and reconcile status                                      | [PR #3](https://github.com/TVestly/powerlab/pull/3)                                                                            |
| Task 002: project context and AI workflow — [Issue #5](https://github.com/TVestly/powerlab/issues/5) | [PR #11](https://github.com/TVestly/powerlab/pull/11), merged 2026-10-24; validation in [PROJECT_STATUS.md](PROJECT_STATUS.md) |

## Active and planned development, in priority order

| Priority | Task / issue                                                                              | State in this snapshot                      | Outcome and prerequisite                                                                                                                                                                                                    |
| -------- | ----------------------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | Task 003 — [Browser preview (#6)](https://github.com/TVestly/powerlab/issues/6)           | In progress; hosting blocked on owner setup | Approved 2026-10-24: free Cloudflare Pages, accepted `main` production, and Git-connected PR previews. Setup guide and hash-route tests are proposed on this branch; public deployments and owner review remain unverified. |
| 2        | Task 004 — [Interface review (#7)](https://github.com/TVestly/powerlab/issues/7)          | Planned                                     | Use Task 003's preview to gather owner feedback and record essential fixes separately from preferences. Review does not authorize a redesign.                                                                               |
| 3        | Task 005 — [First phasor activity (#8)](https://github.com/TVestly/powerlab/issues/8)     | Planned; proposed scope                     | After preview and interface review, confirm a small activity linking one AC voltage phasor to a waveform, with validated inputs and independent numerical tests.                                                            |
| 4        | Task 006 — [Conductor geometry (#9)](https://github.com/TVestly/powerlab/issues/9)        | Planned; first delivery needs definition    | After the phasor activity is reviewed, agree a small three-conductor activity with distances, units, and justified derived quantities.                                                                                      |
| 5        | Task 007 — [Small machines activity (#10)](https://github.com/TVestly/powerlab/issues/10) | Planned; activity not selected              | After the first geometry activity, subject to owner reprioritization, prove extensibility with one useful activity. Synchronous speed is a candidate, not an approved final design.                                         |

Task 002 is delivered in PR #11 and reconciled by merged PR #12. The owner has requested Task 003 implementation; its approved Cloudflare choice supersedes this roadmap's earlier GitHub Pages suggestion. Complete the owner setup in [README.md](README.md#one-time-cloudflare-pages-setup-owner), obtain and verify a PR preview, and allow owner review before merging. Task 003 stays open until production is separately verified after an approved merge. Later tasks retain their order and have not started. [Issue #4](https://github.com/TVestly/powerlab/issues/4) stays open as the owner's overview.

## Later direction

Transformers, transmission/network analysis, broader machines topics, the engineering toolbox, project save/load, cross-module data, and Learn/Explore/Practice modes remain future directions described in `PROJECT_CONTEXT.md`. Split them into small approved issues when needed; no new task numbers, dates, dependencies, or complete specifications are assigned here.

Accounts, mandatory cloud services, AI tutoring, and desktop packaging remain outside the initial scope. A Projects board or autonomous/background workflow is not part of Task 002. Update priorities and state using [PROJECT_WORKFLOW.md](PROJECT_WORKFLOW.md), retaining evidence for completed work.
