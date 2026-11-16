---
name: windows-powershell-advanced
description: Build production-oriented PowerShell scripts and modules for scheduled, unattended, bulk, or resumable Windows automation.
---

1. Define the supported PowerShell edition, execution identity, permissions, timeout, inputs, and expected output before coding. For scheduled runs use explicit paths and test under the intended account with its actual environment.
2. Keep discovery and planning functions separate from mutations. Use advanced functions with validated parameters and pipeline-friendly structured output. Implement SupportsShouldProcess at the mutation boundary and test WhatIf with realistic inputs.
3. Handle terminating and non-terminating errors deliberately. Record per-item outcomes with timestamps and identifiers. Keep diagnostic logs separate from pipeline results and exclude credentials from both.
4. Retry only transient failures, with bounded attempts and timeouts. Verify current state before repeating a side effect. For operations that must survive interruption, persist completed item identifiers after successful writes and test recovery from a partial run.
5. Use bounded concurrency only when operations are independent and the supported PowerShell edition provides a suitable runtime. In entry scripts for schedulers or CI, return an exit code that reflects the documented success and failure contract.
6. Run Pester and PSScriptAnalyzer where available. Test WhatIf, repeated execution, a mixed-success batch, and interruption or resume when implemented.
