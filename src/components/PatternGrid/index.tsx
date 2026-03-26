import type { ComponentType, ReactNode } from "react";
import { useRef, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import {
  HighballingGraphic,
  CentreStageEffectGraphic,
  FramingGraphic,
  PartitioningGraphic,
  SalienceBiasGraphic,
  VisualHierarchyGraphic,
  InfiniteScrollGraphic,
  RedDotEffectGraphic,
  ABTestingGraphic,
  AutonomyBiasGraphic,
  LossAversionGraphic,
  ReachabilityGraphic,
  FeedbackLoopGraphic,
  ConfirmshamingGraphic,
  BreakageGraphic,
  NaggingGraphic,
  ObstructionGraphic,
  ForcedActionGraphic,
  FalseUrgencyGraphic,
  CuratedDefaultsGraphic,
  AvailabilityHeuristicGraphic,
  MereExposureEffectGraphic,
  MoodCongruenceGraphic,
} from "./graphics";

const graphicMap: Record<string, ComponentType> = {
  Highballing: HighballingGraphic,
  "Centre Stage Effect": CentreStageEffectGraphic,
  Framing: FramingGraphic,
  Partitioning: PartitioningGraphic,
  "Salience Bias": SalienceBiasGraphic,
  "Visual Hierarchy": VisualHierarchyGraphic,
  "Infinite Scroll": InfiniteScrollGraphic,
  "Red Dot Effect": RedDotEffectGraphic,
  "A/B Testing": ABTestingGraphic,
  "Autonomy Bias": AutonomyBiasGraphic,
  /*"Loss Aversion": LossAversionGraphic,*/
  Reachability: ReachabilityGraphic,
  /*"Feedback Loop": FeedbackLoopGraphic,*/
  /*Confirmshaming: ConfirmshamingGraphic,*/
  /*Breakage: BreakageGraphic,*/
  Nagging: NaggingGraphic,
  /*Obstruction: ObstructionGraphic,*/
  /*"Forced Action": ForcedActionGraphic,*/
  "False Urgency": FalseUrgencyGraphic,
  /*"Curated Defaults": CuratedDefaultsGraphic,*/
  /*"Availability Heuristic": AvailabilityHeuristicGraphic,*/
  /*"Mere Exposure Effect": MereExposureEffectGraphic,*/
  /*"Mood Congruence": MoodCongruenceGraphic,*/
};

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
  },
  {
    title: "Red Dot Effect",
    category: "Attention",
    path: "/docs/attention/red-dot-effect",
  },
  {
    title: "A/B Testing",
    category: "Behavior",
    path: "/docs/behavior/AB-Testing",
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

function PatternCard({ title, category, path }: PatternCard) {
  const Graphic = graphicMap[title];
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    const isMobile = window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    ).matches;
    if (!isMobile) return;

    const svgEl = cardEl.querySelector("svg");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (svgEl) svgEl.classList.toggle("active", entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(cardEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={clsx("col", "col--3", styles.patternCard)}>
      <Link to={path} className={styles.cardLink}>
        <div ref={cardRef} className={styles.card}>
          <div className={styles.cardPlaceholder}>
            {Graphic ? (
              <Graphic />
            ) : (
              <span className={styles.categoryIcon}>{category.charAt(0)}</span>
            )}
          </div>
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
