import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./about.module.css";
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.container}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.aboutText}>
          <strong>The Invisible Hand of UX</strong> is a glossary built for
          everyday people. UX Design is a field that impacts every single person
          that interacts with software, yet is often jam-packed with jargon that
          is difficult to parse for industry newcomers.
        </p>
        <p className={styles.aboutText}>
          Users are smart. They know what they like and dislike in a user
          interface. But, sometimes they struggle to articulate <i>why</i>. This
          isn't necessarily their fault. People who are not plugged in to the
          design industry don't always have the vocabulary to express their
          needs.
        </p>
        <p className={styles.aboutText}>
          The goal of this glossary is to provide clear and concise interactive
          demos and explanations for each of these patterns so readers can
          cognitively associate the given term to their real-world analogues.
          Industry mammoths like <a href="https://www.google.com">Google</a> and{" "}
          <a href="https://www.apple.com">Apple</a> incorporate the patterns
          described on this site at length.
        </p>
        <p className={styles.aboutText}>
          When users are aware of the patterns that exist in the products they
          use, they are far less likely to be decieved, manipulated, or coerced
          into making decisions that don't align with their best interests.
          Transparency around these terms will help more people make informed
          decisions within the bounds of the products they use every day.
        </p>
      </div>
    </Layout>
  );
}
