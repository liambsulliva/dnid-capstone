import { useState } from "react";
import styles from "./styles.module.css";

export type LossAversionDemoVariant = "neutral" | "loss-framed";

interface LossAversionDemoProps {
  variant: LossAversionDemoVariant;
}

function WindowChrome() {
  return (
    <div className={styles.chrome}>
      <span className={styles.dot} data-color="close" />
      <span className={styles.dot} data-color="minimize" />
      <span className={styles.dot} data-color="maximize" />
    </div>
  );
}

type DialogResult = "saved" | "discarded" | null;

function DialogWindow({
  title,
  subtitle,
  saveBtnLabel,
  discardBtnLabel,
  discardDestructive,
}: {
  title: string;
  subtitle: string;
  saveBtnLabel: string;
  discardBtnLabel: string;
  discardDestructive: boolean;
}) {
  const [result, setResult] = useState<DialogResult>(null);

  const reset = () => setResult(null);

  return (
    <div className={styles.window}>
      <WindowChrome />
      <div className={styles.body}>
        {result ? (
          <div className={styles.resultState} data-result={result}>
            {result === "saved" ? (
              <>
                <svg
                  className={styles.resultIcon}
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="20" cy="20" r="20" fill="currentColor" opacity="0.12" />
                  <path
                    d="M12 20l6 6 10-12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.resultText}>Work saved successfully.</p>
              </>
            ) : (
              <>
                <svg
                  className={styles.resultIcon}
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="20" cy="20" r="20" fill="currentColor" opacity="0.12" />
                  <path
                    d="M14 14l12 12M26 14L14 26"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className={styles.resultText}>Changes were discarded.</p>
              </>
            )}
            <button className={styles.resetBtn} onClick={reset}>
              Reset
            </button>
          </div>
        ) : (
          <>
            <div className={styles.iconArea}>
              <svg
                className={styles.docIcon}
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="8"
                  y="4"
                  width="24"
                  height="32"
                  rx="3"
                  fill="currentColor"
                  opacity="0.1"
                />
                <rect
                  x="8"
                  y="4"
                  width="24"
                  height="32"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.75"
                />
                <path
                  d="M14 14h12M14 20h12M14 26h7"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>

            <div className={styles.actions}>
              <button
                className={styles.saveBtn}
                onClick={() => setResult("saved")}
              >
                {saveBtnLabel}
              </button>
              <button
                className={`${styles.discardBtn} ${discardDestructive ? styles.discardDestructive : ""}`}
                onClick={() => setResult("discarded")}
              >
                {discardBtnLabel}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function LossAversionDemo({ variant }: LossAversionDemoProps) {
  return (
    <div className={styles.scene}>
      {variant === "neutral" ? (
        <DialogWindow
          title="Save changes?"
          subtitle="You have unsaved changes in this document."
          saveBtnLabel="Save"
          discardBtnLabel="Discard"
          discardDestructive={false}
        />
      ) : (
        <DialogWindow
          title="Don't lose your work!"
          subtitle="Your unsaved changes will be permanently lost if you don't save now."
          saveBtnLabel="Save"
          discardBtnLabel="Don't Save"
          discardDestructive={true}
        />
      )}
    </div>
  );
}
