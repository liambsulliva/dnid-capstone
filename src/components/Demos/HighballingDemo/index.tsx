import { useState } from "react";
import { Button } from "../../General/Button";
import styles from "./styles.module.css";

interface AddOn {
  id: string;
  name: string;
  pitch: string;
  description: string;
  bullets: string[];
  price: number;
  badge?: string;
}

const ADDONS: AddOn[] = [
  {
    id: "premium",
    name: "Premium Account",
    pitch: "Remove all limits",
    description:
      "Unlock every feature with unlimited exports and no usage caps.",
    bullets: ["Unlimited projects", "Priority rendering", "Advanced templates"],
    price: 29.99,
    badge: "Most Popular",
  },
  {
    id: "storage",
    name: "Cloud Storage Pack",
    pitch: "Never run out of space",
    description:
      "100 GB of secure, redundant cloud storage for all your files.",
    bullets: ["Auto-backup", "File versioning", "Share with anyone"],
    price: 9.99,
  },
  {
    id: "support",
    name: "Priority Support",
    pitch: "Get help when it matters",
    description:
      "24/7 access to our expert team with a guaranteed 1-hour response.",
    bullets: ["Dedicated agent", "Phone & chat", "Screen-share sessions"],
    price: 14.99,
  },
  {
    id: "analytics",
    name: "Analytics Dashboard",
    pitch: "Know exactly what's working",
    description:
      "Advanced insights and real-time reporting across your entire workspace.",
    bullets: ["Custom reports", "Export to CSV", "Team benchmarks"],
    price: 19.99,
    badge: "New",
  },
  {
    id: "domain",
    name: "Custom Domain",
    pitch: "Make it truly yours",
    description:
      "A branded domain for your workspace — SSL certificate included.",
    bullets: ["One-click setup", "Free SSL", "Auto-renewal"],
    price: 12.99,
  },
];

export default function HighballingDemo() {
  const [stepIndex, setStepIndex] = useState(0);
  const [accepted, setAccepted] = useState<Set<string>>(new Set());
  const [animating, setAnimating] = useState(false);

  const transition = (fn: () => void) => {
    setAnimating(true);
    setTimeout(() => {
      fn();
      setAnimating(false);
    }, 200);
  };

  const advance = (accept: boolean) => {
    const addon = ADDONS[stepIndex];
    transition(() => {
      if (accept) {
        setAccepted((prev) => new Set([...prev, addon.id]));
      }
      setStepIndex((prev) => prev + 1);
    });
  };

  const reset = () =>
    transition(() => {
      setStepIndex(0);
      setAccepted(new Set());
    });

  const isCheckout = stepIndex >= ADDONS.length;
  const addon = ADDONS[stepIndex];
  const acceptedItems = ADDONS.filter((a) => accepted.has(a.id));
  const total = acceptedItems.reduce((sum, a) => sum + a.price, 0);
  const progressPct = (stepIndex / ADDONS.length) * 100;

  return (
    <div className={styles.scene}>
      <div
        className={`${styles.panel} ${animating ? styles.fadeOut : styles.fadeIn}`}
      >
        {!isCheckout ? (
          <>
            <div className={styles.panelHeader}>
              <div className={styles.storeBrand}>
                <span className={styles.storeDot} />
                <span className={styles.storeName}>Acme Pro</span>
              </div>
              <span className={styles.stepLabel}>
                Step {stepIndex + 1} of {ADDONS.length}
              </span>
            </div>

            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className={styles.addonCard}>
              {addon.badge && (
                <span className={styles.addonBadge}>{addon.badge}</span>
              )}
              <p className={styles.addonPitch}>{addon.pitch}</p>
              <p className={styles.addonName}>{addon.name}</p>
              <p className={styles.addonDesc}>{addon.description}</p>
              <ul className={styles.addonBullets}>
                {addon.bullets.map((b) => (
                  <li key={b} className={styles.addonBullet}>
                    <span className={styles.bulletCheck} aria-hidden="true">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.addonActions}>
              <Button variant="addonAccept" onClick={() => advance(true)}>
                Yes, add this to my plan →
              </Button>
              <Button variant="addonSkip" onClick={() => advance(false)}>
                No thanks, skip
              </Button>
            </div>

            {accepted.size > 0 && (
              <div className={styles.acceptedBar}>
                {accepted.size} add-on{accepted.size !== 1 ? "s" : ""} added to
                your plan
              </div>
            )}
          </>
        ) : (
          <>
            <div className={styles.panelHeader}>
              <span className={styles.checkoutTitle}>Order Summary</span>
            </div>

            {acceptedItems.length === 0 ? (
              <div className={styles.emptyCheckout}>
                <p className={styles.emptyText}>You didn't add any extras.</p>
                <Button variant="resetMuted" onClick={reset}>
                  Start Over
                </Button>
              </div>
            ) : (
              <>
                <ul className={styles.checkoutList}>
                  {acceptedItems.map((item) => (
                    <li key={item.id} className={styles.checkoutRow}>
                      <span className={styles.checkoutItemName}>
                        {item.name}
                      </span>
                      <span className={styles.checkoutItemPrice}>
                        ${item.price.toFixed(2)}
                        <span className={styles.priceSuffix}>/mo</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>Total due today</span>
                  <span className={styles.totalAmount}>
                    ${total.toFixed(2)}
                    <span className={styles.priceSuffix}>/mo</span>
                  </span>
                </div>

                <div className={styles.footer}>
                  <p className={styles.resetNote}>
                    Need to remove an item? You'll need to start your order
                    over.
                  </p>
                  <div className={styles.checkoutActions}>
                    <Button variant="resetMuted" onClick={reset}>
                      Start Over
                    </Button>
                    <Button variant="checkoutConfirm">Confirm &amp; Pay</Button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
