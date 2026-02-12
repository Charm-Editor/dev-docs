import React from "react";

interface AssetCardProps {
  title: string;
  description?: string;
  src: string;
  sourceUrl: string;
}

export function AssetCard({
  title,
  description,
  src,
  sourceUrl,
}: AssetCardProps) {
  const downloadUrl = `${src}?download=1`;

  return (
    <div
      style={{
        border: "1px solid var(--ifm-color-emphasis-300)",
        borderRadius: 12,
        padding: 16,
        background: "var(--ifm-background-surface-color)",
      }}
    >
      <img
        src={src}
        alt={title}
        style={{
          width: "100%",
          height: 120,
          objectFit: "contain",
          marginBottom: 12,
        }}
      />

      <strong>{title}</strong>
      {description && (
        <p style={{ color: "var(--ifm-color-emphasis-600)", fontSize: "11px" }}>
          {description}
        </p>
      )}

      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <a href={src} target="_blank" rel="noopener">
          🔗 View
        </a>
        <a href={downloadUrl} download>
          ⬇️ Download
        </a>
        <a href={sourceUrl} target="_blank" rel="noopener">
          📦 Source
        </a>
      </div>
    </div>
  );
}
