import { useId, useState } from "react";
import styles from "./styles.module.css";

type Variant = "A" | "B";
type Preference = "A" | "B" | "tie" | null;

export default function ABTestDemo() {
  const [variant, setVariant] = useState<Variant>("A");
  const [preference, setPreference] = useState<Preference>(null);
  const pollId = useId();

  return (
    <div className={styles.root}>
      <div
        className={styles.toggleBar}
        role="group"
        aria-label="Switch article presentation"
      >
        <button
          type="button"
          className={`${styles.toggleBtn} ${variant === "A" ? styles.toggleBtnActive : ""}`}
          onClick={() => setVariant("A")}
          aria-pressed={variant === "A"}
        >
          A: Dense copy
        </button>
        <button
          type="button"
          className={`${styles.toggleBtn} ${variant === "B" ? styles.toggleBtnActive : ""}`}
          onClick={() => setVariant("B")}
          aria-pressed={variant === "B"}
        >
          B: Scannable layout
        </button>
      </div>

      <p className={styles.metaNote} aria-live="polite">
        Showing variant <strong>{variant}</strong>: the facts are identical;
        only layout and emphasis change. Sort of like two cells in a real A/B
        test.
      </p>

      <div className={styles.article} aria-live="polite">
        {variant === "A" ? <ArticleDense /> : <ArticleScannable />}
      </div>

      <section className={styles.poll} aria-labelledby={pollId}>
        <h3 className={styles.pollHeading} id={pollId}>
          Which presentation fits this article best?
        </h3>
        <p className={styles.pollHint}>
          There is no wrong answer. This mirrors how teams collect qualitative
          signal alongside metrics.
        </p>
        <div className={styles.pollChoices}>
          <button
            type="button"
            className={`${styles.pollBtn} ${preference === "A" ? styles.pollBtnSelected : ""}`}
            onClick={() => setPreference("A")}
          >
            Prefer A (dense)
          </button>
          <button
            type="button"
            className={`${styles.pollBtn} ${preference === "B" ? styles.pollBtnSelected : ""}`}
            onClick={() => setPreference("B")}
          >
            Prefer B (scannable)
          </button>
          <button
            type="button"
            className={`${styles.pollBtn} ${preference === "tie" ? styles.pollBtnSelected : ""}`}
            onClick={() => setPreference("tie")}
          >
            No strong preference
          </button>
        </div>
        {preference !== null && (
          <p className={styles.pollThanks} role="status">
            {preference === "tie"
              ? "Recorded: you’re neutral on layout—which is useful data too."
              : `Recorded: you leaned toward variant ${preference}. In a live test, this would join click or dwell metrics to inform the winner.`}
          </p>
        )}
      </section>
    </div>
  );
}

function ArticleDense() {
  return (
    <div className={styles.dense}>
      <h2 className={styles.denseTitle}>
        How layout shapes what readers take away
      </h2>
      <p>
        When the same article is set as uninterrupted paragraphs with only an
        occasional heading, readers often report that it feels thorough or
        authoritative even before they finish. The tradeoff is higher cognitive
        load: people who are scanning for one fact may leave without finding it,
        which shows up in metrics like bounce rate or time-to-first-scroll in
        A/B tests.
      </p>
      <p>
        Product teams sometimes pair that dense style with subtle typographic
        choices, tighter line height, smaller subheads and measure whether
        completion rate or perceived trust moves. The hypothesis is usually that
        “serious” presentation nudges people to treat the piece as definitive,
        not that the words themselves changed at all.
      </p>
      <p>
        In practice, A/B testing this kind of layout means serving two templates
        to randomly assigned visitors, then comparing outcomes: time on page,
        scroll depth, shares, or downstream conversions. Feature flags make it
        possible to roll the winning template out gradually instead of flipping
        the whole site at once.
      </p>
    </div>
  );
}

function ArticleScannable() {
  return (
    <div className={styles.scannable}>
      <header className={styles.scanHeader}>
        <span className={styles.scanKicker} aria-hidden="true">
          📋
        </span>
        <h2 className={styles.scanTitle}>
          How layout shapes what readers take away
        </h2>
      </header>

      <ul className={styles.scanList}>
        <li>
          <span className={styles.scanIcon} aria-hidden="true">
            -
          </span>
          <span>
            <strong>Dense prose</strong> can feel more authoritative upfront,
            but it asks readers to work harder to find a single takeaway.
          </span>
        </li>
        <li>
          <span className={styles.scanIcon} aria-hidden="true">
            -
          </span>
          <span>
            <strong>Metrics</strong> such as bounce rate, time-to-first-scroll,
            or completion rate often diverge between “wall of text” and
            structured layouts—even when the copy is unchanged.
          </span>
        </li>
        <li>
          <span className={styles.scanIcon} aria-hidden="true">
            -
          </span>
          <span>
            <strong>A/B tests</strong> randomize who sees each template, then
            compare behavior; feature flags let teams ship the winner in stages.
          </span>
        </li>
      </ul>
    </div>
  );
}
