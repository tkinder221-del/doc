# Developer tools — operational notes

## Source registries
Use `sources.json` to track canonical Context7 library identifiers and upstream URLs. Duplicate references should map to one source record. Keep a record of update dates and whether a source is a repository, website or llms.txt document.

## CodeProxy
CodeProxy has its own documentation and integration guidance. Verify compatibility and authentication directly against the upstream documentation before configuring a Codex CLI proxy.

## Update strategy
When maintaining a curated knowledge repository, prefer short original summaries linked to primary sources over copying large third-party documentation trees. If mirroring material, verify its license and attribution requirements.

## References
- https://context7.com/websites/codeproxy_dev
- https://github.com/context7/codeproxy_dev
