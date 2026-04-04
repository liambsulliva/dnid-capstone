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
      <div className={styles.container}>
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
          <ol className={styles.attributionList}>
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
            <li>
              <strong>Lorem Ipsum</strong> - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </li>
            <li>
              <strong>Lorem Ipsum</strong> - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </li>
            <li>
              <strong>Lorem Ipsum</strong> - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </li>
            <li>
              <strong>Lorem Ipsum</strong> - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </li>
          </ol>
          <ol start={6} className={styles.attributionList}>
            <li>
              <strong>Lorem Ipsum</strong> - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </li>
            <li>
              <strong>Lorem Ipsum</strong> - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </li>
            <li>
              <strong>Lorem Ipsum</strong> - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </li>
            <li>
              <strong>Lorem Ipsum</strong> - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </li>
            <li>
              <strong>Lorem Ipsum</strong> - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </li>
          </ol>
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p>
            <a href="https://www.anthropic.com/news/claude-sonnet-4-6">
              Claude Sonnet 4.6
            </a>{" "}
            was used to accelerate the development of interactive demos and
            graphics.
          </p>
        </div>
      </div>
    </Layout>
  );
}
