import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./styles.module.css";

interface NagVariant {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  dismiss: string;
}

const VARIANTS: NagVariant[] = [
  {
    eyebrow: "👋 Still reading?",
    title: "Subscribe to our newsletter",
    body: "Get the latest design insights delivered straight to your inbox. Join 12,000+ designers who never miss an issue.",
    cta: "Yes, sign me up",
    dismiss: "No thanks",
  },
  {
    eyebrow: "🔔 Friendly reminder",
    title: "You haven't subscribed yet",
    body: "We can tell you've been exploring our content 😊 Don't let these articles disappear from your feed! Subscribe for free updates.",
    cta: "Subscribe now",
    dismiss: "Maybe later",
  },
  {
    eyebrow: "⏳ Just checking in",
    title: "Are you enjoying this article?",
    body: "Readers who subscribe spend 3× more time on our best content. We think you'd love what we send.",
    cta: "Get the newsletter",
    dismiss: "I'm fine, thanks",
  },
  {
    eyebrow: "💡 One last thing",
    title: "Don't miss our next piece",
    body: "This article is part of an ongoing series. Subscribe so you're the first to know when the next one drops.",
    cta: "Keep me posted",
    dismiss: "I'll find it myself",
  },
];

const MIN_DELAY_MS = 10_000;
const MAX_DELAY_MS = 20_000;

function randomDelay() {
  return MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS);
}

export default function NaggingModal() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [variantIndex, setVariantIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleNext = useCallback((nextVariant: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setVariantIndex(nextVariant % VARIANTS.length);
      setVisible(true);
    }, randomDelay());
  }, []);

  useEffect(() => {
    scheduleNext(0);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scheduleNext]);

  const dismiss = () => {
    setExiting(true);
    setTimeout(() => {
      setExiting(false);
      setVisible(false);
      scheduleNext(variantIndex + 1);
    }, 280);
  };

  const variant = VARIANTS[variantIndex];

  if (!visible) return null;

  return (
    <div
      className={`${styles.backdrop} ${exiting ? styles.backdropOut : styles.backdropIn}`}
      onClick={dismiss}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`${styles.modal} ${exiting ? styles.modalOut : styles.modalIn}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <span className={styles.eyebrow}>{variant.eyebrow}</span>
          <button
            className={styles.closeBtn}
            onClick={dismiss}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className={styles.body}>
          <p className={styles.title}>{variant.title}</p>
          <p className={styles.bodyText}>{variant.body}</p>
        </div>

        <div className={styles.footer}>
          <button className={styles.ctaBtn} onClick={dismiss}>
            {variant.cta}
          </button>
          <button className={styles.dismissBtn} onClick={dismiss}>
            {variant.dismiss}
          </button>
        </div>

        {/*<p className={styles.counter}>
          Prompt {variantIndex + 1} of {VARIANTS.length} — returns every 10–20 secs
        </p>*/}
      </div>
    </div>
  );
}
