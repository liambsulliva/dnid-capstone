import { useId, useRef, useEffect, useState } from "react";
import { Button } from "../../General/Button";
import { WindowContainer } from "../../General/WindowContainer";
import styles from "./styles.module.css";

export type MoodCongruenceDemoVariant = "calm" | "gaming";

export interface MoodCongruenceDemoProps {
  variant: MoodCongruenceDemoVariant;
}

export default function MoodCongruenceDemo({
  variant,
}: MoodCongruenceDemoProps) {
  const amountId = useId();
  const toId = useId();
  const [amount, setAmount] = useState("240.00");
  const [toAccount, setToAccount] = useState("Savings ···4521");
  const [phase, setPhase] = useState<"idle" | "sent">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  function submit() {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setPhase("sent");
    resetTimer.current = setTimeout(() => {
      setPhase("idle");
      resetTimer.current = null;
    }, 1600);
  }

  const balance = "$12,847.52";
  const suffix = variant;

  if (variant === "calm") {
    return (
      <div className={styles.demoRoot}>
        <WindowContainer
          title="bank.liambsullivan.com"
          className={styles.calmWindow}
        >
          <div className={styles.calmBody}>
            <header className={styles.calmHeader}>
              <span className={styles.calmBrand}>Bank of Sullivan</span>
              <span className={styles.calmTag}>Checking</span>
            </header>

            <div className={styles.balanceBlock}>
              <span className={styles.balanceLabel}>Available balance</span>
              <span className={styles.balanceValue}>{balance}</span>
            </div>

            <div className={styles.field}>
              <label className={styles.calmLabel} htmlFor={`${toId}-${suffix}`}>
                Transfer to
              </label>
              <input
                id={`${toId}-${suffix}`}
                className={styles.calmInput}
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className={styles.field}>
              <label
                className={styles.calmLabel}
                htmlFor={`${amountId}-${suffix}`}
              >
                Amount (USD)
              </label>
              <input
                id={`${amountId}-${suffix}`}
                className={styles.calmInput}
                inputMode="decimal"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                autoComplete="off"
              />
            </div>

            <Button
              variant="primary"
              className={styles.calmSubmit}
              type="button"
              disabled={phase === "sent"}
              onClick={submit}
            >
              {phase === "sent" ? "Transfer scheduled" : "Transfer funds"}
            </Button>
            <p className={styles.calmFinePrint}>
              Not actually sending any money.
            </p>
          </div>
        </WindowContainer>
      </div>
    );
  }

  return (
    <div className={styles.demoRoot}>
      <div className={styles.rogShell}>
        <div className={styles.rogChrome}>
          <div className={styles.rogDots}>
            <span className={styles.rogDot} data-variant="close" />
            <span className={styles.rogDot} data-variant="min" />
            <span className={styles.rogDot} data-variant="max" />
          </div>
          <span className={styles.rogTitle}>bank.liambsullivan.com</span>
        </div>
        <div className={styles.rogScan} aria-hidden />
        <div className={styles.rogBody}>
          <header className={styles.rogHeader}>
            <div className={styles.rogLogoMark}>RB</div>
            <div className={styles.rogHeaderText}>
              <span className={styles.rogWordmark}>BANK OF SULLIVAN</span>
              <span className={styles.rogMode}>Checking Account</span>
            </div>
          </header>

          <div className={styles.rogBalanceCard}>
            <span className={styles.rogBalanceGlow} aria-hidden />
            <span className={styles.rogBalanceLabel}>Balance (USD)</span>
            <span className={styles.rogBalanceValue}>{balance}</span>
          </div>

          <div className={styles.rogField}>
            <label className={styles.rogLabel} htmlFor={`${toId}-${suffix}`}>
              Transfer to
            </label>
            <input
              id={`${toId}-${suffix}`}
              className={styles.rogInput}
              value={toAccount}
              onChange={(e) => setToAccount(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className={styles.rogField}>
            <label
              className={styles.rogLabel}
              htmlFor={`${amountId}-${suffix}`}
            >
              Amount (USD)
            </label>
            <input
              id={`${amountId}-${suffix}`}
              className={styles.rogInput}
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              autoComplete="off"
            />
          </div>

          <button
            type="button"
            className={styles.rogSubmit}
            disabled={phase === "sent"}
            onClick={submit}
          >
            {phase === "sent" ? "Sent" : "Transfer funds"}
          </button>

          <p className={styles.rogFinePrint}>Not actually sending any money.</p>
        </div>
      </div>
    </div>
  );
}

export function MoodCongruenceDemoPair() {
  return (
    <div className={styles.demoPair}>
      <div className={styles.demoPairCell}>
        <div className={styles.demoPairLabel}>Mood Congruent</div>
        <MoodCongruenceDemo variant="calm" />
      </div>
      <div className={styles.demoPairCell}>
        <div className={styles.demoPairLabel}>Mood Mismatched</div>
        <MoodCongruenceDemo variant="gaming" />
      </div>
    </div>
  );
}
