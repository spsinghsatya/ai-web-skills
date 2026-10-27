# mcp/

## Purpose

MCP configuration templates without secrets. This folder keeps example configuration files that connect AI agents and editors to external tool servers (GitHub, filesystem, Playwright). Everything here is a template with `<PLACEHOLDER>` variables — never real credentials.

## What is an MCP configuration?

MCP (Model Context Protocol) is an open protocol that lets an AI agent talk to external "tool servers". An **MCP configuration** is a JSON file that tells the agent/editor which servers exist, how to launch each one (`command` + `args`) and which environment variables to pass. For example, a GitHub MCP server lets an agent read issues; a filesystem server lets it read/write one scoped folder; a Playwright server lets it drive a browser.

Because configs often need tokens, keep a *template* in git (with `<PLACEHOLDER>`) and keep the real values in environment variables on your machine. Exact file names and top-level keys vary slightly between clients; check your client's docs.

## Templates

See [`templates/`](./templates):

| File | Purpose |
|---|---|
| [`github-mcp.json.example`](./templates/github-mcp.json.example) | GitHub MCP server; token read from an env var |
| [`filesystem-mcp.json.example`](./templates/filesystem-mcp.json.example) | Filesystem server scoped to `./workspace` |
| [`playwright-mcp.json.example`](./templates/playwright-mcp.json.example) | Playwright browser automation server |

Read [`SECURITY-NOTES.md`](./SECURITY-NOTES.md) before using them. The package names in the templates are common examples; verify each package on npm / its GitHub repo before running it.

## Curated resources

No MCP server repositories were verified in the current catalog, so none are listed here as trusted. When you add one, run the trust checklist first: license field, last push within ~2–3 months, reputable owner, and read the README and code. See also `skills/README.md` for related agent resources.

## Permanent workflow guideline

> "You do not have to download entire repositories into these folders. Often, the best approach is to let the agent inspect the upstream repository, install the required package, and implement only the components you need."

**Inspect the upstream repository → install the required package → implement only the components you need. Never vendor entire repositories.**

This folder holds knowledge, links, notes and templates — not copies of upstream code.
