import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import PatternGrid from "@site/src/components/General/PatternGrid";

export default function PatternsPage(): ReactNode {
  return (
    <Layout
      title="Patterns"
      description="Browse UX dark patterns covered in this resource."
    >
      <h1 style={{ textAlign: "center", fontSize: "4rem", margin: "4rem 0" }}>
        Explore
      </h1>
      <PatternGrid />
    </Layout>
  );
}
