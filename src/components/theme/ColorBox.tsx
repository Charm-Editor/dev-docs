import React from "react";

export function ColorBox({ color }: { color: string }) {
  const [copied, setCopied] = React.useState(false);

  const copyColor = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy color", err);
    }
  };

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        onClick={copyColor}
        title="Copy"
        style={{
          display: "inline-block",
          width: 30,
          height: 18,
          backgroundColor: color,
          borderRadius: 3,
          border: "1px solid #ccc",
          marginLeft: 6,
          verticalAlign: "middle",
          cursor: "pointer",
        }}
      />

      {copied && (
        <span
          style={{
            position: "absolute",
            top: -22,
            borderColor: "#fff",
            borderStyle: "solid",
            borderWidth: 1,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#000",
            color: "#fff",
            fontSize: 10,
            padding: "2px 6px",
            borderRadius: 4,
            whiteSpace: "nowrap",
          }}
        >
          Copied
        </span>
      )}
    </span>
  );
}
