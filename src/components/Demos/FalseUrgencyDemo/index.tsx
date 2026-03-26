import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "../../General/Button";
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

type BuyPhase = "idle" | "loading" | "success";

const CROSSFADE_MS = 560;
const HEIGHT_EASE = "cubic-bezier(0.22, 1, 0.34, 1)";

export default function FalseUrgencyDemo() {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [viewers, setViewers] = useState(7);
  const [expired, setExpired] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [buyPhase, setBuyPhase] = useState<BuyPhase>("idle");
  const [fadingToComplete, setFadingToComplete] = useState(false);
  const crossfadeRef = useRef<HTMLDivElement>(null);
  const crossfadeWrapRef = useRef<HTMLDivElement>(null);
  const shopPaneRef = useRef<HTMLDivElement>(null);
  const endPaneRef = useRef<HTMLDivElement>(null);

  const timersIdle =
    !expired &&
    !purchased &&
    !fadingToComplete &&
    buyPhase !== "loading" &&
    buyPhase !== "success";

  useEffect(() => {
    if (buyPhase !== "loading") return;
    const ms = 1000 + Math.random() * 1000;
    const id = window.setTimeout(() => setBuyPhase("success"), ms);
    return () => clearTimeout(id);
  }, [buyPhase]);

  useEffect(() => {
    if (buyPhase !== "success") return;
    const id = window.setTimeout(() => setFadingToComplete(true), 680);
    return () => clearTimeout(id);
  }, [buyPhase]);

  useLayoutEffect(() => {
    if (!fadingToComplete) return;
    const wrap = crossfadeWrapRef.current;
    const shopEl = shopPaneRef.current;
    const endEl = endPaneRef.current;
    if (!wrap || !shopEl || !endEl) return;

    const startH = shopEl.offsetHeight;
    const endH = endEl.offsetHeight;

    wrap.style.transition = "none";
    wrap.style.height = `${startH}px`;
    void wrap.offsetHeight;

    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        wrap.style.transition = `height ${CROSSFADE_MS}ms ${HEIGHT_EASE}`;
        wrap.style.height = `${endH}px`;
        crossfadeRef.current?.classList.add(styles.outcomeCrossfadeActive);
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [fadingToComplete]);

  useEffect(() => {
    if (!fadingToComplete) return;
    const done = window.setTimeout(() => {
      setPurchased(true);
      setFadingToComplete(false);
      setBuyPhase("idle");
    }, CROSSFADE_MS + 45);
    return () => clearTimeout(done);
  }, [fadingToComplete]);

  useEffect(() => {
    if (expired || !timersIdle) return;
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
  }, [expired, timersIdle]);

  useEffect(() => {
    if (expired || !timersIdle) return;
    const id = setInterval(() => {
      setViewers((v) =>
        Math.min(12, Math.max(3, v + (Math.random() < 0.5 ? -1 : 1))),
      );
    }, 3000);
    return () => clearInterval(id);
  }, [expired, timersIdle]);

  const isUrgent = secondsLeft < 120;
  const showUrgencyBanner =
    !expired && !purchased && !fadingToComplete && buyPhase !== "success";

  const successEndBody = (
    <div className={styles.endState}>
      <p className={styles.endTitle}>Order placed!</p>
      <p className={styles.endSub}>You saved $70.00 on this purchase.</p>
    </div>
  );

  const shopBody = (
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
            {viewers === 1 ? "person is" : "people are"} viewing this right now
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
        <span className={styles.countdownTimer}>{formatTime(secondsLeft)}</span>
      </div>

      <Button
        variant="buy"
        className={styles.buyWithGlyph}
        disabled={buyPhase !== "idle"}
        onClick={() => setBuyPhase("loading")}
        aria-busy={buyPhase === "loading"}
        aria-label={
          buyPhase === "idle"
            ? undefined
            : buyPhase === "loading"
              ? "Processing purchase"
              : "Purchase complete"
        }
      >
        {buyPhase === "idle" ? (
          "Buy Now — $79.99"
        ) : (
          <span className={styles.buyGlyphPad} aria-hidden>
            <span className={styles.buyGlyphStack}>
              <span
                className={`${styles.spinnerShell} ${buyPhase === "success" ? styles.spinnerMorphOut : ""}`}
              >
                <svg
                  className={styles.spinnerSvg}
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                >
                  <circle
                    className={styles.spinnerArc}
                    cx="12"
                    cy="12"
                    r="9.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span
                className={`${styles.checkShell} ${buyPhase === "success" ? styles.checkMorphIn : ""}`}
              >
                <svg
                  className={styles.checkSvg}
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                >
                  <path
                    className={styles.checkPath}
                    d="M6 12.5 L10.2 17 L18 7.5"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </span>
        )}
      </Button>
      <p className={styles.subtext}>Free 2-day shipping · 30-day returns</p>
    </>
  );

  return (
    <div className={styles.scene}>
      <div className={styles.panel}>
        {showUrgencyBanner && (
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

          {!expired && !purchased && !fadingToComplete ? (
            shopBody
          ) : !expired && fadingToComplete ? (
            <div ref={crossfadeWrapRef} className={styles.outcomeCrossfadeWrap}>
              <div ref={crossfadeRef} className={styles.outcomeCrossfade}>
                <div ref={shopPaneRef} className={styles.outcomePaneShop}>
                  {shopBody}
                </div>
                <div ref={endPaneRef} className={styles.outcomePaneEnd}>
                  {successEndBody}
                </div>
              </div>
            </div>
          ) : purchased ? (
            successEndBody
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
