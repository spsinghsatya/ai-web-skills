# skills/

## Purpose

Reusable agent instructions and workflows. This folder collects notes, links and your own small skill definitions that tell an AI coding agent *how* to do a recurring task (for example "build an accessible card component" or "review a Three.js scene for performance"). It is a place to learn the skill pattern and keep your own skills — not a dump of other people's repositories.

## What is an agent skill?

An **agent skill** is a folder of instructions that an AI agent can load as a reusable capability. The core of every skill is a `SKILL.md` file: YAML front matter (name + description, so the agent knows when to use it) followed by Markdown instructions. A skill may also bundle helper scripts and reference docs. It is *not* an npm package.

Typical structure:

```
skills/
└── example-skill/
    ├── SKILL.md          # required: front matter + instructions
    ├── scripts/          # optional: helper scripts the skill runs
    └── references/       # optional: extra docs loaded on demand
```

Minimal `./skills/example-skill/SKILL.md`:

```markdown
---
name: example-skill
description: One sentence saying what this skill does and when the agent should use it.
---

# Example Skill

1. Step-by-step instructions the agent follows.
2. Conventions, checklists, things to avoid.
```

On the Abacus AI SuperComputer, skills are placed in `~/skills/<name>/SKILL.md`.

## Curated resources

| Repository | Stars | License | Last push | Type | Use it for / trust note |
|---|---:|---|---|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | 184,040 | no SPDX ⚠ | Oct 2026 | Agent skills | Official Agent Skills repo — best reference for how skills are structured. Check its LICENSE file. |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 56,630 | NOASSERTION ⚠ | Oct 2026 | Curated list | Hand-picked agent resources; good starting point. Read the license first. |
| [gamedev-skills/awesome-gamedev-agent-skills](https://github.com/gamedev-skills/awesome-gamedev-agent-skills) | 4,906 | Apache-2.0 | Oct 2026 | Agent skills | 74 game-dev skills for coding agents. |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 141,049 | MIT | Oct 2026 | Agent skill | Design-intelligence skill. Review its contents before use. |

### ⚠ Verify first (do not install blindly)

Very high star counts on single-author personal repos. Rapid star growth is a yellow flag, not proof of quality. Inspect code, license and activity before using any of them:

- `affaan-m/ECC`
- `multica-ai/andrej-karpathy-skills`
- `JuliusBrussee/caveman`
- `farion1231/cc-switch`
- `tanweai/pua`

Never run scripts from a skill you have not read.

## Trust notes

Data verified on 2026-10-27 via the GitHub API. Stars are a popularity signal only. MIT / Apache-2.0 = permissive. `NONE` / `NOASSERTION` = read the repo's LICENSE file before shipping anything derived from it. Last push within ~2-3 months = maintained.

## Permanent workflow guideline

> "You do not have to download entire repositories into these folders. Often, the best approach is to let the agent inspect the upstream repository, install the required package, and implement only the components you need."

**Inspect the upstream repository → install the required package → implement only the components you need. Never vendor entire repositories.**

This folder holds knowledge, links, notes and templates — not copies of upstream code.
