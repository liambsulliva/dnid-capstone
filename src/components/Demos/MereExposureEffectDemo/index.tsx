import type { ReactNode } from "react";
import { Button } from "../../General/Button";
import styles from "./styles.module.css";

export type MereExposureIconSet = "conventional" | "arbitrary";

export interface MereExposureEffectDemoProps {
  iconSet?: MereExposureIconSet;
}

type ActionSpec = { label: string; icon: ReactNode };

function IconBox({ children }: { children: ReactNode }) {
  return (
    <span className={styles.iconGlyph} aria-hidden>
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        {children}
      </svg>
    </span>
  );
}

const conventionalActions: ActionSpec[] = [
  {
    label: "Save",
    icon: (
      <IconBox>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="currentColor"
            d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-6.875 10.125Q15 16.25 15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18t2.125-.875M6 10h9V6H6z"
          />
        </svg>
      </IconBox>
    ),
  },
  {
    label: "Send",
    icon: (
      <IconBox>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" />
        </svg>
      </IconBox>
    ),
  },
  {
    label: "Cart",
    icon: (
      <IconBox>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="currentColor"
            d="M5.588 21.413Q5 20.825 5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22t-1.412-.587m10 0Q15 20.825 15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22t-1.412-.587M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25z"
          />
        </svg>
      </IconBox>
    ),
  },
];

const arbitraryActions: ActionSpec[] = [
  {
    label: "Save",
    icon: (
      <IconBox>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="currentColor"
            d="M17 16q.625 0 1.063-.425T18.5 14.5q0-.625-.437-1.062T17 13q-.65 0-1.075.438T15.5 14.5q0 .65.425 1.075T17 16M2 9l3.4-3.4q.275-.275.638-.437T6.825 5H17.15q.425 0 .788.163t.637.437L22 9zm2 10q-.85 0-1.425-.575T2 17v-6h20v6q0 .85-.587 1.425T20 19z"
          />
        </svg>
      </IconBox>
    ),
  },
  {
    label: "Send",
    icon: (
      <IconBox>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="currentColor"
            d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
          />
        </svg>
      </IconBox>
    ),
  },
  {
    label: "Cart",
    icon: (
      <IconBox>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="currentColor"
            d="M11.175 22q-.375 0-.75-.15t-.675-.45L2.6 14.25q-.3-.3-.438-.663t-.137-.737t.138-.75t.437-.675L11.4 2.6q.275-.275.65-.438T12.825 2H20q.825 0 1.413.587T22 4v7.175q0 .4-.15.763t-.425.637L12.6 21.4q-.3.3-.675.45t-.75.15M17.5 8q.625 0 1.063-.437T19 6.5t-.437-1.062T17.5 5t-1.062.438T16 6.5t.438 1.063T17.5 8"
          />
        </svg>
      </IconBox>
    ),
  },
];

export default function MereExposureEffectDemo({
  iconSet = "conventional",
}: MereExposureEffectDemoProps) {
  const actions =
    iconSet === "conventional" ? conventionalActions : arbitraryActions;

  return (
    <div className={styles.scene}>
      <ul className={styles.toolbar} role="list">
        {actions.map(({ label, icon }) => (
          <li key={label} className={styles.item}>
            <Button variant="iconLabeled" iconLabel={label} type="button">
              {icon}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
