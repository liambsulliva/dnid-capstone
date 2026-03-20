import { useState, useEffect } from "react";
import { Button } from "../Button";
import styles from "./styles.module.css";
// @ts-ignore
import falseUrgency from "@site/docs/coercion/img/false-urgency.png";

const INITIAL_SECONDS = 10 * 60;

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function FalseUrgencyDemo() {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [viewers, setViewers] = useState(7);
  const [expired, setExpired] = useState(false);
  const [purchased, setPurchased] = useState(false);

  useEffect(() => {
    if (expired || purchased) return;
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          setExpired(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [expired, purchased]);

  useEffect(() => {
    if (expired || purchased) return;
    const id = setInterval(() => {
      setViewers((v) =>
        Math.min(12, Math.max(3, v + (Math.random() < 0.5 ? -1 : 1))),
      );
    }, 3000);
    return () => clearInterval(id);
  }, [expired, purchased]);

  const isUrgent = secondsLeft < 120;

  return (
    <div className={styles.scene}>
      <div className={styles.panel}>
        {!expired && !purchased && (
          <div className={styles.urgencyBanner}>
            <span className={styles.fireIcon}>🔥</span>
            <span>
              Limited Time Offer — ends in{" "}
              <span
                className={`${styles.timerInline} ${isUrgent ? styles.timerUrgent : ""}`}
              >
                {formatTime(secondsLeft)}
              </span>
            </span>
          </div>
        )}

        <img
          src={falseUrgency}
          alt="False Urgency"
          className={styles.falseUrgency}
        />

        <div className={styles.productInfo}>
          <p className={styles.productCategory}>Wireless Audio</p>
          <h3 className={styles.productName}>Lumio ANC Pro Headphones</h3>

          <div className={styles.rating}>
            <span className={styles.stars}>★★★★☆</span>
            <span className={styles.ratingCount}>2,841 reviews</span>
          </div>

          {!expired && !purchased ? (
            <>
              <div className={styles.priceRow}>
                <span className={styles.priceSale}>$79.99</span>
                <span className={styles.priceOriginal}>$149.99</span>
                <span className={styles.discountBadge}>47% OFF</span>
              </div>

              <div className={styles.urgencyStack}>
                <div className={styles.urgencyRow}>
                  <span className={styles.dot} />
                  <span className={styles.urgencyText}>
                    <strong>{viewers}</strong>{" "}
                    {viewers === 1 ? "person is" : "people are"} viewing this
                    right now
                  </span>
                </div>
                <div className={styles.urgencyRow}>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  <span className={styles.urgencyText}>
                    <strong>Only 1 left</strong> in stock — order soon!
                  </span>
                </div>
              </div>

              <div
                className={`${styles.countdownBox} ${isUrgent ? styles.countdownUrgent : ""}`}
              >
                <span className={styles.countdownLabel}>Offer expires in</span>
                <span className={styles.countdownTimer}>
                  {formatTime(secondsLeft)}
                </span>
              </div>

              <Button variant="buy" onClick={() => setPurchased(true)}>
                Buy Now — $79.99
              </Button>
              <p className={styles.subtext}>
                Free 2-day shipping · 30-day returns
              </p>
            </>
          ) : purchased ? (
            <div className={styles.endState}>
              <span className={styles.successIcon}>✓</span>
              <p className={styles.endTitle}>Order placed!</p>
              <p className={styles.endSub}>
                You saved $70.00 on this purchase.
              </p>
            </div>
          ) : (
            <div className={styles.endState}>
              <span className={styles.expiredIcon}>⏰</span>
              <p className={styles.endTitle}>This offer has expired.</p>
              <p className={styles.endSub}>
                The limited-time price is no longer available.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
