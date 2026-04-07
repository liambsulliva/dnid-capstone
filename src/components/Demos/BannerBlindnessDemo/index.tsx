import { useState } from "react";
import styles from "./styles.module.css";

type Variant = "default" | "sidebar";

function AdUnit({
  clicked,
  variant,
  onActivate,
}: {
  clicked: boolean;
  variant?: Variant;
  onActivate: () => void;
}) {
  const isSidebar = variant === "sidebar";
  return (
    <div
      className={`${styles.adBanner} ${isSidebar ? styles.adBannerSidebar : ""} ${clicked ? styles.adClicked : ""}`}
      onClick={onActivate}
      onKeyDown={(e) => e.key === "Enter" && onActivate()}
      role="button"
      tabIndex={0}
      aria-label="Sponsored promotion — click to engage"
    >
      {isSidebar && (
        <div className={styles.adImagePlaceholder} aria-hidden="true" />
      )}
      <span className={styles.adLabel}>Advertisement</span>
      <p className={styles.adHeadline}>
        Supercharge your workflow — 50% off Pro
      </p>
      <p className={styles.adSub}>
        Limited-time offer. Thousands of teams already upgraded.
      </p>
      <span className={styles.adCta} aria-hidden="true">
        Claim offer
      </span>
    </div>
  );
}

type BannerBlindnessDemoProps = {
  variant?: Variant;
};

export default function BannerBlindnessDemo({
  variant = "default",
}: BannerBlindnessDemoProps) {
  const [clicked, setClicked] = useState(false);

  if (variant === "sidebar") {
    return (
      <div className={styles.sidebarRoot}>
        <AdUnit
          clicked={clicked}
          variant="sidebar"
          onActivate={() => setClicked(true)}
        />
        {clicked && <div className={styles.feedback}>Why'd ya click?</div>}
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <AdUnit
        clicked={clicked}
        variant="default"
        onActivate={() => setClicked(true)}
      />
      {clicked && <div className={styles.feedback}>Why'd ya click?</div>}
    </div>
  );
}
