# PowerLab roadmap

**Reviewed:** 2026-10-24 against `main` at `385c4e7`, merged PRs #1–#3, and Issues #4–#10. This branch proposes Task 002; it is not yet merged. Check live GitHub state before acting on this snapshot.

The product direction remains in [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md). [PROJECT_STATUS.md](PROJECT_STATUS.md) owns capability and validation details; issues own task scope and acceptance criteria. This roadmap orders the work without promising dates or authorizing the next task.

## Completed on main

| Work                                                                                  | Evidence                                                                       |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Task 001: application foundation, navigation, four topic previews, themes, and checks | [PR #1](https://github.com/TVestly/powerlab/pull/1)                            |
| Preserve product vision and verified status; initial agent handoff guidance           | [PR #2](https://github.com/TVestly/powerlab/pull/2); did not complete Task 002 |
| Restore checks, refresh test dependencies, and reconcile status                       | [PR #3](https://github.com/TVestly/powerlab/pull/3)                            |

## Ongoing and planned work, in priority order

| Priority | Task / issue                                                                                    | State in this snapshot                                                       | Outcome and prerequisite                                                                                                                                                            |
| -------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | Task 002 — [Project context and AI workflow (#5)](https://github.com/TVestly/powerlab/issues/5) | In review: [PR #11](https://github.com/TVestly/powerlab/pull/11); not merged | Reading guide, roadmap, manual workflow, templates, and accurate owner overview. Requires owner review and merge before it is delivered on `main`.                                  |
| 2        | Task 003 — [Browser preview (#6)](https://github.com/TVestly/powerlab/issues/6)                 | Next recommended task; not started                                           | After Task 002 is accepted, provide a verified link to the accepted app. Evaluate GitHub Pages first; hosting details remain to be decided within this task.                        |
| 3        | Task 004 — [Interface review (#7)](https://github.com/TVestly/powerlab/issues/7)                | Planned                                                                      | Use Task 003's preview to gather owner feedback and record essential fixes separately from preferences. Review does not authorize a redesign.                                       |
| 4        | Task 005 — [First phasor activity (#8)](https://github.com/TVestly/powerlab/issues/8)           | Planned; proposed scope                                                      | After preview and interface review, confirm a small activity linking one AC voltage phasor to a waveform, with validated inputs and independent numerical tests.                    |
| 5        | Task 006 — [Conductor geometry (#9)](https://github.com/TVestly/powerlab/issues/9)              | Planned; first delivery needs definition                                     | After the phasor activity is reviewed, agree a small three-conductor activity with distances, units, and justified derived quantities.                                              |
| 6        | Task 007 — [Small machines activity (#10)](https://github.com/TVestly/powerlab/issues/10)       | Planned; activity not selected                                               | After the first geometry activity, subject to owner reprioritization, prove extensibility with one useful activity. Synchronous speed is a candidate, not an approved final design. |

The single next step now is to review and accept Task 002. Task 003 is the recommendation afterward and needs a separate implementation request. Issues #6–#10 are planning records, not evidence of delivered features. [Issue #4](https://github.com/TVestly/powerlab/issues/4) stays open as the owner's overview.

## Later direction

Transformers, transmission/network analysis, broader machines topics, the engineering toolbox, project save/load, cross-module data, and Learn/Explore/Practice modes remain future directions described in `PROJECT_CONTEXT.md`. Split them into small approved issues when needed; no new task numbers, dates, dependencies, or complete specifications are assigned here.

Accounts, mandatory cloud services, AI tutoring, and desktop packaging remain outside the initial scope. A Projects board or autonomous/background workflow is not part of Task 002. Update priorities and state using [PROJECT_WORKFLOW.md](PROJECT_WORKFLOW.md), retaining evidence for completed work.
