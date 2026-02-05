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

## Documentation Structure

The documentation is organized into clear, focused sections:

### 🧭 Architecture

- System overview
- High-level and detailed data flows
- Architectural decisions (ADRs)

### 🧱 Core & Internals

- Domain model
- Use cases
- Editor engine abstraction
- File system and LSP layers

### 🔌 Platform

- Electron architecture
- IPC contracts
- Runtime-specific constraints

### 🗺️ Roadmap

- Planned features
- Execution phases
- Long-term vision

### 📘 Glossary

- Shared terminology
- Core concepts and definitions

---

## Where to Start

- New to the project → **Architecture / Overview**
- Working on core logic → **Core & Editor Engine**
- Desktop-specific work → **Platform / IPC**

---

## Notes

- This documentation targets **developers**, not end users
- All diagrams are authored using **Mermaid**
- All major architectural decisions are documented in **DECISIONS**

---

> The purpose of this documentation is not only to explain _what_ exists,  
> but also _why_ the system is designed this way.
