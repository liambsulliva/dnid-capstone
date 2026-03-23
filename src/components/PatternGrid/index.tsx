import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type PatternCard = {
  title: string;
  category: string;
  path: string;
  image?: string;
  description?: string;
};

const PatternList: PatternCard[] = [
  {
    title: "Highballing",
    category: "Anchoring",
    path: "/docs/anchoring/highballing",
  },
  {
    title: "Centre Stage Effect",
    category: "Anchoring",
    path: "/docs/anchoring/centre-stage-effect",
  },
  {
    title: "Framing",
    category: "Anchoring",
    path: "/docs/anchoring/framing",
  },
  {
    title: "Partitioning",
    category: "Anchoring",
    path: "/docs/anchoring/partitioning",
    image: require("@site/docs/anchoring/img/servingsize.jpeg").default,
  },
  {
    title: "Salience Bias",
    category: "Attention",
    path: "/docs/attention/salience-bias",
  },
  {
    title: "Visual Hierarchy",
    category: "Attention",
    path: "/docs/attention/visual-hierarchy",
  },
  {
    title: "Infinite Scroll",
    category: "Attention",
    path: "/docs/attention/infinite-scroll",
    image: require("@site/docs/attention/img/infinite-scroll.png").default,
  },
  {
    title: "Red Dot Effect",
    category: "Attention",
    path: "/docs/attention/red-dot-effect",
    image: require("@site/docs/attention/img/red-dot.jpg").default,
  },
  {
    title: "A/B Testing",
    category: "Behavior",
    path: "/docs/behavior/AB-Testing",
    image: require("@site/docs/behavior/img/ab-testing.webp").default,
  },
  {
    title: "Autonomy Bias",
    category: "Behavior",
    path: "/docs/behavior/autonomy-bias",
  },
  {
    title: "Loss Aversion",
    category: "Behavior",
    path: "/docs/behavior/loss-aversion",
  },
  {
    title: "Reachability",
    category: "Behavior",
    path: "/docs/behavior/reachability",
    image: require("@site/docs/behavior/img/reachability.png").default,
  },
  {
    title: "Feedback Loop",
    category: "Behavior",
    path: "/docs/behavior/feedback-loop",
  },
  {
    title: "Confirmshaming",
    category: "Coercion",
    path: "/docs/coercion/confirmshaming",
  },
  {
    title: "Breakage",
    category: "Coercion",
    path: "/docs/coercion/breakage",
    image: require("@site/docs/coercion/img/breakage.png").default,
  },
  {
    title: "Nagging",
    category: "Coercion",
    path: "/docs/coercion/nagging",
  },
  {
    title: "Obstruction",
    category: "Coercion",
    path: "/docs/coercion/obstruction",
  },
  {
    title: "Forced Action",
    category: "Coercion",
    path: "/docs/coercion/forced-action",
  },
  {
    title: "False Urgency",
    category: "Coercion",
    path: "/docs/coercion/false-urgency",
  },
  {
    title: "Curated Defaults",
    category: "Priming",
    path: "/docs/priming/curated-defaults",
  },
  {
    title: "Availability Heuristic",
    category: "Priming",
    path: "/docs/priming/availability-heuristic",
  },
  {
    title: "Mere Exposure Effect",
    category: "Priming",
    path: "/docs/priming/mere-exposure-effect",
  },
  {
    title: "Mood Congruence",
    category: "Priming",
    path: "/docs/priming/mood-congruence",
  },
];

function PatternCard({ title, category, path, image }: PatternCard) {
  return (
    <div className={clsx("col", "col--3", styles.patternCard)}>
      <Link to={path} className={styles.cardLink}>
        <div className={styles.card}>
          {image ? (
            <div className={styles.cardImage}>
              <img src={image} alt={title} />
            </div>
          ) : (
            <div className={styles.cardPlaceholder}>
              <span className={styles.categoryIcon}>{category.charAt(0)}</span>
            </div>
          )}
          <div className={styles.cardContent}>
            <span className={styles.cardCategory}>{category}</span>
            <Heading as="h3" className={styles.cardTitle}>
              {title}
            </Heading>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function PatternGrid(): ReactNode {
  return (
    <section className={styles.patternGrid}>
      <div className="container">
        <div className="row">
          {PatternList.map((props, idx) => (
            <PatternCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
