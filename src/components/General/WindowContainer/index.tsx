import type { ReactNode } from "react";
import { WindowChrome } from "../WindowChrome";
import styles from "./styles.module.css";

interface WindowContainerProps {
  title?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export function WindowContainer({
  title,
  className,
  children,
}: WindowContainerProps) {
  return (
    <div className={`${styles.container}${className ? ` ${className}` : ""}`}>
      <WindowChrome title={title} />
      {children}
    </div>
  );
}
