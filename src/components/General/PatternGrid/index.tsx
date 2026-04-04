import type { ComponentType, ReactNode, RefObject } from "react";
import { useRef, useEffect, useState, useCallback } from "react";
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
  NaggingGraphic,
  FalseUrgencyGraphic,
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
  "Loss Aversion": LossAversionGraphic,
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

export type PatternCategorySlug =
  | "anchoring"
  | "attention"
  | "behavior"
  | "coercion"
  | "priming";

const CATEGORY_LABEL: Record<PatternCategorySlug, string> = {
  anchoring: "Anchoring",
  attention: "Attention",
  behavior: "Behavior",
  coercion: "Coercion",
  priming: "Priming",
};

const CATEGORY_DESCRIPTION: Record<PatternCategorySlug, string> = {
  anchoring:
    "Elements that present an option as a pivot point for comparison, rather than as a standalone decision.",
  attention:
    "Elements that are engineered to efficiently capture and hold user attention.",
  behavior:
    "Elements that subtly play on human impulse to influence user behavior.",
  coercion:
    "Elements that are built to force users into decisions they may not otherwise make.",
  priming:
    "Elements that leverage context clues to prepare users to make a decision.",
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

function PatternCardItem({ title, category, path }: PatternCard) {
  const Graphic = graphicMap[title];
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    const isMobile = window.matchMedia(
      "(hover: none) and (pointer: coarse)",
    ).matches;
    if (!isMobile) return;

    const svgEl = cardEl.querySelector("svg");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (svgEl) svgEl.classList.toggle("active", entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    observer.observe(cardEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.patternCard}>
      <Link to={path} className={styles.cardLink}>
        <div ref={cardRef} className={clsx(styles.card, "patternGridCard")}>
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

const CAROUSEL_VISIBLE_DESKTOP = 4;
const GAP_PX = 24;

function useCarouselScroll(scrollerRef: RefObject<HTMLDivElement | null>) {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    setCanPrev(scrollLeft > 2);
    setCanNext(scrollLeft < maxScroll - 2);
  }, [scrollerRef]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [scrollerRef, updateScrollState]);

  const scrollStep = useCallback(
    (direction: -1 | 1) => {
      const el = scrollerRef.current;
      if (!el) return;
      const firstItem = el.querySelector<HTMLElement>("[data-carousel-card]");
      const step =
        firstItem != null
          ? firstItem.offsetWidth + GAP_PX
          : el.clientWidth * 0.85;
      el.scrollBy({ left: direction * step, behavior: "smooth" });
    },
    [scrollerRef],
  );

  return { canPrev, canNext, scrollStep, updateScrollState };
}

export type PatternGridProps = {
  category: PatternCategorySlug;
};

export default function PatternGrid({ category }: PatternGridProps): ReactNode {
  const label = CATEGORY_LABEL[category];
  const cards = PatternList.filter(
    (p) => p.category.toLowerCase() === category,
  );
  const useCarousel = cards.length > CAROUSEL_VISIBLE_DESKTOP;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { canPrev, canNext, scrollStep, updateScrollState } =
    useCarouselScroll(scrollerRef);

  useEffect(() => {
    updateScrollState();
  }, [cards.length, updateScrollState]);

  return (
    <section
      className={styles.patternGrid}
      aria-labelledby={`pattern-${category}-title`}
    >
      <div className={styles.patternGridInner}>
        <header className={styles.categoryHeader}>
          <Heading
            as="h2"
            id={`pattern-${category}-title`}
            className={styles.categoryTitle}
          >
            {label}
          </Heading>
          <p className={styles.categoryDescription}>
            {CATEGORY_DESCRIPTION[category]}
          </p>
        </header>

        {useCarousel ? (
          <div className={styles.carouselOuter}>
            <button
              type="button"
              className={clsx(styles.carouselArrow, styles.carouselArrowPrev)}
              onClick={() => scrollStep(-1)}
              disabled={!canPrev}
              aria-label={`Previous ${label} patterns`}
            >
              <span aria-hidden>‹</span>
            </button>
            <div
              ref={scrollerRef}
              className={styles.carouselScroller}
              tabIndex={0}
              role="region"
              aria-roledescription="carousel"
              aria-label={`${label} pattern cards`}
            >
              {cards.map((props, idx) => (
                <div
                  key={`${props.path}-${idx}`}
                  className={styles.carouselItem}
                  data-carousel-card
                >
                  <PatternCardItem {...props} />
                </div>
              ))}
            </div>
            <button
              type="button"
              className={clsx(styles.carouselArrow, styles.carouselArrowNext)}
              onClick={() => scrollStep(1)}
              disabled={!canNext}
              aria-label={`Next ${label} patterns`}
            >
              <span aria-hidden>›</span>
            </button>
          </div>
        ) : (
          <div className={styles.patternRow}>
            {cards.map((props, idx) => (
              <PatternCardItem key={`${props.path}-${idx}`} {...props} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
