import type { ReactNode } from "react";

export function ConfirmshamingGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .co-yes {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-box: fill-box;
          transform-origin: center;
        }
        .co-no { transition: opacity 0.3s ease; }
        .co-shame {
          transition: opacity 0.3s ease;
          opacity: 0;
        }
        .co-normal { transition: opacity 0.3s ease; }
        :is(.patternGridCard:hover svg, svg.active) .co-yes { transform: scale(1.06); }
        :is(.patternGridCard:hover svg, svg.active) .co-no { opacity: 0.55; }
        :is(.patternGridCard:hover svg, svg.active) .co-shame { opacity: 1; }
        :is(.patternGridCard:hover svg, svg.active) .co-normal { opacity: 0; }
      `}</style>

      {/* Modal box */}
      <rect
        x="20"
        y="18"
        width="160"
        height="124"
        rx="8"
        fill="rgba(255,255,255,0.12)"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.5"
      />

      {/* Headline */}
      <text
        x="100"
        y="44"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="bold"
        fontFamily="Sora, sans-serif"
      >
        Get 30% off today!
      </text>
      <text
        x="100"
        y="60"
        textAnchor="middle"
        fill="rgba(255,255,255,0.6)"
        fontSize="8"
        fontFamily="Sora, sans-serif"
      >
        Join our newsletter for exclusive deals
      </text>

      {/* YES button */}
      <g className="co-yes">
        <rect
          x="30"
          y="72"
          width="140"
          height="22"
          rx="5"
          fill="rgba(80,200,120,0.8)"
        />
        <text
          x="100"
          y="87"
          textAnchor="middle"
          fill="white"
          fontSize="9"
          fontWeight="bold"
          fontFamily="Sora, sans-serif"
        >
          YES, I LOVE SAVING MONEY!
        </text>
      </g>

      {/* NO button — shame text swaps in on hover */}
      <g className="co-no">
        <rect
          x="30"
          y="102"
          width="140"
          height="18"
          rx="5"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
        <text
          x="100"
          y="114"
          textAnchor="middle"
          fill="rgba(255,255,255,0.5)"
          fontSize="7.5"
          fontFamily="Sora, sans-serif"
          className="co-normal"
        >
          No thanks
        </text>
        <text
          x="100"
          y="114"
          textAnchor="middle"
          fill="rgba(255,180,180,0.85)"
          fontSize="7"
          fontFamily="Sora, sans-serif"
          className="co-shame"
        >
          No, I hate good deals
        </text>
      </g>
    </svg>
  );
}

export function BreakageGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .br-extra {
          transition: opacity 0.4s ease;
          opacity: 0;
        }
        .br-cancel {
          transition: transform 0.4s ease, opacity 0.4s ease;
        }
        :is(.patternGridCard:hover svg, svg.active) .br-extra { opacity: 1; }
        :is(.patternGridCard:hover svg, svg.active) .br-cancel { transform: translate(30px, 20px) scale(0.7); opacity: 0.4; }
      `}</style>

      {/* Subscription card */}
      <rect
        x="20"
        y="18"
        width="160"
        height="70"
        rx="6"
        fill="rgba(255,255,255,0.12)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.5"
      />
      <text
        x="100"
        y="42"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="bold"
        fontFamily="Sora, sans-serif"
      >
        Premium Plan
      </text>
      <text
        x="100"
        y="58"
        textAnchor="middle"
        fill="rgba(255,255,255,0.6)"
        fontSize="9"
        fontFamily="Sora, sans-serif"
      >
        $19.99 / month · Auto-renews
      </text>
      <text
        x="100"
        y="72"
        textAnchor="middle"
        fill="rgba(255,255,255,0.4)"
        fontSize="7.5"
        fontFamily="Sora, sans-serif"
      >
        Active since Jan 2023
      </text>

      {/* Cancel button (moves away on hover) */}
      <g className="br-cancel">
        <rect
          x="52"
          y="100"
          width="96"
          height="20"
          rx="5"
          fill="rgba(255,80,80,0.25)"
          stroke="rgba(255,80,80,0.6)"
          strokeWidth="1"
        />
        <text
          x="100"
          y="114"
          textAnchor="middle"
          fill="rgba(255,120,120,0.9)"
          fontSize="8.5"
          fontFamily="Sora, sans-serif"
        >
          Cancel subscription
        </text>
      </g>

      {/* Extra friction steps */}
      <g className="br-extra">
        <rect
          x="14"
          y="126"
          width="172"
          height="16"
          rx="4"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />
        <text
          x="100"
          y="137.5"
          textAnchor="middle"
          fill="rgba(255,255,255,0.5)"
          fontSize="7"
          fontFamily="Sora, sans-serif"
        >
          Please call 1-800-555-0199 to cancel
        </text>
      </g>
    </svg>
  );
}

export function NaggingGraphic(): ReactNode {
  const popups = [
    { x: 10, y: 6, w: 72, h: 44 },
    { x: 95, y: 2, w: 80, h: 48 },
    { x: 32, y: 48, w: 76, h: 44 },
    { x: 110, y: 52, w: 74, h: 46 },
    { x: 6, y: 88, w: 84, h: 44 },
    { x: 82, y: 98, w: 88, h: 48 },
  ];

  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .ng-pop {
          transition: opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-box: fill-box;
          transform-origin: center;
          opacity: 0;
          transform: scale(0.7);
        }
        .ng-p0 { transition-delay: 0s; }
        .ng-p1 { transition-delay: 0.06s; }
        .ng-p2 { transition-delay: 0.12s; }
        .ng-p3 { transition-delay: 0.18s; }
        .ng-p4 { transition-delay: 0.24s; }
        .ng-p5 { transition-delay: 0.30s; }
        :is(.patternGridCard:hover svg, svg.active) .ng-pop {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      {popups.map((p, i) => (
        <g key={i} className={`ng-pop ng-p${i}`}>
          <rect
            x={p.x}
            y={p.y}
            width={p.w}
            height={p.h}
            rx="4"
            fill="rgba(255,255,255,0.14)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          <rect
            x={p.x + 5}
            y={p.y + 5}
            width={p.w * 0.35}
            height={6}
            rx="2"
            fill="rgba(255,255,255,0.35)"
          />
          <rect
            x={p.x + 5}
            y={p.y + 15}
            width={p.w * 0.75}
            height={4}
            rx="2"
            fill="rgba(255,255,255,0.2)"
          />
          <rect
            x={p.x + 5}
            y={p.y + 23}
            width={p.w * 0.55}
            height={4}
            rx="2"
            fill="rgba(255,255,255,0.15)"
          />
        </g>
      ))}
    </svg>
  );
}

export function ObstructionGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        @keyframes ob-x-bounce {
          0%   { transform: scale(0.35); opacity: 0; }
          55%  { transform: scale(1.28); opacity: 1; }
          78%  { transform: scale(0.9); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .ob-x {
          transform-box: fill-box;
          transform-origin: center;
        }
        .patternGridCard:not(:hover) svg:not(.active) .ob-x {
          animation: none;
          opacity: 0;
          transform: scale(0.35);
          transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        :is(.patternGridCard:hover svg, svg.active) .ob-x {
          animation: ob-x-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      {/* Translucent “missing content” panel */}
      <rect
        x="36"
        y="32"
        width="128"
        height="96"
        rx="10"
        fill="rgba(255,255,255,0.1)"
        stroke="rgba(255,255,255,0.38)"
        strokeWidth="1.5"
      />
      <rect
        x="52"
        y="52"
        width="72"
        height="6"
        rx="2"
        fill="rgba(255,255,255,0.2)"
      />
      <rect
        x="52"
        y="66"
        width="96"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.14)"
      />
      <rect
        x="52"
        y="78"
        width="88"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.14)"
      />
      <rect
        x="52"
        y="90"
        width="64"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.12)"
      />

      {/* X overlay — bounce-in on hover (same easing family as Forced Action) */}
      <g className="ob-x">
        <line
          x1="56"
          y1="48"
          x2="144"
          y2="112"
          stroke="#C9C9D1"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="144"
          y1="48"
          x2="56"
          y2="112"
          stroke="#C9C9D1"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function ForcedActionGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        @keyframes fa-bounce {
          0%   { transform: scale(1); }
          60%  { transform: scale(1.35); }
          80%  { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .fa-exclaim {
          transform-box: fill-box;
          transform-origin: center;
        }
        :is(.patternGridCard:hover svg, svg.active) .fa-exclaim {
          animation: fa-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      <g className="fa-exclaim">
        {/* Tapered stroke */}
        <polygon
          points="90,40 110,40 104,100 96,100"
          fill="rgba(255,255,255,0.6)"
          rx="2"
        />
        {/* Dot */}
        <circle cx="100" cy="122" r="6" fill="rgba(255,255,255,0.6)" />
      </g>
    </svg>
  );
}

export function FalseUrgencyGraphic(): ReactNode {
  const cx = 100;
  const cy = 80;
  const clockRadius = 38;

  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        @keyframes fu-minute-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(50deg); }
        }
        @keyframes fu-hour-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(15deg); }
        }
        .fu-clock-min {
          transform-box: fill-box;
          transform-origin: start;
          transform: rotate(50deg);
        }
        .patternGridCard:not(:hover) svg:not(.active) .fu-clock-min {
          transform: rotate(0deg);
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        :is(.patternGridCard:hover svg, svg.active) .fu-clock-min {
          animation: fu-minute-rotate 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .fu-clock-hr {
          transform-box: view-box;
          transform-origin: ${cx}px ${cy}px;
          transform: rotate(15deg);
        }
        .patternGridCard:not(:hover) svg:not(.active) .fu-clock-hr {
          transform: rotate(0deg);
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        :is(.patternGridCard:hover svg, svg.active) .fu-clock-hr {
          animation: fu-hour-rotate 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      {/* Clock (analog) */}
      <g>
        {/* Clock background */}
        <circle
          className="fu-clock-bg"
          cx={cx}
          cy={cy}
          r={clockRadius}
          fill="white"
          fillOpacity="0.08"
          stroke="var(--dnid-neutral-300)"
          strokeWidth="2"
        />
        {/* Tick marks */}
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * 2 * Math.PI;
          const x1 = cx + Math.sin(angle) * 30;
          const y1 = cy - Math.cos(angle) * 30;
          const x2 = cx + Math.sin(angle) * 35;
          const y2 = cy - Math.cos(angle) * 35;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--dnid-neutral-300)"
              strokeWidth={i % 3 === 0 ? 2 : 1}
            />
          );
        })}
        {/* Hour hand */}
        <line
          className="fu-clock-hr"
          x1={cx}
          y1={cy}
          x2={cx}
          y2={cy - 24}
          stroke="var(--dnid-neutral-400)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Minute hand */}
        <line
          className="fu-clock-min"
          x1={cx}
          y1={cy}
          x2={cx}
          y2={cy + 24}
          stroke="var(--dnid-neutral-400)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Center dot */}
        <circle cx={cx} cy={cy} r="2.5" fill="var(--dnid-neutral-400)" />
      </g>

      {/* CTA */}
    </svg>
  );
}
