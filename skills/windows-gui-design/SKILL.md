---
name: windows-gui-design
description: Design or refine a polished, accessible desktop GUI for Windows in an existing Python or .NET UI framework.
---

1. Identify the main user workflow and the controls needed to finish it. Use labels that describe the user's task, give the primary action visual priority, and expose keyboard shortcuts for repeated actions when appropriate.
2. Apply a consistent spacing scale, type hierarchy, and theme through the framework's shared styles or resource dictionaries. Prefer native controls and system focus behavior. Keep destructive and primary actions visually distinct.
3. Design the empty, loading, error, and success states alongside the populated view. Keep the window responsive during long operations, show progress where measurable, and preserve user input after recoverable errors.
4. Make tab order match the workflow, set accessible names for icon-only controls, and convey status with text or a symbol in addition to color. Verify text contrast and focus visibility in supported themes.
5. Run the real app on Windows. Inspect the main view at 100% and 150% scaling, resize to the supported minimum, and complete the primary workflow using only the keyboard. Check for clipped text with representative long labels and file paths.
