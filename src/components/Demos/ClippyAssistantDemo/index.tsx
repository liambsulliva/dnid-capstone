import { useCallback, useId, useState } from "react";
import { Button } from "../../General/Button";
import { WindowContainer } from "../../General/WindowContainer";
import styles from "./styles.module.css";

export type ClippyAssistantDemoProps = {
  characterImageSrc?: string;
};

type Popup = {
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
};

const POPUPS: Popup[] = [
  {
    body: "It looks like you're reading about nagging. Want tips on how to bug users well?",
    primaryLabel: "Sure",
    secondaryLabel: "No thanks",
  },
  {
    body: "Still here? I can summarize this section with AI! Powered by Microsoft Copilot 😎",
    primaryLabel: "Sounds good",
    secondaryLabel: "I'm fine",
  },
  {
    body: "Friendly reminder: you can always do more with Microsoft Office than you'd expect.",
    primaryLabel: "Tell me more",
    secondaryLabel: "Dismiss",
  },
];

const DEFAULT_CHARACTER_SRC = "/img/clippy.png";

export default function ClippyAssistantDemo({
  characterImageSrc = DEFAULT_CHARACTER_SRC,
}: ClippyAssistantDemoProps) {
  const titleId = useId();
  const [index, setIndex] = useState(0);
  const [imageBroken, setImageBroken] = useState(false);

  const popup = POPUPS[index];

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % POPUPS.length);
  }, []);

  return (
    <div className={styles.scene}>
      <WindowContainer title="Office Assistant" className={styles.window}>
        <div className={styles.content}>
          <div className={styles.stage}>
            <div className={styles.figure} aria-hidden="true">
              <img
                className={styles.character}
                src={characterImageSrc}
                alt=""
                width={120}
                height={160}
                onError={() => setImageBroken(true)}
              />
            </div>

            <div
              className={styles.bubble}
              role="dialog"
              aria-labelledby={titleId}
              aria-modal="false"
            >
              <Button
                variant="link"
                type="button"
                className={styles.close}
                onClick={advance}
                aria-label="Close tip and show next"
              >
                ×
              </Button>
              <p id={titleId} className={styles.body}>
                {popup.body}
              </p>
              <div className={styles.actions}>
                <Button
                  variant="primary"
                  type="button"
                  className={styles.actionBtn}
                  onClick={advance}
                >
                  {popup.primaryLabel}
                </Button>
                <Button
                  type="button"
                  className={styles.actionBtn}
                  onClick={advance}
                >
                  {popup.secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </WindowContainer>
    </div>
  );
}
