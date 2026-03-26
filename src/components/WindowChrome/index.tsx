import type { ReactNode } from "react";
import styles from "./styles.module.css";

interface WindowChromeProps {
  title?: ReactNode;
  className?: string;
}

export function WindowChrome({ title, className }: WindowChromeProps) {
  return (
    <div className={`${styles.chrome}${className ? ` ${className}` : ""}`}>
      <div className={styles.dots}>
        <span className={styles.dot} data-color="close" />
        <span className={styles.dot} data-color="minimize" />
        <span className={styles.dot} data-color="maximize" />
      </div>
      {title && <span className={styles.title}>{title}</span>}
    </div>
  );
}
