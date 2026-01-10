# Image handling decisions

This document explains decisions taken about image usage in the codebase.

Summary
- We prefer `next/image` when it provides clear benefit (automatic optimization, responsive sizing) and does not interfere with styling/behavior.
- We keep raw `<img>` elements when the `next/image` wrapper would change layout, interfere with CSS transforms/animations, or complicate dynamic sizing.

Current status in this repo
- No straightforward replacements were found in `app/` except `app/components/LogoLoop.jsx`.
- `LogoLoop.jsx` keeps a raw `<img>` by design because it relies on CSS-driven height (`var(--logoloop-logoHeight)`), animation transforms and we need the element to behave exactly as-is (the wrapper added by `next/image` can interfere with transforms and responsive layout). The file includes a local ESLint disable comment with an explicit rationale.

Recommendation
- For future additions, prefer `next/image` for content images (hero banners, editorial images) and prefer raw `<img>` for UI/animated elements where wrapper behavior is problematic.
- If a logo or simple asset is used statically and has fixed dimensions, consider migrating to `next/image` in a dedicated PR.

If you want, I can open follow-up PRs converting specific images when you have concrete examples to convert.
