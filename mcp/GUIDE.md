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
A separate local knowledge server may expose `search_knowledge` and `knowledge_status` over MCP stdio. That local service runs only on a configured computer and is not the backend of this public Docs7 site. This site's Ask AI uses its Context7 documentation index.

## References
- https://github.com/findleyr/mcp
- https://docs.mcp-use.com/typescript/getting-started/welcome
- https://developers.openai.com/api/docs/mcp
