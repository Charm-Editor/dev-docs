import React from "react";

interface AssetGridProps {
  children: React.ReactNode;
}

export function AssetGrid({ children }: AssetGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 24,
      }}
    >
      {children}
    </div>
  );
}
