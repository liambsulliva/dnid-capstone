import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./styles.module.css";

type Block =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; attribution: string }
  | { type: "list"; items: string[] };

const CONTENT: Block[] = [
  {
    type: "paragraph",
    text: "You are reading this sentence because there was no button asking you whether you wanted to. The page simply continued, and so did you. That is the essence of infinite scroll.",
  },
  {
    type: "heading",
    level: 2,
    text: "What Is Infinite Scroll?",
  },
  {
    type: "paragraph",
    text: "Infinite scroll is an interaction pattern that loads new content automatically as the user gets closer to the bottom of the page. There is no next page. There is no end. The feed simply continues forever.",
  },
  {
    type: "paragraph",
    text: 'The pattern was popularized by social media platforms in the late 2000s (i.e. Facebook) and quickly became the go-to model for content feeds. Every time a user has to click "Next Page", they have a moment to decide whether they actually want to keep going. Infinite scroll eliminates that moment, eliminating the conscious decision to continue.',
  },
  {
    type: "heading",
    level: 2,
    text: "The Mechanism",
  },
  {
    type: "paragraph",
    text: "The staggered streaming you are experiencing right now is a meta-demonstration of this mechanism. Rather than popping in the whole page of content at once, each block appears individually with a short delay. It acts as a live feed, with content arriving one item at a time, making the experience feel dynamic and alive.",
  },
  {
    type: "heading",
    level: 2,
    text: "Why It Works on the Brain",
  },
  {
    type: "paragraph",
    text: "Infinite scroll is engineered to exploit several well-documented properties of human attention and motivation.",
  },
  {
    type: "list",
    items: [
      "Variable Reward Schedules: Content quality is unpredictable. Users keep scrolling in anticipation of the next rewarding item. This is the same mechanism that makes slot machines compelling. There is no natural end point.",
      "Lost Time Perception: Without any indicators of progress, users have no reliable sense of how long they have been browsing. This is why it is so easy to get lost doomscrolling on social media platforms.",
      'Lack of Natural Exit Cues: Traditionally paginated interfaces prompt "should I continue?" at each new page. Infinite scroll eliminates the question.',
      "Completion Anxiety: The absence of an end makes users never truly satisfied. They are always hungry for more because there is no natural stopping point.",
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "The Designer's Regret",
  },
  {
    type: "quote",
    text: "It's as if they took a slot machine and redesigned it so you didn't have to pull the handle. I've spent many sleepless nights wondering whether I've done more harm than good.",
    attribution: "Aza Raskin, credited inventor of infinite scroll",
  },
  {
    type: "paragraph",
    text: "Raskin's regret should serve as a warning. A pattern initially designed to be convenient became a useful tool for manipulation. It is a testament to the power of context and scale. A feature that reduces friction in a curated reading experience can become an attention trap inside an algorithmically-optimized feed engineered to maximize engagement above all else.",
  },
  {
    type: "heading",
    level: 2,
    text: "Engagement vs. Satisfaction",
  },
  {
    type: "paragraph",
    text: "Research consistently finds a gap between how long users spend on infinite-scroll interfaces and how satisfied they report feeling afterward. Time-on-site increases. Self-reported wellbeing decreases. Users scroll more than they intended and feel worse for it.",
  },
  {
    type: "paragraph",
    text: 'That divergence between time spent and wellbeing is the clearest sign that engagement is not the right metric. A slot machine keeps people engaged. That does not make it a good product. The question designers should ask is not "how long did users spend here?" but "did they get what they came for?"',
  },
  {
    type: "heading",
    level: 2,
    text: "Ethical Alternatives",
  },
  {
    type: "paragraph",
    text: "Pagination indicators alongside infinite scroll could give users back a sense of control. Pagination with visible progress indicators restore the user's sense of position and gives them natural moments to stop. Session summaries would give users an idea of how much time they have spent scrolling.",
  },
  {
    type: "paragraph",
    text: "Unfortunately, most platforms have decided to double down on the addictive nature of infinitely scrolling. If you are a company with an incentive to keep users engaged and seeing ads, it makes more business sense to keep them on the platform as long as possible.",
  },
  {
    type: "paragraph",
    text: "An honest version of infinite scroll would tell you how far you've gone. It would give you the option to stop. It would respect the difference between a user who is genuinely engaged and one who feels trapped and unable to leave.",
  },
];

const INITIAL_COUNT = 3;
const BATCH_SIZE = 2;
const STREAM_INTERVAL_MS = 180;

export default function InfiniteScrollDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [revealedUpTo, setRevealedUpTo] = useState(0);
  const [loading, setLoading] = useState(false);
  const [streamingIndices, setStreamingIndices] = useState<Set<number>>(
    () => new Set(),
  );

  const sentinelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isComplete = revealedUpTo >= CONTENT.length;

  const streamInBatch = useCallback((startIdx: number, count: number) => {
    const end = Math.min(startIdx + count, CONTENT.length);
    for (let i = startIdx; i < end; i++) {
      const idx = i;
      setTimeout(
        () => {
          setVisibleCount((prev) => Math.max(prev, idx + 1));
          setStreamingIndices((prev) => new Set(prev).add(idx));
          setTimeout(() => {
            setStreamingIndices((prev) => {
              const next = new Set(prev);
              next.delete(idx);
              return next;
            });
          }, 700);
        },
        (idx - startIdx) * STREAM_INTERVAL_MS,
      );
    }
    setRevealedUpTo(end);
  }, []);

  useEffect(() => {
    streamInBatch(0, INITIAL_COUNT);
  }, [streamInBatch]);

  const loadMore = useCallback(() => {
    if (loading || isComplete) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      streamInBatch(revealedUpTo, BATCH_SIZE);
    }, 500);
  }, [loading, isComplete, revealedUpTo, streamInBatch]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const container = containerRef.current;
    if (!sentinel || !container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { root: container, threshold: 0.1 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div className={styles.scrollBox}>
      <div className={styles.scrollLabel}>
        <span className={styles.labelDot} />
        Scroll to read
      </div>
      <div className={styles.content} ref={containerRef}>
        {CONTENT.slice(0, visibleCount).map((block, idx) => (
          <div
            key={idx}
            className={`${styles.block} ${
              streamingIndices.has(idx)
                ? styles.blockEntering
                : styles.blockVisible
            }`}
          >
            {block.type === "heading" && block.level === 2 && (
              <h2 className={styles.heading2}>{block.text}</h2>
            )}
            {block.type === "heading" && block.level === 3 && (
              <h3 className={styles.heading3}>{block.text}</h3>
            )}
            {block.type === "paragraph" && (
              <p className={styles.para}>{block.text}</p>
            )}
            {block.type === "quote" && (
              <blockquote className={styles.quote}>
                <p>"{block.text}"</p>
                <footer>- {block.attribution}</footer>
              </blockquote>
            )}
            {block.type === "list" && (
              <ul className={styles.list}>
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div ref={sentinelRef} className={styles.sentinel}>
          {loading && (
            <div className={styles.loader}>
              <span />
              <span />
              <span />
            </div>
          )}
          {isComplete && (
            <p className={styles.endNote}>
              This demo ends here. Most feeds do not.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
