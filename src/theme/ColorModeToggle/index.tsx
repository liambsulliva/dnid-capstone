import { type ReactNode } from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { translate } from "@docusaurus/Translate";
import IconLightMode from "@theme/Icon/LightMode";
import IconDarkMode from "@theme/Icon/DarkMode";
import IconSystemColorMode from "@theme/Icon/SystemColorMode";
import type { Props } from "@theme/ColorModeToggle";
import type { ColorMode } from "@docusaurus/theme-common";

import styles from "./styles.module.css";

function getNextColorMode(
  colorMode: ColorMode | null,
  respectPrefersColorScheme: boolean,
) {
  if (!respectPrefersColorScheme) {
    return colorMode === "dark" ? "light" : "dark";
  }
  switch (colorMode) {
    case null:
      return "light";
    case "light":
      return "dark";
    case "dark":
      return null;
    default:
      throw new Error(`unexpected color mode ${colorMode}`);
  }
}

// Swizzle ColorMode component to add tooltip functionality
function getColorModeLabel(colorMode: ColorMode | null): string {
  switch (colorMode) {
    case null:
      return translate({
        message: "System Default",
        id: "theme.colorToggle.ariaLabel.mode.system",
        description: "The name for the system color mode",
      });
    case "light":
      return translate({
        message: "Light Mode",
        id: "theme.colorToggle.ariaLabel.mode.light",
        description: "The name for the light color mode",
      });
    case "dark":
      return translate({
        message: "Dark Mode",
        id: "theme.colorToggle.ariaLabel.mode.dark",
        description: "The name for the dark color mode",
      });
    default:
      throw new Error(`unexpected color mode ${colorMode}`);
  }
}

function getColorModeAriaLabel(colorMode: ColorMode | null) {
  return translate(
    {
      message: "Switch between dark and light mode (currently {mode})",
      id: "theme.colorToggle.ariaLabel",
      description: "The ARIA label for the color mode toggle",
    },
    {
      mode: getColorModeLabel(colorMode),
    },
  );
}

function CurrentColorModeIcon(): ReactNode {
  return (
    <>
      <IconLightMode
        aria-hidden
        className={clsx(styles.toggleIcon, styles.lightToggleIcon)}
      />
      <IconDarkMode
        aria-hidden
        className={clsx(styles.toggleIcon, styles.darkToggleIcon)}
      />
      <IconSystemColorMode
        aria-hidden
        className={clsx(styles.toggleIcon, styles.systemToggleIcon)}
      />
    </>
  );
}

function ColorModeToggle({
  className,
  buttonClassName,
  respectPrefersColorScheme,
  value,
  onChange,
}: Props): ReactNode {
  const isBrowser = useIsBrowser();
  return (
    <div className={clsx(styles.toggle, className)}>
      <div className={styles.tooltipWrapper}>
        <button
          className={clsx(
            "clean-btn",
            styles.toggleButton,
            !isBrowser && styles.toggleButtonDisabled,
            buttonClassName,
          )}
          type="button"
          onClick={() =>
            onChange(getNextColorMode(value, respectPrefersColorScheme))
          }
          disabled={!isBrowser}
          aria-label={getColorModeAriaLabel(value)}
        >
          <CurrentColorModeIcon />
        </button>
        <span className={styles.tooltip} aria-hidden>
          {getColorModeLabel(value)}
        </span>
      </div>
    </div>
  );
}

export default ColorModeToggle;
