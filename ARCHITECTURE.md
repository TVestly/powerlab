# Architecture

React and TypeScript provide a typed component model. Vite handles development and production builds. Tailwind CSS v4 is available through its Vite integration; shared CSS tokens and semantic classes keep the initial design consistent. Vitest with Testing Library exercises user behavior in a browser-like DOM.

## Responsibilities

- `app`: navigation, page layout, theme control, route handling.
- `modules`: one typed registry with topic metadata. Both directory and detail routes discover entries from it.
- `engineering`: pure domain calculations with explicit inputs, outputs, and units; no React, DOM, or storage access.
- `shared/math`: domain-independent numerical helpers when a real shared need emerges.
- `visualizations`: reusable renderers receiving explicit data; no hidden engineering calculations.
- `storage`: persistence boundary. Theme preferences currently use guarded localStorage access. Project persistence will need an explicit versioned format later.

Empty areas are documented intentionally; do not add speculative utilities or APIs. The current wave illustration is decorative, not a numerical result or simulation.

## Decisions

A static browser application needs no backend or secrets. Hash routing supports static hosting and leaves a path to a future desktop webview without server route configuration. Desktop packaging is not included. Module metadata is sufficient for previews; introduce a typed module view property when the first real activity needs one, rather than a large plugin framework now.

Future related modules should exchange explicit typed quantities through shared calculation contracts, with the application orchestrating them. Avoid imports of one module's UI or mutable global state into another module. Add those contracts when the first concrete integration exists.

Theme preference is the only persisted state. Storage failures retain a usable session. Browser rendering remains separate from future project serialization, making additional storage adapters possible.
