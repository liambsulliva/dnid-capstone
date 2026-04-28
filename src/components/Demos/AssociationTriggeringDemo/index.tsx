import { useState, type KeyboardEvent } from "react";
import styles from "./styles.module.css";

function ArrowIcon() {
  return (
    <svg
      className={styles.arrowIcon}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
      />
    </svg>
  );
}

export default function AssociationTriggeringDemo() {
  const [value, setValue] = useState("");
  const [shaking, setShaking] = useState(false);

  function triggerShake() {
    setShaking(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShaking(true);
        if (
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          setShaking(false);
        }
      });
    });
  }

  function trySubmit() {
    if (value.length === 0) return;
    triggerShake();
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    e.preventDefault();
    trySubmit();
  }

  return (
    <div className={styles.scene}>
      <div
        className={`${styles.shakeTarget} ${
          shaking ? styles.shakeTargetActive : ""
        }`}
        onAnimationEnd={() => setShaking(false)}
      >
        <div className={styles.fieldWrap}>
          <input
            className={styles.field}
            type="password"
            placeholder="Password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="current-password"
            spellCheck={false}
            aria-label="Password (demo: any entry is declined)"
          />
          <button
            type="button"
            className={styles.submitArrow}
            onClick={trySubmit}
            aria-label="Submit password"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
