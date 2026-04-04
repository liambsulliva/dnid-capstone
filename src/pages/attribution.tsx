import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./attribution.module.css";
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <h1 className={styles.title}>Attribution</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <ol style={{ listStyleType: "decimal", paddingLeft: "1.5rem" }}>
          <li>
            <strong>Logo</strong> - Rundvald, 
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-SA 4.0
            </a>
            , via Wikimedia Commons. Horizontal transformation applied.
          </li>
        </ol>
        {/* <ol start={6} style={{ listStyleType: "decimal", paddingLeft: "1.5rem" }}>
        </ol> */}
      </div>
    </Layout>
  );
}
