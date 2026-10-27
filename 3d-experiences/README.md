# 3d-experiences/

## Purpose

Three.js and React Three Fiber examples. This folder holds learning notes, links and short guides for building 3D scenes on the web. The real scenes live in your website projects; here you record the stack (`three` + `@react-three/fiber` + helpers) and which examples are worth studying.

## Curated resources

| Repository | Stars | License | Last push | Type | Use it for / trust note |
|---|---:|---|---|---|---|
| [mrdoob/three.js](https://github.com/mrdoob/three.js) | 117,010 | MIT | Oct 2026 | npm (`three`) | The JavaScript 3D engine everything else wraps. |
| [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) | 33,264 | MIT | Oct 2026 | npm (`@react-three/fiber`) | Three.js scenes as React components. |
| [pmndrs/drei](https://github.com/pmndrs/drei) | 10,062 | MIT | Oct 2026 | npm (`@react-three/drei`) | Ready-made helpers: controls, geometry, loaders. |
| [pmndrs/uikit](https://github.com/pmndrs/uikit) | 3,254 | NOASSERTION ⚠ | Oct 2026 | npm | UI inside a 3D scene. License unclear — read it before use. |
| [pmndrs/react-postprocessing](https://github.com/pmndrs/react-postprocessing) | 1,487 | MIT | Oct 2026 | npm | Bloom, glitch, vignette effects. |
| [14islands/r3f-scroll-rig](https://github.com/14islands/r3f-scroll-rig) | 988 | MIT | Dec 2025 | Source | Example of scroll-driven 3D scenes. |

Stale (2022–2024 pushes, license NONE/MIT mixed): `pmndrs/use-cannon`, `pmndrs/react-three-flex`, `pmndrs/react-three-next`. Fine as learning examples; check maintenance and license before adopting.

## Trust notes

Data verified on 2026-10-27 via the GitHub API. Stars are a popularity signal only. MIT / Apache-2.0 = permissive. `NONE` / `NOASSERTION` = read the repo's LICENSE file before shipping anything derived from it. Last push within ~2-3 months = maintained.

## Permanent workflow guideline

> "You do not have to download entire repositories into these folders. Often, the best approach is to let the agent inspect the upstream repository, install the required package, and implement only the components you need."

**Inspect the upstream repository → install the required package → implement only the components you need. Never vendor entire repositories.**

This folder holds knowledge, links, notes and templates — not copies of upstream code.
