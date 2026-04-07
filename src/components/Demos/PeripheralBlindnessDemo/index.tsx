import { useState, useCallback } from "react";
import { WindowContainer } from "@site/src/components/General/WindowContainer";
import styles from "./styles.module.css";

export default function PeripheralBlindnessDemo() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null,
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos(null);
  }, []);

  const overlayStyle = {
    background: mousePos
      ? `radial-gradient(circle 160px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,1) 80%)`
      : `radial-gradient(circle 1px at -9999px -9999px, transparent 0%, rgba(0,0,0,1) 80%)`,
  };

  return (
    <WindowContainer title="peripheral-blindness.txt">
      <div
        className={styles.root}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.content}>
          <h2 className={styles.heading}>On Priorities</h2>
          <p>
            Ok, sorry. I know you're probably upset. This effect is incredibly
            annoying. I know.
          </p>
          <p>
            But hey, it does keep your eyes on the page! That's kind of the
            point. As people, we can't focus on everything at once, so we
            prioritize. Things that exist in our periphery are less relevant to
            us, and are thus often ignored.
          </p>
          <p>
            This is true both in our eyeballs and in the content we consume. We
            can't read every word on the page at once, so we start at the top
            left and scan through each line until it breaks, after which we
            start again at the left side of the next line.
          </p>
          <h3 className={styles.subheading}>Positioning is Everything</h3>
          <p>
            This means that the information that exists front and center is
            super important to us. It's what we're most likely to read and
            remember. Static content that sits at the edges of our vision is
            prime to be ignored.
          </p>
          <p>
            Some features of a page buck this trend, though. Smart uses of color
            can be very effective at drawing attention to important information
            without being overly intrusive. Same goes for font weight. Bolding
            text to draw attention to it may as well be the oldest trick in the
            book.
          </p>
          <h3 className={styles.subheading}>Motion is King</h3>
          <p>
            But motion topples all. Humans have evolved to notice movement in
            our periphery as a mechanism to help us hunt and avoid predators.
            Introducing a springy animation can alert a user to the prescence of
            something important, as demonstrated countless times on this
            website. Its power is undeniable.
          </p>
        </div>
        <div
          className={styles.overlay}
          style={overlayStyle}
          aria-hidden="true"
        />
        <div className={styles.reducedMotionNotice} aria-live="polite">
          Move your mouse over the content to see the spotlight effect.
        </div>
      </div>
    </WindowContainer>
  );
}
