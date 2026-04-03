import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import PatternGrid from "@site/src/components/General/PatternGrid";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.bannerContainer}>
          <picture>
            <source
              srcSet="/img/print-logo-raster.png"
              media="(max-width: 600px)"
            />
            <img
              src="/img/banner-raster.png"
              alt="The Invisible Hand of UX Banner"
              className={styles.banner}
            />
          </picture>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div className={styles.patternGrids}>
          <PatternGrid category="anchoring" />
          <PatternGrid category="attention" />
          <PatternGrid category="behavior" />
          <PatternGrid category="coercion" />
          <PatternGrid category="priming" />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>{/*<HomepageFeatures />*/}</main>
    </Layout>
  );
}
