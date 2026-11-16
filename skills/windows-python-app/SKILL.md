---
name: windows-python-app
description: Build, extend, test, or package a Python desktop application for Windows using Tkinter or PySide6.
---

1. Keep the existing GUI framework. For a new app, use Tkinter for simple standard-library forms and PySide6 when richer widgets or model/view components matter.
2. Keep file processing, validation and persistence independent of widget callbacks. Run slow IO off the UI thread and send progress and errors back using the GUI framework's event mechanism.
3. Resolve user-selected paths with pathlib. Test spaces, non-ASCII names, missing files and permission errors. Store writable settings outside the installed executable directory.
4. Declare dependencies and isolate them in a virtual environment. Test core behavior without the GUI and smoke-test the normal GUI workflow on Windows.
5. For a distributable app, choose packaging compatible with the GUI stack. Test the packaged build on the target architecture without the development environment, including icons and framework plugins.

References: [Tkinter](https://docs.python.org/3/library/tkinter.html), [Qt for Python](https://doc.qt.io/qtforpython-6/).
