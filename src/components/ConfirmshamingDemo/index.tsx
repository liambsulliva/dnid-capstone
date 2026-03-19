import { useState } from "react";
import styles from "./styles.module.css";

type Stage = "initial" | "confirming" | "retained";

interface ConfirmVariant {
  subtitle: string;
  noText: string;
}

const VARIANTS: ConfirmVariant[] = [
  {
    subtitle: "You'll permanently lose access to exclusive deals and member perks.",
    noText: "No, I want to keep my perks",
  },
  {
    subtitle: "Thousands of members save money every month with our newsletter.",
    noText: "No, I don't want to miss out",
  },
  {
    subtitle:
      "We can't guarantee you'll get these benefits back. Are you sure?",
    noText: "No, I changed my mind",
  },
];

export default function ConfirmshamingDemo() {
  const [stage, setStage] = useState<Stage>("initial");
  const [variantIndex, setVariantIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const transition = (fn: () => void) => {
    setAnimating(true);
    setTimeout(() => {
      fn();
      setAnimating(false);
    }, 200);
  };

  const handleYes = () => {
    transition(() => {
      if (stage === "initial") {
        setStage("confirming");
        setVariantIndex(0);
      } else {
        setVariantIndex((prev) => (prev + 1) % VARIANTS.length);
      }
    });
  };

  const handleNo = () => {
    transition(() => {
      setStage("retained");
      setVariantIndex(0);
    });
  };

  const variant = VARIANTS[variantIndex];

  return (
    <div className={styles.scene}>
      <div className={`${styles.modal} ${animating ? styles.fadeOut : styles.fadeIn}`}>
        <div className={styles.header}>
          <span className={styles.headerDot} />
          <span className={styles.headerDot} />
          <span className={styles.headerDot} />
        </div>

        <div className={styles.body}>
          {stage === "retained" ? (
            <p className={styles.title}>Thanks for staying subscribed! 🎉</p>
          ) : stage === "initial" ? (
            <>
              <p className={styles.title}>Would you like to unsubscribe?</p>
              <p className={styles.subtitle}>
                You can manage your email preferences at any time.
              </p>
            </>
          ) : (
            <>
              <p className={styles.title}>Are you sure?</p>
              <p className={styles.subtitle}>{variant.subtitle}</p>
              {/* <p className={styles.variantPill}>Variant {variantIndex + 1} of {VARIANTS.length}</p> */}
            </>
          )}

          {stage !== "retained" && (
            <div className={styles.actions}>
              <button className={styles.btnYes} onClick={handleYes}>
                {stage === "initial" ? "Yes, unsubscribe me" : "Yes, remove me"}
              </button>
              <button className={styles.btnNo} onClick={handleNo}>
                {stage === "initial" ? "No, keep me subscribed" : variant.noText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
