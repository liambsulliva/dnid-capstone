import { useState } from "react";
import styles from "./styles.module.css";

interface NotificationOption {
  id: string;
  label: string;
  description: string;
  defaultOn: boolean;
}

const OPTIONS: NotificationOption[] = [
  {
    id: "likes",
    label: "Likes",
    description: "When someone likes your post",
    defaultOn: true,
  },
  {
    id: "comments",
    label: "Comments",
    description: "When someone comments on your post",
    defaultOn: true,
  },
  {
    id: "followers",
    label: "New Followers",
    description: "When someone follows your account",
    defaultOn: true,
  },
  {
    id: "messages",
    label: "Direct Messages",
    description: "When you receive a new message",
    defaultOn: true,
  },
  {
    id: "mentions",
    label: "Mentions",
    description: "When someone tags you in a post",
    defaultOn: true,
  },
  {
    id: "reposts",
    label: "Reposts",
    description: "When someone reposts your content",
    defaultOn: false,
  },
  {
    id: "digest",
    label: "Weekly Digest",
    description: "A weekly summary of your activity",
    defaultOn: false,
  },
];

const DEFAULT_STATE = Object.fromEntries(
  OPTIONS.map((o) => [o.id, o.defaultOn]),
);

export default function CuratedDefaultsDemo() {
  const [enabled, setEnabled] =
    useState<Record<string, boolean>>(DEFAULT_STATE);
  const [dirty, setDirty] = useState(false);

  const toggle = (id: string) => {
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
    setDirty(true);
  };

  const reset = () => {
    setEnabled(DEFAULT_STATE);
    setDirty(false);
  };

  const onCount = Object.values(enabled).filter(Boolean).length;

  return (
    <div className={styles.scene}>
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <div className={styles.appIcon}>
            <svg viewBox="0 0 24 24" fill="none" className={styles.appIconSvg}>
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="currentColor"
                opacity="0.15"
              />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.panelTitleGroup}>
            <span className={styles.panelTitle}>Notification Settings</span>
            <span className={styles.panelSubtitle}>Pause Social</span>
          </div>
          <span className={styles.countBadge}>
            {onCount} / {OPTIONS.length} on
          </span>
        </div>

        <ul className={styles.list}>
          {OPTIONS.map((opt) => {
            const isOn = enabled[opt.id];
            return (
              <li key={opt.id} className={styles.row}>
                <div className={styles.rowText}>
                  <span className={styles.rowLabel}>
                    {opt.label}
                  </span>
                  <span className={styles.rowDesc}>{opt.description}</span>
                </div>
                <button
                  role="switch"
                  aria-checked={isOn}
                  aria-label={`Toggle ${opt.label} notifications`}
                  className={`${styles.toggle} ${isOn ? styles.toggleOn : ""}`}
                  onClick={() => toggle(opt.id)}
                >
                  <span className={styles.toggleThumb} />
                </button>
              </li>
            );
          })}
        </ul>

        <div className={styles.footer}>
          {dirty ? (
            <button className={styles.resetBtn} onClick={reset}>
              Restore defaults
            </button>
          ) : (
            <span className={styles.footerHint}>
              Showing platform defaults — 5 of 7 enabled
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
