# Adding a module

1. Add a `LearningModule` entry to `src/modules/registry.ts`. Provide a stable unique URL-safe `id`, title, category, description, planned topics, and icon.
2. The directory and `/modules/:id` route discover it automatically; no sidebar or route edits are required for another preview.
3. Clearly label previews and unfinished functionality. Do not imply planned calculations are working.
4. For a real activity, put its UI under `src/modules/<id>/` and domain calculations under `src/engineering/`. Extend the module contract with a typed view when needed.
5. Reuse shared visualizations, math, and storage rather than copying them. Keep calculation functions free of rendering and browser state.
6. Document assumptions, units, input limits, and intended educational outcomes. Test reference results, invalid inputs, and navigation to the activity.

IDs are persistent identifiers; changing one can break saved links. Modules must be course-independent. Communication between modules should use explicit typed data, never another module's component internals.
