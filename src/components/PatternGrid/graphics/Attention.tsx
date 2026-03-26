import type { ReactNode } from "react";

export function SalienceBiasGraphic(): ReactNode {
  const dots: { cx: number; cy: number }[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 5; col++) {
      dots.push({ cx: 28 + col * 36, cy: 26 + row * 36 });
    }
  }
  // standout dot at position [1][2] (row 1, col 2)
  const standout = dots[7];

  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .sb-dot { transition: opacity 0.3s ease; }
        .sb-standout {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease;
          transform-box: fill-box;
          transform-origin: center;
        }
        svg:hover .sb-dot { opacity: 0.25; }
        svg:hover .sb-standout {
          transform: scale(1.4);
          filter: drop-shadow(0 0 6px rgba(255,80,80,0.8));
        }
      `}</style>

      {dots.map((d, i) => {
        if (d === standout) return null;
        return (
          <circle
            key={i}
            cx={d.cx}
            cy={d.cy}
            r="11"
            fill="rgba(255,255,255,0.25)"
            className="sb-dot"
          />
        );
      })}

      {/* Standout dot */}
      <circle
        cx={standout.cx}
        cy={standout.cy}
        r="13"
        fill="rgba(255,75,75,0.9)"
        className="sb-standout"
      />
    </svg>
  );
}

export function VisualHierarchyGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .vh-row {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-box: fill-box;
          transform-origin: left center;
        }
        .vh-r1 { transition-delay: 0s; }
        .vh-r2 { transition-delay: 0.05s; }
        .vh-r3 { transition-delay: 0.1s; }
        .vh-r4 { transition-delay: 0.15s; }
        .vh-r5 { transition-delay: 0.2s; }
        svg:hover .vh-row { transform: scaleX(1); opacity: 1; }
        .vh-row { transform: scaleX(0.7); opacity: 0.4; }
        svg:hover .vh-r1 { transform: scaleX(1); opacity: 1; }
        svg:hover .vh-r2 { transform: scaleX(1); opacity: 1; }
        svg:hover .vh-r3 { transform: scaleX(1); opacity: 1; }
        svg:hover .vh-r4 { transform: scaleX(1); opacity: 1; }
        svg:hover .vh-r5 { transform: scaleX(1); opacity: 1; }
      `}</style>

      {/* H1 */}
      <g className="vh-row vh-r1">
        <rect
          x="20"
          y="22"
          width="140"
          height="18"
          rx="4"
          fill="rgba(255,255,255,0.85)"
        />
      </g>

      {/* H2 */}
      <g className="vh-row vh-r2">
        <rect
          x="20"
          y="48"
          width="100"
          height="13"
          rx="3"
          fill="rgba(255,255,255,0.6)"
        />
      </g>

      {/* Body lines */}
      <g className="vh-row vh-r3">
        <rect
          x="20"
          y="70"
          width="160"
          height="8"
          rx="2"
          fill="rgba(255,255,255,0.35)"
        />
      </g>
      <g className="vh-row vh-r4">
        <rect
          x="20"
          y="84"
          width="148"
          height="8"
          rx="2"
          fill="rgba(255,255,255,0.3)"
        />
      </g>
      <g className="vh-row vh-r5">
        <rect
          x="20"
          y="98"
          width="120"
          height="8"
          rx="2"
          fill="rgba(255,255,255,0.25)"
        />
      </g>
    </svg>
  );
}

export function InfiniteScrollGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <clipPath id="is-phone-clip">
          <rect x="62" y="16" width="76" height="128" rx="10" />
        </clipPath>
      </defs>
      <style>{`
        .is-feed {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        svg:hover .is-feed { transform: translateY(-30px); }
      `}</style>

      {/* Phone outline */}
      <rect
        x="62"
        y="16"
        width="76"
        height="128"
        rx="10"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
      />
      {/* Home indicator */}
      <rect
        x="88"
        y="136"
        width="24"
        height="3"
        rx="1.5"
        fill="rgba(255,255,255,0.4)"
      />

      {/* Scrolling feed — clip is on the static outer group so the boundary
          stays fixed at the phone outline while the inner group translates */}
      <g clipPath="url(#is-phone-clip)">
      <g className="is-feed">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect
              x="68"
              y={24 + i * 38}
              width="64"
              height="32"
              rx="4"
              fill="rgba(255,255,255,0.14)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            <rect
              x="73"
              y={29 + i * 38}
              width="20"
              height="6"
              rx="2"
              fill="rgba(255,255,255,0.35)"
            />
            <rect
              x="73"
              y={39 + i * 38}
              width="52"
              height="4"
              rx="2"
              fill="rgba(255,255,255,0.2)"
            />
            <rect
              x="73"
              y={47 + i * 38}
              width="38"
              height="4"
              rx="2"
              fill="rgba(255,255,255,0.15)"
            />
          </g>
        ))}
      </g>
      </g>

      {/* Screen gloss */}
      <rect
        x="62"
        y="16"
        width="76"
        height="128"
        rx="10"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="6"
      />
    </svg>
  );
}

export function RedDotEffectGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        @keyframes rd-bounce {
          0%   { transform: scale(1); }
          60%  { transform: scale(1.35); }
          80%  { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .rd-badge-group {
          transform-box: fill-box;
          transform-origin: center;
        }
        svg:hover .rd-badge-group {
          animation: rd-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      {/* Centered app icon */}
      <rect
        x="74"
        y="54"
        width="52"
        height="52"
        rx="12"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
      />
      <circle cx={100} cy={80} r="12" fill="rgba(255,255,255,0.2)" />

      {/* Badge: circle + number grouped so they bounce together */}
      <g className="rd-badge-group">
        <circle cx="126" cy="54" r="10" fill="var(--dnid-badge-notification)" />
        <text
          x="125"
          y="55"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="10"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          9
        </text>
      </g>
    </svg>
  );
}
