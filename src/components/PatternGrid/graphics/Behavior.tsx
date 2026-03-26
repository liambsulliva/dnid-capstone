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
        svg:hover .ab-b-side { filter: drop-shadow(0 0 8px var(--dnid-brand-400)); transform: scale(1.04); }
        svg:hover .ab-a-side { opacity: 0.5; }
        svg:hover .ab-winner { opacity: 1; }
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
          fontFamily="sans-serif"
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
          fontFamily="sans-serif"
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
          fontFamily="sans-serif"
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
        svg:hover .au-selected { transform: scale(1.08); opacity: 1; }
        svg:hover .au-check { opacity: 1; }
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
            fontFamily="sans-serif"
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
        .la-beam {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-box: fill-box;
          transform-origin: 100px 60px;
        }
        .la-left-pan {
          transition: transform 0.5s ease;
        }
        .la-right-pan {
          transition: transform 0.5s ease;
        }
        svg:hover .la-beam { transform: rotate(18deg); }
        svg:hover .la-left-pan { transform: translateY(16px); }
        svg:hover .la-right-pan { transform: translateY(-10px); }
      `}</style>

      {/* Pivot */}
      <line
        x1="100"
        y1="24"
        x2="100"
        y2="60"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
      />
      <circle cx="100" cy="22" r="5" fill="rgba(255,255,255,0.6)" />

      {/* Beam */}
      <g className="la-beam">
        <line
          x1="30"
          y1="60"
          x2="170"
          y2="60"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Left chain */}
        <line
          x1="45"
          y1="60"
          x2="45"
          y2="80"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
        />
        {/* Right chain */}
        <line
          x1="155"
          y1="60"
          x2="155"
          y2="80"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
        />
      </g>

      {/* Left pan (LOSS) */}
      <g className="la-left-pan">
        <ellipse
          cx="45"
          cy="82"
          rx="24"
          ry="6"
          fill="rgba(255,80,80,0.5)"
          stroke="rgba(255,80,80,0.8)"
          strokeWidth="1.5"
        />
        <text
          x="45"
          y="100"
          textAnchor="middle"
          fill="rgba(255,100,100,0.9)"
          fontSize="11"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          −$100
        </text>
        <text
          x="45"
          y="114"
          textAnchor="middle"
          fill="rgba(255,100,100,0.7)"
          fontSize="7.5"
          fontFamily="sans-serif"
        >
          LOSS
        </text>
      </g>

      {/* Right pan (GAIN) */}
      <g className="la-right-pan">
        <ellipse
          cx="155"
          cy="82"
          rx="24"
          ry="6"
          fill="rgba(80,200,120,0.4)"
          stroke="rgba(80,200,120,0.6)"
          strokeWidth="1.5"
        />
        <text
          x="155"
          y="100"
          textAnchor="middle"
          fill="rgba(100,220,140,0.9)"
          fontSize="11"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          +$50
        </text>
        <text
          x="155"
          y="114"
          textAnchor="middle"
          fill="rgba(100,220,140,0.7)"
          fontSize="7.5"
          fontFamily="sans-serif"
        >
          GAIN
        </text>
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
        svg:hover .rch-zone { opacity: 1; }
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
        svg:hover .fl-path {
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
