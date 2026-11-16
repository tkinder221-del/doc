---
name: windows-powershell-tool
description: Build or extend Windows automation scripts, PowerShell modules, and internal administration tools.
---

1. Determine whether Windows PowerShell 5.1, PowerShell 7, or both are supported. Verify the required modules and APIs in each target edition.
2. Use an advanced function or a module for reusable commands. Return objects for pipeline consumers and leave table formatting to the caller.
3. For functions that change system or user state, implement SupportsShouldProcess and guard the actual mutation with ShouldProcess so WhatIf exercises the same input and target resolution.
4. Use literal paths for user-selected files. Make file encoding explicit where interoperability matters. Make failures actionable and keep unattended execution free of interactive prompts.
5. Use Pester to cover parameter validation, normal output, and failure paths. Verify WhatIf preserves state and repeated runs handle already-applied changes when relevant.

References: [PowerShell](https://learn.microsoft.com/powershell/), [Pester](https://pester.dev/docs/quick-start).
