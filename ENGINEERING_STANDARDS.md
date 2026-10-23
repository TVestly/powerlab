# Engineering standards

These conventions govern future calculations; no engineering solver is implemented in this release.

- Use SI units internally; include units in input/output contracts and convert only at boundaries. Make displayed prefixes and units explicit. Do not silently mix degrees and radians.
- Distinguish RMS from peak values and line from phase quantities in names and labels.
- Default future AC phasor work to RMS magnitudes and the exp(jωt) convention. State the phase sequence, reference angle, and sign convention with each model. Use radians internally and clearly labeled degree conversion for display.
- Use established complex-number/numerical libraries when needed. Keep precision internally; round only for presentation.
- Validate finite numbers, physical domains, zero denominators, and model assumptions. Return useful validation errors rather than plausible-looking invalid values.
- Every calculation needs a documented model, assumptions, and an independently derived or authoritative reference example. Test limiting cases, invalid inputs, conservation relationships, and units.
- Compare floating-point results with justified absolute and relative tolerances, not exact equality. Specify tolerances per model and magnitude; do not use one unexplained tolerance everywhere.
- Distinguish educational approximations from higher-fidelity models. Show model limitations to the learner. Never present a diagram or animation as proof of numerical correctness.
