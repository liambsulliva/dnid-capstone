import type { ReactNode } from "react";

export function ABTestingGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .ab-b-side {
          transition: filter 0.35s ease, transform 0.35s ease;
          transform-box: fill-box;
          transform-origin: center;
        }
        .ab-a-side { transition: opacity 0.35s ease; }
        .ab-winner {
          transition: opacity 0.35s ease;
          opacity: 0;
        }
        :is(.patternGridCard:hover svg, svg.active) .ab-b-side { filter: drop-shadow(0 0 8px var(--dnid-brand-400)); transform: scale(1.04); }
        :is(.patternGridCard:hover svg, svg.active) .ab-a-side { opacity: 0.5; }
        :is(.patternGridCard:hover svg, svg.active) .ab-winner { opacity: 1; }
      `}</style>

      {/* A side */}
      <g className="ab-a-side">
        <text
          x="55"
          y="32"
          textAnchor="middle"
          fill="rgba(255,255,255,0.7)"
          fontSize="16"
          fontWeight="bold"
          fontFamily="Sora, sans-serif"
        >
          A
        </text>
        <rect
          x="21"
          y="46"
          width="68"
          height="52"
          rx="6"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
        />
        <rect
          x="31"
          y="56"
          width="48"
          height="8"
          rx="2"
          fill="rgba(255,255,255,0.3)"
        />
        <rect
          x="31"
          y="70"
          width="36"
          height="8"
          rx="2"
          fill="rgba(255,255,255,0.2)"
        />
      </g>

      {/* B side */}
      <g className="ab-b-side">
        <text
          x="145"
          y="32"
          textAnchor="middle"
          fill="rgba(255,255,255,0.7)"
          fontSize="16"
          fontWeight="bold"
          fontFamily="Sora, sans-serif"
        >
          B
        </text>
        <rect
          x="111"
          y="46"
          width="68"
          height="52"
          rx="6"
          fill="rgba(255,255,255,0.15)"
          stroke="var(--dnid-brand-400)"
          strokeWidth="1.5"
        />
        <rect
          x="121"
          y="56"
          width="48"
          height="8"
          rx="2"
          fill="rgba(255,255,255,0.35)"
        />
        <rect
          x="121"
          y="70"
          width="36"
          height="8"
          rx="2"
          fill="rgba(255,255,255,0.25)"
        />
      </g>

      {/* Winner badge */}
      <g className="ab-winner">
        <rect
          x="115"
          y="104"
          width="60"
          height="16"
          rx="4"
          fill="var(--dnid-brand-400)"
        />
        <text
          x="145"
          y="115.5"
          textAnchor="middle"
          fill="white"
          fontSize="8"
          fontWeight="bold"
          fontFamily="Sora, sans-serif"
        >
          WINNER
        </text>
      </g>
    </svg>
  );
}

export function AutonomyBiasGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .au-selected {
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease;
          stroke-width: 1.5;
          transform-box: fill-box;
          transform-origin: center;
          opacity: 0.5;
        }
        .au-check {
          transition: opacity 0.3s ease;
          opacity: 0;
        }
        :is(.patternGridCard:hover svg, svg.active) .au-selected { transform: scale(1.08); opacity: 1; }
        :is(.patternGridCard:hover svg, svg.active) .au-check { opacity: 1; }
      `}</style>

      {/* Option rows */}
      {[
        { y: 34, label: "Monthly billing", checked: false },
        { y: 68, label: "Annual billing  — save 20%", checked: true },
        { y: 102, label: "Custom / Enterprise", checked: false },
      ].map((opt, i) => (
        <g key={i}>
          <rect
            x="20"
            y={opt.y}
            width="160"
            height="26"
            rx="6"
            fill={
              opt.checked ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)"
            }
            stroke={
              opt.checked ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.25)"
            }
            strokeWidth={opt.checked ? 2 : 1.5}
            className={opt.checked ? "au-selected" : ""}
          />
          {/* Radio circle */}
          <circle
            cx="38"
            cy={opt.y + 13}
            r="7"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.5"
          />
          {opt.checked && (
            <circle
              cx="38"
              cy={opt.y + 13}
              r="4"
              fill="rgba(255,255,255,0.9)"
              className="au-check"
            />
          )}
          <text
            x="52"
            y={opt.y + 17.5}
            fill={opt.checked ? "white" : "rgba(255,255,255,0.6)"}
            fontSize="9"
            fontFamily="Sora, sans-serif"
          >
            {opt.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function LossAversionGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .la-scale {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: 100px 54px;
        }
        .la-left-side, .la-right-side {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        :is(.patternGridCard:hover svg, svg.active) .la-scale {
          transform: rotate(-20deg);
        }
        :is(.patternGridCard:hover svg, svg.active) .la-left-side {
          transform: translate(3.38px, 19.15px);
        }
        :is(.patternGridCard:hover svg, svg.active) .la-right-side {
          transform: translate(-3.38px, -19.15px);
        }
      `}</style>

      {/* === Antique base structure (static) === */}

      {/* Column shaft */}
      <rect
        x="96"
        y="64"
        width="8"
        height="67"
        rx="1"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
      />
      {/* Column decorative ring (mid) */}
      <rect
        x="93"
        y="93"
        width="14"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.2)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1"
      />

      {/* Capital (top of column, sits below beam) */}
      <rect
        x="82"
        y="57"
        width="36"
        height="8"
        rx="3"
        fill="rgba(255,255,255,0.22)"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.5"
      />

      {/* Finial ball (pivot point) */}
      <circle
        cx="100"
        cy="54"
        r="5.5"
        fill="rgba(255,255,255,0.45)"
        stroke="rgba(255,255,255,0.65)"
        strokeWidth="1.5"
      />

      {/* Base plinth (upper step) */}
      <rect
        x="83"
        y="129"
        width="34"
        height="8"
        rx="2"
        fill="rgba(255,255,255,0.2)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.5"
      />
      {/* Base foot (lower, widest step) */}
      <rect
        x="70"
        y="135"
        width="60"
        height="11"
        rx="4"
        fill="rgba(255,255,255,0.17)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
      />

      {/* === Beam only — rotates on hover === */}
      <g className="la-scale">
        <line
          x1="44"
          y1="54"
          x2="156"
          y2="54"
          stroke="rgba(255,255,255,0.72)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle
          cx="44"
          cy="54"
          r="4"
          fill="rgba(255,255,255,0.45)"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.5"
        />
        <circle
          cx="156"
          cy="54"
          r="4"
          fill="rgba(255,255,255,0.45)"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.5"
        />
      </g>

      {/* === Left chain + pan — translates to follow rotated beam attachment === */}
      <g className="la-left-side">
        <line
          x1="44"
          y1="54"
          x2="44"
          y2="80"
          stroke="rgba(255,255,255,0.38)"
          strokeWidth="1.5"
          strokeDasharray="2.5,2"
        />
        <ellipse
          cx="44"
          cy="83"
          rx="23"
          ry="5.5"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
        />
      </g>

      {/* === Right chain + pan — translates to follow rotated beam attachment === */}
      <g className="la-right-side">
        <line
          x1="156"
          y1="54"
          x2="156"
          y2="80"
          stroke="rgba(255,255,255,0.38)"
          strokeWidth="1.5"
          strokeDasharray="2.5,2"
        />
        <ellipse
          cx="156"
          cy="83"
          rx="23"
          ry="5.5"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export function ReachabilityGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <clipPath id="rch-phone">
          <rect x="70" y="10" width="60" height="140" rx="10" />
        </clipPath>
      </defs>
      <style>{`
        .rch-zone {
          transition: opacity 0.3s ease;
          opacity: 0;
        }
        .rch-z1 { transition-delay: 0s; }
        .rch-z2 { transition-delay: 0.1s; }
        .rch-z3 { transition-delay: 0.2s; }
        :is(.patternGridCard:hover svg, svg.active) .rch-zone { opacity: 1; }
      `}</style>

      {/* Zone arcs clipped to phone area */}
      <g clipPath="url(#rch-phone)">
        {/* Hard-to-reach zone (red, top) */}
        <ellipse
          cx="100"
          cy="155"
          rx="90"
          ry="110"
          fill="rgba(255,80,80,0.22)"
          stroke="rgba(255,80,80,0.5)"
          strokeWidth="1.5"
          className="rch-zone rch-z3"
        />
        {/* Medium zone (amber) */}
        <ellipse
          cx="100"
          cy="155"
          rx="65"
          ry="80"
          fill="rgba(255,200,50,0.22)"
          stroke="rgba(255,200,50,0.5)"
          strokeWidth="1.5"
          className="rch-zone rch-z2"
        />
        {/* Easy zone (green, thumb) */}
        <ellipse
          cx="100"
          cy="155"
          rx="40"
          ry="50"
          fill="rgba(80,200,120,0.28)"
          stroke="rgba(80,200,120,0.6)"
          strokeWidth="1.5"
          className="rch-zone rch-z1"
        />
      </g>

      {/* Phone outline */}
      <rect
        x="70"
        y="10"
        width="60"
        height="140"
        rx="10"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
      />
      {/* Home bar */}
      <rect
        x="88"
        y="143"
        width="24"
        height="3"
        rx="1.5"
        fill="rgba(255,255,255,0.4)"
      />
    </svg>
  );
}

export function FeedbackLoopGraphic(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50%"
      height="50%"
      viewBox="0 0 26 26"
    >
      <style>{`
        .fl-path {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: 50% 50%;
        }
        :is(.patternGridCard:hover svg, svg.active) .fl-path {
          transform: rotate(0.5turn);
        }
      `}</style>
      <rect width="26" height="26" fill="none" />
      <path
        className="fl-path"
        fill="var(--dnid-neutral-400)"
        d="M16.156 0a.86.86 0 0 0-.375.094l-4.25 4.187c-.254.24-.469.411-.469.719c0 .307.185.467.47.719l4.25 4.187c.253.13.569.116.812-.031A.81.81 0 0 0 17 9.187V7h2c1.682 0 3 1.318 3 3v6c0 1.682-1.318 3-3 3a2 2 0 1 0 0 4c3.842 0 7-3.158 7-7v-6c0-3.842-3.158-7-7-7h-2V.812a.81.81 0 0 0-.406-.687a.85.85 0 0 0-.438-.125M7 3c-3.842 0-7 3.158-7 7v6c0 3.842 3.158 7 7 7h2v2.188c0 .28.16.541.406.687a.84.84 0 0 0 .438.125a.86.86 0 0 0 .375-.094l4.25-4.187c.254-.24.469-.411.469-.719c0-.306-.185-.467-.47-.719l-4.25-4.187a.85.85 0 0 0-.812.031a.81.81 0 0 0-.406.688V19H7c-1.682 0-3-1.318-3-3v-6c0-1.682 1.318-3 3-3a2 2 0 1 0 0-4"
      />
    </svg>
  );
}
