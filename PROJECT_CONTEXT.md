# PowerLab — Product Context and Long-Term Vision

**Status:** Agreed product direction, not a claim that all features exist.
**Last consolidated:** 2026-10-23.
**Audience:** Project owner, ChatGPT planning assistant, Codex, Claude reviewers, and future contributors.

This document preserves significant product and workflow decisions from initial planning. It complements `PRODUCT.md`, `ARCHITECTURE.md`, `MODULE_STANDARD.md`, and `ENGINEERING_STANDARDS.md`. The actual source code and tests determine what is implemented; `PROJECT_STATUS.md` summarizes the verified/current state. Proposed features below are a direction, **not completed functionality**.

For the practical reading guide and task process, see [PROJECT_WORKFLOW.md](PROJECT_WORKFLOW.md); for current priorities and issue links, see [ROADMAP.md](ROADMAP.md). Task 002 adds these navigation links and clarifies workflow scope without changing the product vision below.

## 1. Core identity and non-negotiable principles

**PowerLab is a general, expandable interactive learning platform for electrical engineering students. It is not an ELK220 application, a single-course calculator collection, or a professional certified engineering design tool.**

A particular university course may provide examples, teaching material, or validation exercises, but must never define PowerLab's core architecture or naming. The platform should eventually accommodate three-phase circuits, transformers, electrical machines, transmission lines, power-system networks, electromagnetics, power electronics, control systems, and other topics.

PowerLab should:

- Help students understand _why_ electrical systems behave as they do, by linking equations, physical meaning, and visual behavior.
- Make interactive exploration immediately accessible to a student who did not create the software.
- Deliver accurate, testable, transparent calculations with explicit quantities, assumptions, units, and sign conventions.
- Use a clean, restrained, consistent, high-quality UI in which the learning visualization takes priority.
- Remain modular so independent new topics can be added without rewriting unrelated functionality.
- Reuse mathematical and visualization components across topics; organize topics by courses only as optional discovery/catalog metadata.
- Allow users to save, revisit, and later connect configurations across compatible learning tools.
- Prioritize educational usability and mathematical correctness over adding many shallow features.

Success is not measured by the number of calculators on the dashboard. It is measured by whether a beginner can understand a concept and a developer can safely add another subject.

## 2. Target users and educational approach

Primary users are undergraduate electrical engineering students, including beginners. Secondary users are advanced students exploring relationships and small systems.

Each interactive learning activity should, where appropriate:

1. Open with a meaningful working example, never an unexplained empty canvas.
2. Present a **large central visualization** (circuit, phasor, waveform, conductor geometry, graph, or network).
3. Provide clearly labeled inputs with physical units, ranges, defaults, and explanations.
4. Update calculations and diagrams consistently as inputs change.
5. Show equations, numerical substitution, intermediate results, and interpretation on demand.
6. Make assumptions and approximation limits visible.
7. Allow an example/configuration to be saved, restored, and later shared/exported.

Three **planned interaction modes** should share the same underlying model:

- **Learn:** guided walkthrough, highlights, explanations, and examples.
- **Explore:** unrestricted, validated adjustment of supported physical parameters, with immediate feedback.
- **Practice:** exercises with answers hidden until requested, hints, and inspectable worked solutions.

These modes are a product direction, not necessarily required for the very first functional activity.

## 3. User experience and visual design

Preferred desktop-style workspace:

- Left: consistent topic/module navigation.
- Center: dominant, zoomable interactive visualization.
- Right: compact input parameters and calculated quantities.
- Below/expandable: formulas, guided reasoning, limitations, and worked calculation steps.
- Universally accessible: electrical/math calculator or converter without abandoning the current activity.

Design guidelines:

- Professional, minimalist, spacious, readable, no clutter or unnecessary decoration.
- Responsive browser interface with light and dark appearance; keyboard and screen-reader accessibility.
- Distinguish physical geometry from schematic diagrams and numerical plots; each may use a specialized renderer while sharing design tokens and interaction conventions.
- Use deliberate visualization semantics (arrows, signs, units, meaningful labels), not color alone.
- Enable selection/hover/inspection of diagram elements to expose their properties and relationships.
- Favor sensible presets, progressive disclosure of advanced settings, and clear error explanations.
- Every user-visible feature should have a practical preview/demo method so the non-programmer project owner can inspect it.

## 4. Module model and expandability

**Architectural direction:** web-first modular monolith. Shared platform capabilities are separate from domain models, independent educational activities, and rendering.

The intended application core supplies navigation, module discovery/registration, design system, validation helpers, units/quantities, plotting/diagram infrastructure, explanation patterns, project storage, and cross-module orchestration. Only the foundation described in `ARCHITECTURE.md` and `PROJECT_STATUS.md` is implemented today; this list describes the architectural direction.

A module should define as applicable: stable ID, title/category, default examples, input/output quantity definitions, validated domain calculations, one or more views, learner-facing explanations, assumptions, tests, and optional data connections. No module should have to duplicate navigation or invent its own unit standard.

Do **not** force every topic into one generic power-system circuit/network model. Allow specialized domains, e.g. conductor cross-sections, motor torque curves, waveforms, transformer equivalent circuits, and network topology.

Initially, modules may be registered in application source code. A third-party executable plugin system or plugin marketplace is _not_ a phase-one requirement.

### Cross-module data and projects (planned)

A key differentiator is the ability to move from **conductor geometry → line parameters → transmission model → network analysis**, using well-defined typed data rather than manual copying.

Future study projects should store inputs and relevant configuration metadata using an explicitly versioned format. Connected values should support both:

- **Live links:** updates propagate through compatible models.
- **Snapshots:** retain a fixed value/configuration for comparison and reproducibility.

Distinguish user-entered values, derived values, and external/linked values. Shared calculation contracts must not depend on a module's UI or hidden mutable global state. Version/migration concerns must be considered before saved-project features ship.

## 5. Initial and future learning areas

The following are **planned capability families**, not finished modules. Scope and sequence depend on foundation quality.

### A. Three-phase and phasor visualization

- Polar/rectangular phasors, magnitudes/angles, phase references, dynamic waveforms.
- Balanced three-phase Y/Δ connections, line vs phase quantities, 30-degree shifts, complex power, power factor; unbalanced systems later.
- Linked circuit diagram, waveform, phasor view, and inspectable equations.
- Avoid conflating line-to-line and line-to-neutral reference phasors.

### B. Conductor and transmission-line geometry

- Interactive moveable phase conductors in horizontal, vertical, triangular, and custom arrangements.
- Radius/diameter, physical distances `D_AB`, `D_BC`, `D_CA`; GMD/GMR and phase transposition assumptions.
- Bundled conductor count and spacing; correctly distinguish physical radius, GMR, effective bundle radii for inductance/capacitance.
- Derived R/L/C/G, reactance, susceptance, and line models where assumptions permit.
- Alternative geometry, magnetic field, electric field, and equivalent-model views where technically appropriate.

### C. Transformers

- Ideal/practical transformer relationships, winding ratio and impedance referral, equivalent circuit.
- Open/short-circuit tests; losses, efficiency, voltage regulation, three-phase connections and vector groups.
- Saturation, magnetization and inrush visualization with an explicitly specified transient model.

### D. Transmission and power networks

- Short/medium/long line representations, nominal pi, ABCD quantities, phasors, power transfer, voltage profiles and losses.
- Future editor with buses, generators, loads, transformers, and lines; Y-bus and load-flow methods including instructional iteration views.
- Fault calculations and symmetrical components with valid model/sequence-network assumptions.

### E. Electrical machines and further electrical engineering

- Torque-speed explorer, induction and synchronous machines, rotating field, electrical/mechanical power relationships.
- Later: power electronics, circuits, electromagnetics, control systems and other independent domains.
- Early architectural expansion test: add a small machine-related activity without restructuring existing modules.

### F. Universal engineering toolbox

- Complex arithmetic, polar/rectangular, degrees/radians, SI prefixes, unit conversions.
- Electrical-specific conversions: line/phase, impedance/admittance, Y/Δ, per-unit (explicit power/voltage bases).
- Contextual formula inspection and the ability to copy a useful result into an activity.

## 6. Engineering trust and safety requirements

Treat `ENGINEERING_STANDARDS.md` as the primary home for mathematical conventions. In particular:

- SI internally; label displayed units and magnitude semantics.
- Distinguish phasor vs scalar, RMS vs peak, V_LL vs V_LN, phase vs line current, source vs load sign conventions.
- Specify angle reference, phase sequence, leading/lagging, power flow direction, and per-unit bases when relevant.
- Keep engineering solvers deterministic and separate from UI rendering. An AI model is **not** the arithmetic engine.
- Numerical tests use independently verified examples, analytical limiting cases, conservation checks, appropriate tolerances, and invalid-input tests.
- Warn when a physical system falls outside the educational model's assumptions.
- Clearly mark simplified installation/earthing/fault work as educational, not certified design or safety compliance.

## 7. Confirmed platform and workflow decisions

**Confirmed product choices:**

- Browser-first; possible Windows/macOS desktop package later, without redesigning the frontend.
- No mandatory account/cloud backend for the initial educational application.
- Extensibility and course-independence are core product principles.
- Codex is primary implementation agent; Claude Code is an optional independent reviewer for major work; ChatGPT helps with product planning, task writing and repository review.
- GitHub repository is the canonical record of accepted code and approved product decisions.
- The owner has limited coding experience: tasks and reviews must be expressed in accessible language.

**Current implemented foundation (see status and code for verification):**
React + TypeScript + Vite; styling with Tailwind CSS; Vitest tests; initial typed module registry, dashboard, previews, theme preferences. Additional technology is **not locked in**.

**Potential future technologies, not current dependencies/commitments:** SVG and graph plotting libraries, React Flow for circuit/network editor, IndexedDB/versioned project storage, Playwright for visual checks, Tauri for desktop packaging, Python/NumPy/SciPy or other solver technology only if a demonstrated computational need justifies the complexity.

Avoid introducing an overly abstract plugin framework, server infrastructure, Python dependency, cloud features, or AI tutor prematurely.

## 8. Agreed development sequence (proposed)

1. Establish application foundation, docs, checks. **Task 001 merged 2026-10-23.**
2. Preserve product context and establish a transparent, AI-assisted status/roadmap/task process. **Administrative/documentation work; do not confuse with a feature release.**
3. Provide an easy browser preview/deployment path for the non-programmer owner; refine layout based on hands-on evaluation.
4. Implement a polished, tested phasor learning activity to prove synchronized diagrams, math, validation, and explanation.
5. Implement conductor geometry designer to exercise spatial interactions and physically derived quantities.
6. Add a limited motor/machines activity as a deliberate **expandability test**.
7. Broaden into transformer, transmission, network and other topics in small, independently reviewable increments.

The precise backlog belongs in GitHub Issues and [ROADMAP.md](ROADMAP.md); this list records intended direction only. The roadmap maps this sequence to task numbers, including a separate owner interface review before the first phasor activity.

## 9. Operating model for AI-assisted development

The owner makes product decisions and approves results rather than coding.

For each substantial change:

1. ChatGPT (or a designated Work task) reviews current **main**, recent PRs/issues and canonical docs; proposes the next smallest high-value task and explains it.
2. Codex reads `AGENTS.md` and related specifications, implements on a separate branch, tests, and opens a PR.
3. Codex describes user-visible outcome, tested evidence, limitations, and how a non-programmer can preview/validate it; updates docs when needed.
4. For architecture/numerical changes, an independent reviewer may examine the PR.
5. Owner approves and merges. Do not automatically merge.
6. Reconcile `PROJECT_STATUS.md` and issues with what is **actually merged and verified**, not merely mentioned in chat or a draft PR.

A fresh ChatGPT or Codex conversation is **not guaranteed to have the entire history of previous chats**. It must load the current repository and the canonical documents. The owner should not need to paste long prior conversation transcripts.

**Documentation ownership:** Planning assistant determines which decisions are durable; coding agents update matching files as part of the relevant PR. No agent should claim that files are updated unless changes were actually committed/merged.

**Source-of-truth hierarchy:** merged code/tests and accepted PRs for implementation status; approved specs for product direction; GitHub Issues/roadmap for planned work; `PROJECT_STATUS.md` for a digest. Brainstorming is not automatically a specification.

## 10. Explicitly deferred or unresolved

- Precise aesthetics and visual component designs require hands-on review of prototypes.
- The final project serialization schema and live-link behavior are not implemented.
- Browser deployment provider, advanced solver backend, and offline packaging are not selected.
- Cloud sync, accounts, collaborative editing, third-party plugins and built-in generative AI tutor are out of initial scope.
- A project tracking board and automated governance workflow were earlier planning ideas. Task 002 establishes a manual Issues/PR/document workflow; a board and background automation are outside its approved scope. Any future proposal requires separate approval.
- Timing/scope of the Learn/Explore/Practice modes needs incremental validation with real users.

When uncertain, treat ideas as _proposals_ and ask the owner for decisions only when the ambiguity blocks meaningful progress.
