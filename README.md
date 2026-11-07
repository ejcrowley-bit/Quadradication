# Trajectory: Quadratic Strike

A sci-fi artillery game for practicing algebra. You aim by typing the equation your shot follows: straight-line lasers first (Algebra 1), then parabolas (Algebra 2 quadratics).

- **Campaign (21 missions):** Basic Training with straight-line lasers (y = mx + b, Algebra 1) → factored form → vertex form → standard form → discriminant → boss.
- **Aim guide:** training missions show the full shot path as you type; a menu toggle shows a short aim line everywhere else.
- **Endless Drill:** random puzzles from the forms unlocked so far (lines first), with a streak multiplier.
- **Debrief on every miss:** shows where the arc actually went (peak, roots, height at each target).
- **Hints and walkthroughs:** hints cap the mission at 2 stars; the walkthrough unlocks after 3 misses.
- **Service Record:** rank, unlockable plasma colors, and a per-skill report (shots, clears, first-shot rate).

Single file, no build step, no network needed except Google Fonts. Open `index.html` in any browser (phone or PC). Progress is saved in the browser's local storage.

To check that every mission is solvable: `node test/check-levels.cjs` (needs Playwright).

PC controls: type numbers, `-` flips the sign, `Tab` moves to the next box, `Enter` fires.
