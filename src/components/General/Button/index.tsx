import type { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

const VARIANT_CLASS = {
  toggle: styles.toggle,
  resetCurated: styles.resetCurated,
  resetOutline: styles.resetOutline,
  resetMuted: styles.resetMuted,
  submit: styles.submit,
  iconApp: styles.iconApp,
  confirmDanger: styles.confirmDanger,
  confirmSafe: styles.confirmSafe,
  snippetLink: styles.snippetLink,
  readMoreOutline: styles.readMoreOutline,
  buy: styles.buy,
  nagClose: styles.nagClose,
  nagCta: styles.nagCta,
  nagDismiss: styles.nagDismiss,
  addonAccept: styles.addonAccept,
  addonSkip: styles.addonSkip,
  checkoutConfirm: styles.checkoutConfirm,
} as const;

export type ButtonVariant = keyof typeof VARIANT_CLASS;

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export type ButtonProps = {
  variant: ButtonVariant;
  active?: boolean;
  pressed?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant,
  active,
  pressed,
  className,
  children,
  type,
  ...rest
}: ButtonProps) {
  const v = VARIANT_CLASS[variant];

  if (variant === "toggle") {
    return (
      <button
        type={type ?? "button"}
        className={cx(v, pressed && styles.toggleOn, className)}
        {...rest}
      >
        <span className={styles.toggleThumb} />
      </button>
    );
  }

  if (variant === "submit") {
    return (
      <button
        type={type ?? "submit"}
        className={cx(v, active && styles.submitActive, className)}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <button type={type ?? "button"} className={cx(v, className)} {...rest}>
      {children}
    </button>
  );
}
