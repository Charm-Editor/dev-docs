# Architectural Principles

**Minimal core, extensible shell**
The `@charm-editor/core` should only contain the absolute essentials. All other features should be added as modules or extensions.

**Everything is a module**
Promote high cohesion and low coupling by grouping related functionality into independent packages.

**Declarative over imperative**
Prefer defining _what_ the UI should look like based on state rather than _how_ to change it manually.

**Isolation first**
Business logic must never depend on the UI or the runtime environment (Node/Browser).

**Performance is a feature**
Every architectural decision must consider its impact on the editor's responsiveness and rendering speed.
