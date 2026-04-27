import { useEffect, useReducer, useRef, useState } from "react";
import { Button } from "../../General/Button";
import styles from "./styles.module.css";

/** Clicks required to finish the current level and reach the next (increases with level). */
function xpNeededForLevel(level: number): number {
  return 6 + level * 3;
}

type GameState = { level: number; xp: number };

const INITIAL: GameState = { level: 1, xp: 0 };

function gameReducer(state: GameState, action: "tap" | "reset"): GameState {
  if (action === "reset") {
    return INITIAL;
  }
  let { level, xp } = state;
  xp += 1;
  while (xp >= xpNeededForLevel(level)) {
    xp -= xpNeededForLevel(level);
    level += 1;
  }
  return { level, xp };
}

export default function FeedbackLoopDemo() {
  const [state, dispatch] = useReducer(gameReducer, INITIAL);
  const [levelUpPulse, setLevelUpPulse] = useState(false);
  const prevLevelRef = useRef(state.level);

  useEffect(() => {
    if (state.level > prevLevelRef.current) {
      setLevelUpPulse(true);
      const t = window.setTimeout(() => setLevelUpPulse(false), 700);
      prevLevelRef.current = state.level;
      return () => window.clearTimeout(t);
    }
    prevLevelRef.current = state.level;
  }, [state.level]);

  const needed = xpNeededForLevel(state.level);
  const pct = Math.min(100, (state.xp / needed) * 100);

  return (
    <div className={styles.scene}>
      <div className={styles.panel}>
        <div className={styles.flow}>
          <div
            className={`${styles.levelBadge} ${levelUpPulse ? styles.levelBadgePulse : ""}`}
            aria-live="polite"
          >
            <span className={styles.levelLabel}>Level</span>
            <span className={styles.levelValue} key={state.level}>
              {state.level}
            </span>
          </div>

          <div className={styles.xpStrip}>
            <div className={styles.xpLabels}>
              <span className={styles.xpTitle}>Experience</span>
              <span className={styles.fractionCluster}>
                {levelUpPulse ? (
                  <span className={styles.toast} role="status">
                    Level up!
                  </span>
                ) : null}
              </span>
            </div>
            <div
              className={styles.track}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={needed}
              aria-valuenow={state.xp}
              aria-label={`Experience toward level ${state.level + 1}`}
            >
              <div className={styles.fill} style={{ width: `${pct}%` }} />
            </div>
          </div>

          <div className={styles.actions}>
            <Button
              variant="primary"
              type="button"
              onClick={() => dispatch("tap")}
            >
              Click me!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
