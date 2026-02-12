import React from "react";
import { AssetGrid } from "./AssetGrid";

interface AssetsSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function AssetsSection({
  title,
  description,
  children,
}: AssetsSectionProps) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <AssetGrid children={children} />
    </section>
  );
}
