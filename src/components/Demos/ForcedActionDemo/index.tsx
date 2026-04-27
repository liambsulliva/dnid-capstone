import { useState, useRef, type FormEvent, type ReactNode } from "react";
import { Button } from "../../General/Button";
import styles from "./styles.module.css";

/** Article copy as JSX so paragraphs can include links. */
function ArticleBody(): ReactNode {
  return (
    <>
      <p>
        BUT, the content itself needs to be interesting enough to be worth the
        extra work. Often, this pattern favors companies that are already
        established.{" "}
        <a
          href="https://www.nytimes.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The New York Times
        </a>{" "}
        and the{" "}
        <a
          href="https://www.wsj.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wall Street Journal
        </a>{" "}
        are both companies that implement hard paywalls. Why? Because they have
        so much cultural capital that they don’t mind losing a few users if it
        forces existing users into paying customers.
      </p>
      <p>
        In that case, what about the locked content that you had to pass to get
        here? Social media giants like{" "}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        and{" "}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        force sign ins to access their content. Why force users to sign in if
        there is no monetary gain? Simple. Data collection.
      </p>
      <p>
        There is a lot of information that you can gather from a user’s
        behavior, and the only way to track that behavior is to have some kind
        of record of their interaction with the page. Sign-ins function great
        for this.
      </p>
      <p>
        While{" "}
        <a
          href="https://wikipedia.org/wiki/HTTP_cookie"
          target="_blank"
          rel="noopener noreferrer"
        >
          cookies
        </a>{" "}
        are an alternative option, sign-ins come with the added benefit of
        email. Signing in to a website gives the company free reign to send
        emails to the new user until they decide to unsubscribe. Companies that
        ask for a phone number can even send text messages. It increases
        engagement to their site, which allows them to collect more information
        and personalize their ads to suit the person accessing their site. It’s
        a not very subtle <a href="../behavior/feedback-loop">feedback loop</a>.
      </p>
    </>
  );
}

export default function ForcedActionDemo() {
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shaking, setShaking] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const canSubmit = email.trim().length > 0 && password.length > 0;

  const handleSubmit = (e: FormEvent) => {
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
        <ArticleBody />
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
