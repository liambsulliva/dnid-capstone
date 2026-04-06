import { useState } from "react";
import { Button } from "../../General/Button";
import { WindowContainer } from "../../General/WindowContainer";
import styles from "./styles.module.css";

export type AutonomyBiasDemoVariant = "no-choice" | "with-choice";

interface AutonomyBiasDemoProps {
  variant: AutonomyBiasDemoVariant;
}

function CheckIcon() {
  return (
    <svg
      className={styles.checkIcon}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.12" />
      <path
        d="M6 10.5l3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NoChoiceVariant() {
  const [done, setDone] = useState(false);

  return (
    <WindowContainer className={styles.window}>
      <div className={styles.body}>
        {done ? (
          <div className={styles.successState}>
            <CheckIcon />
            <p className={styles.successText}>All set. Enjoy the app!</p>
          </div>
        ) : (
          <>
            <div className={styles.iconArea}>
              <svg
                className={styles.heroIcon}
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="currentColor"
                  opacity="0.1"
                />
                <path
                  d="M13 20l5 5 9-10"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className={styles.title}>
              We've selected the best settings for you
            </p>
            <p className={styles.subtitle}>
              Our defaults are optimised for most users. You're all set.
            </p>
            <Button variant="primary" className={styles.primarySpacing} onClick={() => setDone(true)}>
              Continue
            </Button>
          </>
        )}
      </div>
    </WindowContainer>
  );
}

type SetupOption = "simple" | "advanced";

function WithChoiceVariant() {
  const [chosen, setChosen] = useState<SetupOption | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    if (chosen) setConfirmed(true);
  };

  const reset = () => {
    setChosen(null);
    setConfirmed(false);
  };

  return (
    <WindowContainer className={styles.window}>
      <div className={styles.body}>
        {confirmed ? (
          <div className={styles.successState}>
            <CheckIcon />
            <p className={styles.successText}>
              {chosen === "simple"
                ? "Simple Setup selected. You're good to go!"
                : "Gotcha. Let's configure your preferences."}
            </p>
          </div>
        ) : (
          <>
            <p className={styles.title}>Choose your experience</p>
            <p className={styles.subtitle}>
              Pick the setup that works best for you. You can always change this
              later.
            </p>
            <div className={styles.options}>
              <Button
                variant="selectCard"
                pressed={chosen === "simple"}
                onClick={() => setChosen("simple")}
                aria-pressed={chosen === "simple"}
              >
                <span className={styles.optionRadio}>
                  {chosen === "simple" && (
                    <span className={styles.optionRadioDot} />
                  )}
                </span>
                <span className={styles.optionText}>
                  <span className={styles.optionLabel}>
                    Simple Setup
                    <span className={styles.recommendedBadge}>Recommended</span>
                  </span>
                  <span className={styles.optionDesc}>
                    Sensible defaults, ready in seconds.
                  </span>
                </span>
              </Button>

              <Button
                variant="selectCard"
                pressed={chosen === "advanced"}
                onClick={() => setChosen("advanced")}
                aria-pressed={chosen === "advanced"}
              >
                <span className={styles.optionRadio}>
                  {chosen === "advanced" && (
                    <span className={styles.optionRadioDot} />
                  )}
                </span>
                <span className={styles.optionText}>
                  <span className={styles.optionLabel}>Advanced Setup</span>
                  <span className={styles.optionDesc}>
                    Fine-tune every preference yourself.
                  </span>
                </span>
              </Button>
            </div>

            <Button
              variant="primary"
              className={styles.primarySpacing}
              disabled={!chosen}
              onClick={handleConfirm}
            >
              Continue
            </Button>
          </>
        )}
      </div>
    </WindowContainer>
  );
}

export default function AutonomyBiasDemo({ variant }: AutonomyBiasDemoProps) {
  return (
    <div className={styles.scene}>
      {variant === "no-choice" ? <NoChoiceVariant /> : <WithChoiceVariant />}
    </div>
  );
}
