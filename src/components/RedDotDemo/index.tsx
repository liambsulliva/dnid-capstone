import { useState, useEffect, useCallback, useRef } from "react";
// @ts-ignore
// import igIcon from "@site/docs/attention/img/ig-transparent.png";
import { Button } from "../Button";
import styles from "./styles.module.css";

interface RedDotProps {
  image: string;
  alt: string;
}

type BadgeState = {
  count: number;
  visible: boolean;
  animating: "in" | "out" | "idle";
};

export default function RedDotDemo({ image, alt }: RedDotProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [badge, setBadge] = useState<BadgeState>({
    count: 0,
    visible: false,
    animating: "idle",
  });

  const triggerBadge = useCallback(() => {
    setBadge((prev) => ({
      count: Math.min(prev.count + Math.floor(Math.random() * 2) + 1, 999),
      visible: true,
      animating: "in",
    }));
  }, []);

  useEffect(() => {
    const scheduleNext = () => {
      const delay = 1000 + Math.random() * 1000;
      return setTimeout(() => {
        triggerBadge();
        timerRef.current = scheduleNext();
      }, delay);
    };
    timerRef.current = scheduleNext();
    return () => clearTimeout(timerRef.current);
  }, [triggerBadge]);

  const dismissBadge = () => {
    setBadge((prev) => ({ ...prev, animating: "out" }));
    setTimeout(() => {
      setBadge((prev) => ({
        ...prev,
        count: 0,
        visible: false,
        animating: "idle",
      }));
    }, 300);
  };

  return (
    <div className={styles.appWrapper}>
      <Button
        variant="iconApp"
        onClick={() => badge.visible && dismissBadge()}
        aria-label={`Instagram${badge.visible ? `, ${badge.count} notification` : ""}`}
      >
        <img src={image} alt={alt} className={styles.appSymbol} />
        {badge.visible && (
          <span
            key={badge.count}
            className={`${styles.badge} ${
              badge.animating === "in"
                ? styles.badgeIn
                : badge.animating === "out"
                  ? styles.badgeOut
                  : ""
            }`}
            aria-hidden="true"
          >
            {badge.count}
          </span>
        )}
      </Button>
    </div>
  );
}
