---
sidebar_position: 1
title: Introduction
---

# Charm Editor Documentation

Welcome to the official documentation for **Charm Editor** ✨  
This documentation describes the system architecture, core concepts, and internal modules of the project.

---

## What is Charm Editor?

Charm Editor is a **modular**, **extensible** shader-oriented code editor designed with a strong architectural foundation:

- Strict separation between **Core / UI / Infrastructure**
- Support for multiple **Editor Engines** (Monaco, CodeMirror)
- First-class **LSP integration**
- Multi-runtime support: **Web** and **Desktop (Electron)**

The project prioritizes long-term maintainability and scalability over short-term convenience.

---

## Tech Stack

Charm Editor is built with a modern, high-performance stack:

- **Frontend**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/)
- **Core Logic**: Pure TypeScript (Domain-Driven Design)
- **Runtimes**: [Electron](https://www.electronjs.org/) (Desktop) & Browser (Web)
- **Editor Engines**: [Monaco](https://microsoft.github.io/monaco-editor/) & [CodeMirror 6](https://codemirror.net/)
- **Language Intelligence**: [Zig](https://ziglang.org/) (for `glsl_analyzer`)
- **Graphics**: WebGPU & WebGL

---

## Documentation Structure

The documentation is organized into clear, focused sections:

### 🧭 [Architecture](./architecture/ARCHITECTURE.md)

- [System Overview](./architecture/ARCHITECTURE.md#2-high-level-architecture)
- [Data Flows](./architecture/DATA_FLOW.md)
- [Design Decisions](./architecture/DECISIONS.md)

### 🧱 [Core & Internals](./category/core--engines)

- [Domain Model](./core/MODULES.md)
- [Editor Engine Abstraction](./core/EDITOR_ENGINE.md)
- [File System Layer](./core/FILE_SYSTEM.md)
- [LSP Integration](./core/LSP.md)

### 🔌 [Platform](./category/platform)

- [Electron & IPC](./platform/IPC.md)
- [Security Model](./platform/SECURITY.md)

### 🗺️ [Roadmap](./roadmap/ROADMAP.md)

- [Execution Phases](./roadmap/ROADMAP.md#execution-phases)
- [Long-term Vision](./roadmap/ROADMAP.md#long-term-vision)

### 📘 [Glossary](./glossary/GLOSSARY.md)

- [Terminology and Definitions](./glossary/GLOSSARY.md)

---

## Where to Start

- **New to the project?** Start with the [Architecture Blueprint](./architecture/ARCHITECTURE.md).
- **Working on UI/React?** Check out the [UI Category](./category/ui).
- **Implementing Core Logic?** See [Modules Overview](./core/MODULES.md).
- **Desktop-specific work?** Read about [IPC and Electron](./platform/IPC.md).

---

## Notes

- This documentation targets **developers**, not end users
- All diagrams are authored using **Mermaid**
- All major architectural decisions are documented in **DECISIONS**

---

> The purpose of this documentation is not only to explain _what_ exists,  
> but also _why_ the system is designed this way.
