import type { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

const VARIANT_CLASS = {
  default: styles.default,
  toggle: styles.toggle,
  ghostBrand: styles.ghostBrand,
  outline: styles.outline,
  outlineSm: styles.outlineSm,
  outlineMuted: styles.outlineMuted,
  submit: styles.submit,
  primary: styles.primary,
  danger: styles.danger,
  success: styles.success,
  ctaPrimary: styles.ctaPrimary,
  ctaSecondary: styles.ctaSecondary,
  dangerCta: styles.dangerCta,
  ctaBrand: styles.ctaBrand,
  brandConfirm: styles.brandConfirm,
  icon: styles.icon,
  link: styles.link,
  textMuted: styles.textMuted,
  closeIcon: styles.closeIcon,
  selectCard: styles.selectCard,
  tab: styles.tab,
  chip: styles.chip,
} as const;

const ACTIVE_CLASS: Partial<Record<ButtonVariant, string>> = {
  submit: styles.submitActive,
};

const PRESSED_CLASS: Partial<Record<ButtonVariant, string>> = {
  toggle: styles.toggleOn,
  selectCard: styles.selectCardSelected,
  tab: styles.tabActive,
  chip: styles.chipSelected,
};

export type ButtonVariant = keyof typeof VARIANT_CLASS;

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export type ButtonProps = {
  variant?: ButtonVariant;
  active?: boolean;
  pressed?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "default",
  active,
  pressed,
  className,
  children,
  type,
  ...rest
}: ButtonProps) {
  const v = VARIANT_CLASS[variant];
  const activeClass = active ? ACTIVE_CLASS[variant] : undefined;
  const pressedClass = pressed ? PRESSED_CLASS[variant] : undefined;

  if (variant === "toggle") {
    return (
      <button
        type={type ?? "button"}
        className={cx(v, pressedClass, className)}
        {...rest}
      >
        <span className={styles.toggleThumb} />
      </button>
    );
  }

  return (
    <button
      type={type ?? (variant === "submit" ? "submit" : "button")}
      className={cx(v, activeClass, pressedClass, className)}
      {...rest}
    >
      {children}
    </button>
  );
}
