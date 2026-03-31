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
          {typeof window !== "undefined" &&
          window.matchMedia("(max-width: 600px)").matches ? (
            <img
              src="/img/print-logo-raster.png"
              alt="The Invisible Hand of UX Banner"
              className={styles.banner}
            />
          ) : (
            <img
              src="/img/banner-raster.png"
              alt="The Invisible Hand of UX Banner"
              className={styles.banner}
            />
          )}
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <PatternGrid />
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
