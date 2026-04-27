import { useState } from "react";
import { Button } from "../../General/Button";
import styles from "./styles.module.css";

/** Clicks required to finish the current level and reach the next (increases with level). */
function xpNeededForLevel(level: number): number {
  return 6 + level * 3;
}

type GameState = { level: number; xp: number };

const INITIAL: GameState = { level: 1, xp: 0 };

/** When variable reinforcement is on, each level-up attempt succeeds only with this probability. */
const VARIABLE_LEVEL_UP_CHANCE = 0.55;

export type FeedbackLoopDemoVariant = "default" | "variableReinforcement";

export interface FeedbackLoopDemoProps {
  variant?: FeedbackLoopDemoVariant;
}

type TapOutcome = {
  state: GameState;
  didLevelUp: boolean;
  didNearMiss: boolean;
};

function applyTap(
  state: GameState,
  variableReinforcement: boolean,
  roll: () => number
): TapOutcome {
  let { level, xp } = state;
  xp += 1;
  let didLevelUp = false;
  let didNearMiss = false;

  while (xp >= xpNeededForLevel(level)) {
    const needed = xpNeededForLevel(level);
    if (!variableReinforcement || roll() < VARIABLE_LEVEL_UP_CHANCE) {
      xp -= needed;
      level += 1;
      didLevelUp = true;
    } else {
      xp = 0;
      didNearMiss = true;
      break;
    }
  }

  return { state: { level, xp }, didLevelUp, didNearMiss };
}

export default function FeedbackLoopDemo({
  variant = "default",
}: FeedbackLoopDemoProps) {
  const variableReinforcement = variant === "variableReinforcement";
  const [state, setState] = useState<GameState>(INITIAL);
  const [levelUpPulse, setLevelUpPulse] = useState(false);
  const [nearMissPulse, setNearMissPulse] = useState(false);

  const needed = xpNeededForLevel(state.level);
  const pct = Math.min(100, (state.xp / needed) * 100);

  const handleTap = () => {
    const outcome = applyTap(state, variableReinforcement, () => Math.random());
    setState(outcome.state);

    if (outcome.didLevelUp) {
      setLevelUpPulse(true);
      window.setTimeout(() => setLevelUpPulse(false), 700);
    }
    if (outcome.didNearMiss) {
      setNearMissPulse(true);
      window.setTimeout(() => setNearMissPulse(false), 900);
    }
  };

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
                {nearMissPulse && !levelUpPulse ? (
                  <span className={styles.toastNearMiss} role="status">
                    Not quite…
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
            <Button variant="primary" type="button" onClick={handleTap}>
              Click me!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
