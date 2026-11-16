---
name: windows-dotnet-app
description: Build, extend, test, or package a Windows desktop app in C# with WPF, WinUI 3, or Windows Forms.
---

1. Preserve the existing framework and target where feasible. For a new app, choose WPF for XAML and data binding, WinUI 3 for Windows App SDK integration, or WinForms for simple form-based utilities.
2. Keep domain logic and service calls outside window event handlers. Run long operations asynchronously, marshal UI updates appropriately, and propagate cancellation where the user can stop work.
3. Verify the project's target framework, minimum Windows version and runtime architecture before selecting dependencies. Keep writable settings outside the installation directory.
4. Run build and tests on Windows. Smoke-test startup, the primary user flow, and recovery from a failed file or network operation where relevant.
5. When delivering a release, choose framework-dependent or self-contained publishing based on deployment needs. Use the packaging path supported by the chosen framework and verify the installed or published build on the target Windows environment.

Reference: [Windows app development](https://learn.microsoft.com/windows/apps/).
