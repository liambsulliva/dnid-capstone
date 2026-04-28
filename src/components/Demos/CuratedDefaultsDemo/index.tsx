import { useState } from "react";
import { Button } from "../../General/Button";
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
    defaultOn: false,
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
        <div className={styles.panelLeft}>
          <div className={styles.panelHeader}>
            <div className={styles.appIcon}>
              <p className={styles.appIconText}>S</p>
            </div>
            <div className={styles.panelTitleGroup}>
              <span className={styles.panelTitle}>Notification Settings</span>
              <span className={styles.panelSubtitle}>Sullivan Social</span>
            </div>
            <span className={styles.countBadge}>
              {onCount} / {OPTIONS.length} on
            </span>
          </div>
        </div>

        <div className={styles.panelRight}>
          <ul className={styles.list}>
            {OPTIONS.map((opt) => {
              const isOn = enabled[opt.id];
              return (
                <li key={opt.id} className={styles.row}>
                  <div className={styles.rowText}>
                    <span className={styles.rowLabel}>{opt.label}</span>
                    <span className={styles.rowDesc}>{opt.description}</span>
                  </div>
                  <Button
                    variant="toggle"
                    role="switch"
                    aria-checked={isOn}
                    aria-label={`Toggle ${opt.label} notifications`}
                    pressed={isOn}
                    onClick={() => toggle(opt.id)}
                  />
                </li>
              );
            })}
          </ul>

          <div className={styles.footer}>
            {dirty ? (
              <Button onClick={reset}>Restore defaults</Button>
            ) : (
              <span className={styles.footerHint}>
                Showing platform defaults — {onCount} of {OPTIONS.length}{" "}
                enabled
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
