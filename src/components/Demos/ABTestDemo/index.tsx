import { useId, useState } from "react";
import { Button } from "../../General/Button";
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
        <div className={styles.toggleTrack}>
          <span
            className={
              variant === "B" ? styles.toggleSliderB : styles.toggleSlider
            }
            aria-hidden
          />
          <Button
            variant="tab"
            className={styles.toggleTab}
            pressed={variant === "A"}
            onClick={() => setVariant("A")}
            aria-pressed={variant === "A"}
          >
            A: Dense copy
          </Button>
          <Button
            variant="tab"
            className={styles.toggleTab}
            pressed={variant === "B"}
            onClick={() => setVariant("B")}
            aria-pressed={variant === "B"}
          >
            B: Scannable layout
          </Button>
        </div>
      </div>

      <p className={styles.metaNote} aria-live="polite">
        Showing variant <strong>{variant}</strong>. Keep in mind - the
        information is the same. All that's changed is layout and emphasis.
      </p>

      <div className={styles.article} aria-live="polite">
        {variant === "A" ? <ArticleDense /> : <ArticleScannable />}
      </div>

      <section className={styles.poll} aria-labelledby={pollId}>
        <h3 className={styles.pollHeading} id={pollId}>
          Which version fits this article best?
        </h3>
        <p className={styles.pollHint}>
          There is no wrong answer. It's all up to preference.
        </p>
        <div className={styles.pollChoices}>
          <Button
            pressed={preference === "A"}
            onClick={() => setPreference("A")}
          >
            Prefer A (dense)
          </Button>
          <Button
            pressed={preference === "B"}
            onClick={() => setPreference("B")}
          >
            Prefer B (scannable)
          </Button>
        </div>
        {preference !== null && (
          <p className={styles.pollThanks} role="status">
            You picked variant {preference}!
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
        When the same article is shown as full uninterrupted paragraphs, readers
        often report that it feels thorough or authoritative even before they're
        even done reading. This is helpful to communicate professionalism, but
        it also makes it harder to quickly scan for specific pieces of
        information unless they're highlighted in some way.
      </p>
      <p>
        Usually if a piece is that authoritative, it's because it's a news
        article or some other type of piece that is trying to prove its worth.
        Other characteristics like dense line heights and smaller subheads play
        into this effect.
      </p>
      <p>
        In practice, A/B testing this kind of layout means serving two different
        versions of the same page to randomly assigned users, then comparing how
        they react to the content. This could be time on the page, how far they
        scroll, or how much they share it around. Whichever version wins will
        eventually be rolled out to all users.
      </p>
    </div>
  );
}

function ArticleScannable() {
  return (
    <div className={styles.scannable}>
      <header className={styles.scanHeader}>
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
            <strong>Dense prose</strong> can feel more authoritative right away,
            but it asks readers to work harder to look for specific pieces of
            information.
          </span>
        </li>
        <li>
          <span className={styles.scanIcon} aria-hidden="true">
            -
          </span>
          <span>
            <strong>Metrics</strong> are often different between dense and
            scannable layouts, even when the writing is fundamentally unchanged.
          </span>
        </li>
        <li>
          <span className={styles.scanIcon} aria-hidden="true">
            -
          </span>
          <span>
            <strong>A/B tests</strong> randomize who sees each version and
            compares how they react to the content.
          </span>
        </li>
      </ul>
    </div>
  );
}
