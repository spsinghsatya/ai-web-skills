# ai-web-skills
A curated collection of AI agent skills, UI components, animation libraries, and MCP configurations for website development.

## Library overview

This repository is a resource library for AI-assisted web development, organized into six categories. It stores knowledge, verified links, templates and guides. It does not store copies of upstream projects. Link stats were verified on 2026-10-27 via the GitHub API.

## Folder map

| Folder | Purpose | What belongs |
|---|---|---|
| [`skills/`](./skills) | Reusable agent instructions and workflows | `SKILL.md`-style skills, notes on agent skill repos |
| [`ui-components/`](./ui-components) | Buttons, cards, forms, navigation | Links and notes on component libraries |
| [`animations/`](./animations) | Motion effects, transitions, scroll animations | Links and notes on animation libraries and patterns |
| [`3d-experiences/`](./3d-experiences) | Three.js and React Three Fiber examples | 3D learning notes, links, small guides |
| [`mcp/`](./mcp) | MCP configuration templates without secrets | `*.json.example` templates with `<PLACEHOLDER>` values, security notes |
| [`projects/`](./projects) | Your actual website projects | Project entries linking to their own repos (e.g. `ai-web-lab`) |

## Workflow rule

> "You do not have to download entire repositories into these folders. Often, the best approach is to let the agent inspect the upstream repository, install the required package, and implement only the components you need."

**Inspect the upstream repository → install the required package → implement only the components you need. Never vendor entire repositories.**

## Safety note

- **No secrets**: never commit tokens, API keys, passwords or `.env` files. MCP templates use `<PLACEHOLDER>` values only; real values come from environment variables (see [`mcp/SECURITY-NOTES.md`](./mcp/SECURITY-NOTES.md)).
- **No vendored upstream code**: link to upstream repos and install packages instead of copying whole repositories.
- Check each resource's license and activity before using it; entries flagged ⚠ need extra care.
