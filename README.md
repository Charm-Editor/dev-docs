# ✨ Charm-Editor Developer Documentation Site

[![Built with Docusaurus](https://img.shields.io/badge/built%20with-Docusaurus-blue.svg)](https://docusaurus.io/)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Welcome to the developer documentation site for **Charm-Editor**, a high-performance, cross-platform IDE dedicated to shader development.

This website serves as the central hub for understanding the system architecture, core concepts, and internal modules of the Charm-Editor project.

---

## 🚀 About Charm-Editor

Charm-Editor is a **modular** and **extensible** shader-oriented code editor built with a strong architectural foundation. It is designed to be highly maintainable and scalable, prioritizing long-term stability.

### Key Highlights:
- **Architectural Integrity**: Strict separation between Core, UI, and Infrastructure layers.
- **Engine Agnostic**: Supports multiple editor engines, including Monaco and CodeMirror.
- **LSP-First**: First-class integration with Language Server Protocol (LSP) for intelligent code analysis.
- **Multi-Runtime Support**: Optimized for both Web and Desktop (Electron) environments.
- **High Performance**: Built with React, TypeScript, and a domain-driven core.

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: Version 20.0 or higher.
- **Package Manager**: [pnpm](https://pnpm.io/) (recommended) or [npm](https://www.npmjs.com/).

### Installation
Clone the repository and install the dependencies:

```bash
# Install dependencies using pnpm
pnpm install
```

### Local Development
Start the local development server to view the documentation:

```bash
# Run the development server
pnpm start
```
This command starts a local development server at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

---

## 🏗️ Project Structure

An overview of the project's directory layout:

- `docs/`: Contains all documentation content organized by categories (Architecture, Core, UI, etc.).
- `blog/`: Project-related blog posts and updates.
- `src/`: Custom React components and pages for the documentation site.
- `static/`: Static assets such as images, logos, and fonts.
- `docusaurus.config.ts`: Main configuration file for the Docusaurus site.
- `sidebars.ts`: Defines the navigation structure of the documentation.

---

## 📦 Build & Deployment

### Build
Generate static content for production:

```bash
pnpm build
```
The static files will be generated in the `build/` directory.

### Deployment
If you are using GitHub Pages for hosting, you can deploy with:

```bash
# Deploy using pnpm
pnpm deploy
```

---

## 🤝 Contributing

We welcome contributions to the documentation! If you find a typo, a missing section, or want to add new content, please follow our [Contribution Guidelines](./docs/contributing/CONTRIBUTING.md).

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details (if available).

---

Built with ❤️ by the **Charm-Editor** Team.
