---
name: task-workflow
description: Carry multi-step development or operations tasks through verification with minimal interruption and explicit authority boundaries.
---

1. Identify the outcome, deliverables and acceptance checks. Use the user's request and earlier approvals to establish which workspace, actions and external destinations are in scope.
2. Inspect the current state and batch independent read-only checks. Resolve routine, reversible choices using the existing project conventions. Continue useful work whenever another step is waiting for approval or missing information.
3. Carry out authorized edits, tests and recoverable retries. Ask for approval only when an operation requires it or would expand the agreed scope. Present the exact proposed action, target and impact together, and wait for a decision before executing dependent work.
4. For a long-running job, keep its status or job ID, check the result, and diagnose failures before retrying. Retry actions that may have already changed state only after checking their actual outcome.
5. Verify the agreed outcome and report what changed, which checks ran and what still requires action. Preserve enough state to resume if the task is interrupted.
