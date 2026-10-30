# Kuro Coliving — concept 04

Architectural presentation deployed on Railway from GitHub main.

## Current program
- Basement: utility only.
- Ground and L1: 12 conventional bays each, 2.6 × 5 m, plus lobby. Conceptual vehicle lift 3.5 × 6 m connects the two parking floors; no internal ramp in this option.
- L2: indoor pool, gym, office and meeting.
- L3 and L4: 10 orthogonal room modules per level, 3.2 × 7.5 m. 24 m² is module area, not verified net area after walls/shafts.
- L5: cafe and terrace; seats not fixed.

24 drawn bays do not satisfy the earlier 36-car target. Capacity is a geometric test-fit, not a certified maximum. Swept paths, queueing, structural columns, accessible bays, pedestrian routes, evacuation and equipment specification remain unresolved. A 6.6 m main aisle is reserved; entry and local maneuvers need detailed analysis.

Parcel outline is traced from the supplied cadastral screenshot and normalized to 855 m². Edge lengths are estimates, not survey measurements. Concept footprint 500 m² / 58.48% of the parcel; 60% user-supplied KDB implies a 513 m² ceiling, subject to legal confirmation of all applicable controls. Room rectangles are not clipped to the tapered perimeter. Hero photo remains an earlier conceptual ulin facade, not an updated verified elevation.

Original synthesized instrumental with on/off control is preserved. No autoplay. Reduced-motion support and text/axonometric parallax are retained. Axonometric includes utility basement plus six above-ground levels.

## Checks
`npm run check`
`node tests/geometry.mjs`

Geometry checks assert room/bay counts, rectangular sizes, containment and selected collision checks; they do not certify architectural feasibility.
