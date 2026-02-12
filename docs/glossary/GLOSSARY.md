# Glossary

### Core Concepts

**Core (`@charm-editor/core`)**
The central repository for business logic, domain entities, and use cases. It is strictly platform-agnostic and contains no React, DOM, or Node.js dependencies.

**Port**
An interface defined in the **Core** that describes a set of operations needed from the outside world (e.g., `IFileSystem`, `ILspClient`).

**Adapter**
A concrete implementation of a **Port** located in the **Infrastructure** layer (e.g., `ElectronFileSystem`, `WebLspClient`).

**Use Case**
A class or function in the Core that represents a specific user action or system flow (e.g., `OpenFile`, `CompileShader`).

### Editor & UI

**Editor Engine (`@charm-editor/editor-engine`)**
The abstraction layer that allows the UI to interact with different text editors (Monaco, CodeMirror) through a unified API.

**Editor Adapter**
The specific component within the Editor Engine that bridges our internal `TextModel` with the external editor's model.

**Text Model**
Our internal representation of a document's content, used for synchronization and state management.

### Infrastructure & Platform

**LSP (Language Server Protocol)**
The protocol used to communicate between the editor and `glsl_analyzer` for features like autocomplete, diagnostics, and formatting.

**glsl_analyzer**
The Zig-based backend responsible for parsing GLSL and providing language intelligence.

**IPC (Inter-Process Communication)**
The mechanism used in Electron to communicate between the Main process (Native APIs) and the Renderer process (UI).

**OPFS (Origin Private File System)**
The browser-based file system used in the Web runtime for high-performance file access.
