import { useState, useRef } from "react";
import { Button } from "../../General/Button";
import styles from "./styles.module.css";

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.

Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function ForcedActionDemo() {
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shaking, setShaking] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const canSubmit = email.trim().length > 0 && password.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      emailRef.current?.focus();
      return;
    }
    setUnlocked(true);
  };

  return (
    <div className={styles.contentWrap}>
      <div className={`${styles.bodyText} ${!unlocked ? styles.blurred : ""}`}>
        {LOREM.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {!unlocked && (
        <div className={styles.gate}>
          <div className={styles.gateInner}>
            <div className={styles.lockIcon} aria-hidden="true">
              🔒
            </div>
            <p className={styles.gateTitle}>Sign in to keep reading</p>
            <p className={styles.gateSub}>
              Create a free account or log in to access this article and
              thousands more.
            </p>

            <form
              className={`${styles.form} ${shaking ? styles.shake : ""}`}
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                ref={emailRef}
                className={styles.input}
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                aria-label="Email address"
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                aria-label="Password"
              />
              <Button variant="submit" type="submit" active={canSubmit}>
                Continue reading
              </Button>
            </form>

            <p className={styles.disclaimer}>
              By continuing, you agree to our{" "}
              <span className={styles.fakeLink}>Terms of Service</span> and{" "}
              <span className={styles.fakeLink}>Privacy Policy</span>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
