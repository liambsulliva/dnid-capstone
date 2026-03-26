import { useState } from "react";
import { Button } from "../Button";
import { WindowChrome } from "../WindowChrome";
import styles from "./styles.module.css";

type Layer = "snippet" | "modal" | "full";

const REVIEW = {
  author: "Sarah M.",
  rating: 5,
  preview: "I absolutely loved this product…",
  expanded:
    "I absolutely loved this product. At first I was skeptical, but after just one week I noticed a huge difference. The quality exceeded my expectations and…",
  full: "I absolutely loved this product. At first I was skeptical, but after just one week I noticed a huge difference. The quality exceeded my expectations and the customer service team was incredibly responsive when I had a question about sizing. I've already recommended it to three of my friends and they've all had the same experience. Easily the best purchase I've made this year. I can't imagine going back to anything else.",
};

function Stars({ count }: { count: number }) {
  return (
    <span className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < count ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function ObstructionDemo() {
  const [layer, setLayer] = useState<Layer>("snippet");
  const [animating, setAnimating] = useState(false);

  const advance = (next: Layer) => {
    setAnimating(true);
    setTimeout(() => {
      setLayer(next);
      setAnimating(false);
    }, 180);
  };

  const reset = () => advance("snippet");

  return (
    <div className={styles.scene}>
      {layer === "snippet" && (
        <div
          className={`${styles.snippetCard} ${animating ? styles.fadeOut : styles.fadeIn}`}
        >
          <div className={styles.snippetMeta}>
            <Stars count={REVIEW.rating} />
            <span className={styles.author}>{REVIEW.author}</span>
          </div>
          <p className={styles.snippetText}>{REVIEW.preview}</p>
          <Button variant="snippetLink" onClick={() => advance("modal")}>
            See full review
          </Button>
        </div>
      )}

      {layer === "modal" && (
        <div
          className={`${styles.modal} ${animating ? styles.fadeOut : styles.fadeIn}`}
        >
          <WindowChrome title="Customer Review" />
          <div className={styles.modalBody}>
            <div className={styles.modalMeta}>
              <Stars count={REVIEW.rating} />
              <span className={styles.author}>{REVIEW.author}</span>
            </div>
            <p className={styles.modalText}>{REVIEW.expanded}</p>
            <div className={styles.readMoreRow}>
              <Button
                variant="readMoreOutline"
                onClick={() => advance("full")}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      )}

      {layer === "full" && (
        <div
          className={`${styles.modal} ${animating ? styles.fadeOut : styles.fadeIn}`}
        >
          <WindowChrome title="Customer Review" />
          <div className={styles.modalBody}>
            <div className={styles.modalMeta}>
              <Stars count={REVIEW.rating} />
              <span className={styles.author}>{REVIEW.author}</span>
            </div>
            <p className={styles.fullText}>{REVIEW.full}</p>
            {/*<div className={styles.layerBadge}>
              Full review unlocked after 3 clicks
            </div>*/}
            <Button
              variant="resetOutline"
              className={styles.resetAlignStart}
              onClick={reset}
            >
              Start over
            </Button>
          </div>
        </div>
      )}

      <div className={styles.steps}>
        {(["snippet", "modal", "full"] as Layer[]).map((l, i) => (
          <div
            key={l}
            className={`${styles.step} ${layer === l ? styles.stepActive : ""} ${
              (layer === "modal" && i === 0) || (layer === "full" && i < 2)
                ? styles.stepDone
                : ""
            }`}
          >
            <span className={styles.stepNum}>{i + 1}</span>
            <span className={styles.stepLabel}>
              {l === "snippet"
                ? "Snippet"
                : l === "modal"
                  ? "Modal"
                  : "Full Text"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
