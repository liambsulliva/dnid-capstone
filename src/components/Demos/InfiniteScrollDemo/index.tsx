import { useState, useEffect, useRef, useCallback } from "react";
import { WindowContainer } from "../../General/WindowContainer";
import styles from "./styles.module.css";

type Block =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; attribution: string }
  | { type: "list"; items: string[] };

const CONTENT: Block[] = [
  {
    type: "paragraph",
    text: "You never consented to reading this sentence, the page just kept going. That captures the essence of infinite scrolling.",
  },
  {
    type: "heading",
    level: 2,
    text: "What Is Infinite Scroll?",
  },
  {
    type: "paragraph",
    text: "Infinite scroll is an interaction pattern that loads new content as you reach the bottom of the page. There is no conscious decision to keep going, the page just makes the decision for you.",
  },
  {
    type: "paragraph",
    text: "You've probably seen this pattern used on social media platforms like Facebook and Instagram. Every time you reach the bottom of the page, new posts repopulate the feed.",
  },
  {
    type: "heading",
    level: 2,
    text: "The Mechanism",
  },
  {
    type: "paragraph",
    text: "The staggered streaming of content you are experiencing right now is a meta-demonstration of this mechanism. Rather than loading the whole page at once, each block appears individually once the bottom of the page is reached. Real infinite scrolling feeds often load more content in a single refresh.",
  },
  {
    type: "heading",
    level: 2,
    text: "Why It Works on the Brain",
  },
  {
    type: "paragraph",
    text: "Infinite scrolling is specifically designed to exploit human attention and motivation.",
  },
  {
    type: "list",
    items: [
      "Variable Reward: Mentioned elsewhere in this wiki, infinite scrolling doesn't indicate where the page will end. This creates a sense of anticipation of the next batch of content. It's the same mechanism that makes slot machines compelling. You never know which post or set of posts will give you your next dopamine hit.",
      "Lack of Time Perception: Without any indication of progress, users have no idea how long they've been scrolling. This is why it's so easy to get caught in a loop of doomscrolling.",
      "No Exit Cues: Traditional interfaces with pages make the users question whether they should continue on each new page. Infinite scrolling eliminates the question. You see the new batch of content before you can even decide whether you want to.",
      "Completion Anxiety: The lack of an 'end' means that you're never truly satisfied. You look for an end to the content that never comes. This keeps you scrolling forever.",
    ],
  },
  {
    type: "heading",
    level: 2,
    text: "Raskin's Regret",
  },
  {
    type: "paragraph",
    text: "Aza Raskin, the inventor of infinite scroll, never intended for this pattern to be so addictive.'",
  },
  {
    type: "quote",
    text: "It's as if they took a slot machine and redesigned it so you didn't have to pull the handle. I've spent many sleepless nights wondering whether I've done more harm than good.",
    attribution: "Aza Raskin, credited inventor of infinite scroll",
  },
  {
    type: "paragraph",
    text: "Raskin's regret is instructive. A pattern initially designed for convenience can become a useful tool for manipulation when unchecked. It is a testament to the power of context. A feature that reduces friction in a curated reading experience can become an attention trap when it's used to maximize engagement above all else.",
  },
  {
    type: "heading",
    level: 2,
    text: "Engagement vs. Satisfaction",
  },
  {
    type: "paragraph",
    text: "Research consistently finds a gap between how long users spend on infinite-scroll interfaces and how satisfied they report feeling afterward[1]. As time in the app grows, self-reported wellbeing decreases. Users end up scrolling far more than they intended, and they regret it.",
  },
  {
    type: "paragraph",
    text: "That divergence between time spent and wellbeing is the clearest sign that engagement is not the right metric. A slot machine keeps people engaged. That does not make it an enjoyable experience. It gestures at the conflicting nature of profit margins and user satisfaction. Shareholders want engagement. Users want satisfaction.",
  },
  {
    type: "heading",
    level: 2,
    text: "Ethical Alternatives",
  },
  {
    type: "paragraph",
    text: "Traditionally paginated interfaces may give back a sense of control, but feel relatively rigid and antiquated in an era of instant gratification. A nice middle ground could be 'Session Summaries', where users are given a recap of what they've consumed in the course of the last few minutes. This will let them decide whether they want to continue.",
  },
  {
    type: "paragraph",
    text: "Unfortunately, most platforms have decided to double down on the intensely addictive nature of scrolling, because it's great for keeping users hooked. It maximizes engagement at the cost of user wellbeing. As much as we'd love to see the good in companies, they ultimately have an incentive to keep users on the platform and seeing ads.",
  },
  {
    type: "paragraph",
    text: "An honest version of infinite scroll would tell you how far you've gone. It would give you the option to stop. It would respect the difference between a user who is genuinely engaged and one who feels trapped in their own mind. It's up to us as designers to break the cycle.",
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
      { root: container, threshold: 1.0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <WindowContainer title="infinite-scroll.txt" className={styles.wrapper}>
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
    </WindowContainer>
  );
}
