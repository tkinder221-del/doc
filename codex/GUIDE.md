# Codex — practical reference

## Scope
Codex is a coding agent that can inspect repositories, propose patches, run tests and report outcomes within its configured permissions. It should work against a clearly selected workspace and respect repository-specific instructions.

## Safe workflow
1. Inspect repository structure and relevant instructions before changing files.
2. Establish the intended behavior and reproduce the issue or define acceptance criteria.
3. Make the smallest coherent change; avoid unrelated edits.
4. Run targeted checks, then broader tests where practical.
5. Review the diff and explain what changed, what was tested and what remains uncertain.

## Configuration and permissions
Sandbox and approval settings control command execution and external effects. Do not grant broad filesystem or network access unless the task requires it. Secrets should remain outside the repository. For destructive operations, require explicit authorization.

## Working with multiple projects
Keep each repository's root, build commands, environment variables and instruction files distinct. Shared documentation can be centralized in a separate `doc` repository, but code changes must occur in the intended project workspace.

## ACP
Agent Client Protocol integrations can expose Codex to compatible editors or clients. Verify the adapter version, transport, authentication and permission boundaries. The Codex ACP adapter is maintained separately from the main Codex repository.

## Troubleshooting
- Confirm executable availability and current working directory.
- Verify authentication without printing tokens.
- Check sandbox restrictions and requested approvals.
- Inspect test output rather than assuming command success.
- Distinguish GitHub repository permissions from local Git configuration.

## Authoritative references
- https://github.com/openai/codex
- https://github.com/zed-industries/codex-acp
- https://learn.chatgpt.com/docs/llms-full.txt
