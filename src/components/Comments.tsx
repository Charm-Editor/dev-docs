import React from "react";
import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div style={{ marginTop: "4rem" }}>
      <Giscus
        repo="Charm-Editor/dev-docs"
        repoId="R_kgDORI8V0g"
        category="💬 Docs Feedback"
        categoryId="DIC_kwDORI8V0s4C2VN9"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={"preferred_color_scheme"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
