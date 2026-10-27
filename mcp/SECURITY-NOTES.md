# Security notes for MCP templates

- Every file in `templates/` is a **template**. Files end in `.example` and contain only `<PLACEHOLDER>` values.
- **Real tokens must come from environment variables** (for example `export GITHUB_PERSONAL_ACCESS_TOKEN=...` in your shell or your platform's secret manager). They must **never be committed** to this repository.
- Copy a template outside the repo (or to a git-ignored path), replace placeholders with references to env vars, and keep that copy private.
- Give tokens the minimum scopes needed; prefer short-lived or fine-grained tokens.
- Scope the filesystem server to a single workspace folder, never `/` or your home directory.
- If a token is ever committed or pasted publicly, revoke it immediately and create a new one.
- Review any MCP server's code and license before running it; it executes with your permissions.
