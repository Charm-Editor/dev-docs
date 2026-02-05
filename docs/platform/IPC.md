# IPC Contracts

## Channels

### openWorkspace

Renderer → Main

```ts
type OpenWorkspace = {
  path: string;
};
```

---

# LSP Integration

## Server

- glsl_analyzer
- stdio transport

## Supported Capabilities

- diagnostics
- hover
- completion

## Message Flow

UI → UseCase → LspClient → Analyzer
