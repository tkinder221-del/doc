---
title: "Model Context Protocol — practical reference"
description: Practical technical guide and primary references
---

# Model Context Protocol — practical reference

## Core concepts
MCP provides a standard interface through which AI clients can discover and use external capabilities. Servers expose tools for actions, resources for contextual data and prompts for reusable interaction patterns, depending on the implementation.

## Transport and lifecycle
Local MCP servers commonly use stdio; networked deployments may use HTTP transports. Keep standard output protocol-clean for stdio servers, and route diagnostic logs to standard error. Validate initialization, capability negotiation and request/response handling.

## Tool design
Each tool needs a clear name, concise description, typed input schema and predictable result shape. Validate all input on the server. Apply least-privilege access to files, shell commands, databases and external APIs. Tool descriptions are not an authorization mechanism.

## Security
A tool result can contain prompt injection. Do not treat resource contents or third-party responses as trusted system instructions. Restrict filesystem roots, redact secrets, authenticate remote endpoints and avoid exposing broad command execution unnecessarily.

## Operational checklist
- Start server and verify initialization handshake.
- List available tools and inspect input schemas.
- Test success, malformed input and permission-denied cases.
- Ensure timeouts and cancellations are handled.
- Check logs for accidental secret exposure.
- Verify client-side configuration points to the correct executable and arguments.

## Integration with the local knowledge base
The local knowledge server in `J:\\codex\\knowledge-base` exposes `search_knowledge` and `knowledge_status` over MCP stdio. Its current database uses SQLite FTS5 lexical search. Vector similarity requires configuring embeddings and reindexing.

## References
- https://github.com/findleyr/mcp
- https://docs.mcp-use.com/typescript/getting-started/welcome
- https://developers.openai.com/api/docs/mcp
