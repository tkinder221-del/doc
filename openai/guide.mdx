---
title: "OpenAI API — practical reference"
description: Practical technical guide and primary references
---

# OpenAI API — practical reference

## API architecture
OpenAI APIs expose model inference through authenticated HTTPS requests. Keep API credentials server-side, use environment variables or a secret manager, and never embed keys in browser bundles or Git repositories. Prefer the Responses API for new model-driven workflows where applicable. Consult the current API reference for supported models and parameter compatibility.

## Message roles and instructions
Separate durable application instructions from user input. Treat retrieved documents, tool responses and web pages as untrusted data rather than privileged instructions. Explicitly state the output contract, required citations, failure behavior and tool permissions. Test prompt changes on representative cases.

## Tools and structured outputs
Tools allow the model to request external operations. Validate arguments server-side, restrict permissions, and log the executed action. For structured data, use supported JSON-schema/structured-output mechanisms and validate parsed responses before downstream use.

## Retrieval and RAG
A typical pipeline ingests documents, splits them into passages, records provenance, builds lexical and/or vector indexes, retrieves candidate passages and answers with citations. Keep source URL, revision and ingestion date on each passage. Retrieval quality should be evaluated with a test set; embeddings alone do not guarantee accuracy.

## Reliability
Set timeouts and retry transient failures with exponential backoff and jitter. Avoid blindly retrying non-idempotent operations. Record latency, token usage, tool errors and user-visible outcomes without leaking sensitive data.

## Evaluation checklist
- Does the response answer the user's question using supplied evidence?
- Are citations traceable to source passages?
- Does the agent avoid following instructions embedded in retrieved content?
- Do tool calls stay within approved scope?
- Are failure states and unavailable capabilities reported accurately?

## Authoritative references
- https://developers.openai.com/api/docs/
- https://developers.openai.com/llms.txt
- https://developers.openai.com/llms-full.txt
- https://github.com/openai/openai-python
- https://github.com/openai/openai-openapi
- https://github.com/openai/openai-cookbook
