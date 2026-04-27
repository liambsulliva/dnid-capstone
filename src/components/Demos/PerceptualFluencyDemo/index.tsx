import { useState, useEffect } from "react";
import { Button } from "../../General/Button";
import { WindowContainer } from "../../General/WindowContainer";
import styles from "./styles.module.css";

type PayPhase = "idle" | "loading" | "success" | "flash";
type Mode = "instant" | "delayed";

export default function PerceptualFluencyDemo() {
  const [mode, setMode] = useState<Mode>("instant");
  const [payPhase, setPayPhase] = useState<PayPhase>("idle");

  function switchMode(m: Mode) {
    setMode(m);
    setPayPhase("idle");
  }

  useEffect(() => {
    if (payPhase !== "flash") return;
    const id = window.setTimeout(() => setPayPhase("idle"), 83);
    return () => clearTimeout(id);
  }, [payPhase]);

  useEffect(() => {
    if (payPhase !== "loading") return;
    const ms = 1700 + Math.random() * 600;
    const id = window.setTimeout(() => setPayPhase("success"), ms);
    return () => clearTimeout(id);
  }, [payPhase]);

  useEffect(() => {
    if (payPhase !== "success") return;
    const id = window.setTimeout(() => setPayPhase("idle"), 900);
    return () => clearTimeout(id);
  }, [payPhase]);

  function handlePay() {
    if (payPhase !== "idle") return;
    setPayPhase(mode === "instant" ? "flash" : "loading");
  }

  const isProcessing = payPhase === "loading" || payPhase === "success";
  const isFlashing = payPhase === "flash";

  return (
    <div className={styles.scene}>
      <WindowContainer title="checkout.example.com" className={styles.window}>
        <div className={styles.tabBar}>
          <Button
            variant="tab"
            pressed={mode === "instant"}
            onClick={() => switchMode("instant")}
          >
            Instant
          </Button>
          <Button
            variant="tab"
            pressed={mode === "delayed"}
            onClick={() => switchMode("delayed")}
          >
            2-sec delay
          </Button>
        </div>

        <div className={styles.formBody}>
          <div className={styles.summaryColumn}>
            <div className={styles.orderBlock}>
              <div className={styles.orderRow}>
                <div className={styles.orderInfo}>
                  <span className={styles.orderName}>Annual Plan</span>
                  <span className={styles.orderDesc}>
                    uxwiki.liambsullivan.com
                  </span>
                </div>
                <span className={styles.orderAmount}>$49.99</span>
              </div>

              <div className={styles.summaryPreview}>
                <img
                  className={styles.summaryPreviewImg}
                  src="/img/print-logo-raster.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <hr className={styles.divider} />
          </div>

          <div className={styles.fieldsColumn}>
            <div className={styles.fieldBlock}>
              <label className={styles.fieldLabel}>Card information</label>
              <div className={styles.cardGroup}>
                <div className={styles.cardNumberRow}>
                  <input
                    className={`${styles.input} ${styles.cardNumberInput}`}
                    type="text"
                    inputMode="numeric"
                    placeholder="1234 1234 1234 1234"
                    maxLength={19}
                  />
                  <div className={styles.cardBrands}>
                    <span className={styles.cardBrand} data-brand="visa">
                      VISA
                    </span>
                    <span className={styles.cardBrand} data-brand="mc">
                      MC
                    </span>
                  </div>
                </div>
                <div className={styles.cardBottomRow}>
                  <input
                    className={`${styles.input} ${styles.expiryInput}`}
                    type="text"
                    placeholder="MM / YY"
                    maxLength={7}
                  />
                  <input
                    className={`${styles.input} ${styles.cvcInput}`}
                    type="text"
                    placeholder="CVC"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>

            <div className={styles.fieldBlock}>
              <label className={styles.fieldLabel}>Name on card</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Jane Doe"
              />
            </div>

            <button
              className={styles.payButton}
              disabled={isProcessing || isFlashing}
              onClick={handlePay}
              aria-busy={isProcessing}
              aria-label={
                isProcessing
                  ? payPhase === "loading"
                    ? "Processing payment"
                    : "Payment complete"
                  : undefined
              }
            >
              {isFlashing ? (
                "Loading..."
              ) : !isProcessing ? (
                "Pay $49.99"
              ) : (
                <span className={styles.glyphPad} aria-hidden>
                  <span className={styles.glyphStack}>
                    <span
                      className={`${styles.spinnerShell} ${payPhase === "success" ? styles.spinnerMorphOut : ""}`}
                    >
                      <svg
                        className={styles.spinnerSvg}
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
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
                      className={`${styles.checkShell} ${payPhase === "success" ? styles.checkMorphIn : ""}`}
                    >
                      <svg
                        className={styles.checkSvg}
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
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
            </button>

            <p className={styles.secureNote}>
              This will not actually charge your card.
            </p>
          </div>
        </div>
      </WindowContainer>
    </div>
  );
}
