# Architectural Decisions

## ADR-001: Clean Architecture

**Decision**
We use Clean Architecture to isolate core logic from UI and runtimes.

**Reason**

- Web + Electron support
- Testability
- Long-term maintainability

**Consequences**

- More boilerplate
- Stricter boundaries

---

## ADR-002: Zig for Language Analysis

**Decision**
Use Zig to implement the `glsl_analyzer` (the core GLSL brain).

**Reason**

- **Performance**: High-speed parsing and analysis of shader code.
- **Portability**: Compiles to WASM for the Web and native binaries for Desktop.
- **Memory Safety**: Better safety than C++ without the overhead of a GC.

**Consequences**

- Requires Zig knowledge for backend contributors.
- Complexity in build toolchain (integrating Zig with TS).

---

## ADR-003: Editor Abstraction Layer

**Decision**
Implement a custom `EditorAdapter` instead of binding directly to Monaco or CodeMirror.

**Reason**

- **Flexibility**: Switch engines or support multiple engines simultaneously.
- **Sync**: Easier implementation of CRDT/Collaboration logic in a headless way.
- **Testing**: Can test editor logic without a DOM.

**Consequences**

- Overhead in mapping features (e.g., decorations, markers) between our API and the engine.

---

## ADR-004: Monorepo Package Structure

**Decision**
Use a Monorepo with scoped packages (`@charm-editor/*`).

**Reason**

- **Modularity**: Explicit dependencies between Core, UI, and Infra.
- **Shared Code**: Easily share types and utils between Web and Desktop.
- **Release Management**: Version modules independently if needed.

**Consequences**

- Requires tooling like pnpm workspaces or Nx.
- Slightly higher barrier to entry for repo structure.
