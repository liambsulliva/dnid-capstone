import { Button } from "../Button";
import styles from "./styles.module.css";

export interface PriceTier {
  id: string;
  name: string;
  price: number;
  priceSuffix?: string;
  description?: string;
  bullets: string[];
  badge?: string;
  highlighted?: boolean;
  ctaLabel?: string;
  onSelect?: () => void;
}

export interface PriceLadderProps {
  tiers: PriceTier[];
  className?: string;
}

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function PriceLadder({ tiers, className }: PriceLadderProps) {
  if (tiers.length < 2 || tiers.length > 5) {
    console.warn("PriceLadder expects between 2 and 5 tiers.");
  }

  return (
    <div
      className={cx(styles.ladder, className)}
      style={{ "--tier-count": tiers.length } as React.CSSProperties}
    >
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={cx(
            styles.tier,
            tier.highlighted && styles.tierHighlighted,
          )}
        >
          {/*tier.badge && (
            <div className={styles.badgeRow}>
              <span className={styles.badge}>{tier.badge}</span>
            </div>
          )*/}
          <div className={styles.tierHeader}>
            <p className={styles.tierName}>{tier.name}</p>
            <div className={styles.priceRow}>
              <span className={styles.priceCurrency}>$</span>
              <span className={styles.priceAmount}>
                {tier.price % 1 === 0
                  ? tier.price.toString()
                  : tier.price.toFixed(2)}
              </span>
              {tier.priceSuffix && (
                <span className={styles.priceSuffix}>{tier.priceSuffix}</span>
              )}
            </div>
            {tier.description && (
              <p className={styles.tierDescription}>{tier.description}</p>
            )}
          </div>

          <div className={styles.tierDivider} />

          <ul className={styles.bullets}>
            {tier.bullets.map((bullet) => (
              <li key={bullet} className={styles.bullet}>
                <span className={styles.bulletCheck} aria-hidden="true">
                  ✓
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className={styles.tierFooter}>
            <Button
              variant={tier.highlighted ? "primary" : "default"}
              className={styles.ctaBtn}
              onClick={tier.onSelect}
            >
              {tier.ctaLabel ?? "Get started"}
            </Button>
          </div>
        </div>
      ))}
      <div className={styles.attributionFooter}>
        <p className={styles.attributionFooterText}>
          This will not actually charge your card.
        </p>
      </div>
    </div>
  );
}
