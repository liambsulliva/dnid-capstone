import type { ReactNode } from "react";

export function HighballingGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .hb-tag {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-box: fill-box;
          transform-origin: center;
        }
        :is(.patternGridCard:hover svg, svg.active) .hb-tag { transform: scale(1.08); }
        :is(.patternGridCard:hover svg, svg.active) .hb-arrow { transform: translateY(-8px); }
      `}</style>

      {/* Price tag body */}
      <g className="hb-tag">
        <polygon
          points="45,33.5 151,33.5 177,80 153,115 45,115"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
        />
        <circle
          cx="60"
          cy="48"
          r="6"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2.5"
        />
        <text
          x="110"
          y="80"
          textAnchor="middle"
          fill="white"
          fontSize="26"
          fontWeight="bold"
          fontFamily="Sora, sans-serif"
          letterSpacing="-1"
        >
          $999
        </text>
        <text
          x="110"
          y="95"
          textAnchor="middle"
          fill="rgba(255,255,255,0.5)"
          fontSize="10"
          fontFamily="Sora, sans-serif"
        >
          opening offer
        </text>
      </g>
    </svg>
  );
}

export function CentreStageEffectGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .cs-mid {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-box: fill-box;
          transform-origin: center;
        }
        .cs-side { transition: opacity 0.3s ease; }
        :is(.patternGridCard:hover svg, svg.active) .cs-mid { transform: scaleY(1.1) scaleX(1.05); }
        :is(.patternGridCard:hover svg, svg.active) .cs-side { opacity: 0.4; }
      `}</style>

      {/* Left option */}
      <g className="cs-side">
        <rect
          x="12"
          y="50"
          width="50"
          height="74"
          rx="5"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
        />
        <text
          x="37"
          y="83"
          textAnchor="middle"
          fill="rgba(255,255,255,0.65)"
          fontSize="9"
          fontFamily="Sora, sans-serif"
        >
          Basic
        </text>
        <text
          x="37"
          y="100"
          textAnchor="middle"
          fill="rgba(255,255,255,0.55)"
          fontSize="12"
          fontWeight="bold"
          fontFamily="Sora, sans-serif"
        >
          $9/mo
        </text>
      </g>

      {/* Middle highlighted */}
      <g className="cs-mid">
        <rect
          x="72"
          y="32"
          width="56"
          height="96"
          rx="5"
          fill="rgba(255,255,255,0.2)"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="2"
        />
        <rect
          x="80"
          y="22"
          width="40"
          height="17"
          rx="4"
          fill="var(--dnid-brand-400)"
        />
        <text
          x="100"
          y="34"
          textAnchor="middle"
          fill="#1a1a1a"
          fontSize="7.5"
          fontWeight="bold"
          fontFamily="Sora, sans-serif"
        >
          POPULAR
        </text>
        <text
          x="100"
          y="80"
          textAnchor="middle"
          fill="white"
          fontSize="10"
          fontFamily="Sora, sans-serif"
        >
          Pro
        </text>
        <text
          x="100"
          y="99"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="bold"
          fontFamily="Sora, sans-serif"
        >
          $19/mo
        </text>
      </g>

      {/* Right option */}
      <g className="cs-side">
        <rect
          x="138"
          y="50"
          width="50"
          height="74"
          rx="5"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
        />
        <text
          x="163"
          y="80"
          textAnchor="middle"
          fill="rgba(255,255,255,0.65)"
          fontSize="8.5"
          fontFamily="Sora, sans-serif"
        >
          Enterprise
        </text>
        <text
          x="163"
          y="100"
          textAnchor="middle"
          fill="rgba(255,255,255,0.55)"
          fontSize="12"
          fontWeight="bold"
          fontFamily="Sora, sans-serif"
        >
          $49/mo
        </text>
      </g>
    </svg>
  );
}

export function FramingGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <clipPath id="fr-left">
          <path d="M36,28 L82,28 L77,120 L41,120 Z" />
        </clipPath>
        <clipPath id="fr-right">
          <path d="M118,28 L164,28 L159,120 L123,120 Z" />
        </clipPath>
      </defs>
      <style>{`
        .fr-wl {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-box: fill-box;
          transform-origin: bottom center;
        }
        .fr-wr {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-box: fill-box;
          transform-origin: bottom center;
        }
        .fr-ll { transition: fill 0.35s ease; }
        .fr-lr { transition: fill 0.35s ease; }
        :is(.patternGridCard:hover svg, svg.active) .fr-wl { transform: scaleY(1.14); }
        :is(.patternGridCard:hover svg, svg.active) .fr-wr { transform: scaleY(0.8); }
        :is(.patternGridCard:hover svg, svg.active) .fr-ll { fill: rgba(80,220,120,0.95); }
        :is(.patternGridCard:hover svg, svg.active) .fr-lr { fill: rgba(255,100,100,0.95); }
      `}</style>

      {/* Left glass */}
      <path
        d="M36,28 L82,28 L77,120 L41,120 Z"
        fill="none"
        stroke="rgba(255,255,255,0.65)"
        strokeWidth="2"
      />
      <rect
        x="36"
        y="74"
        width="46"
        height="46"
        fill="rgba(100,200,255,0.4)"
        clipPath="url(#fr-left)"
        className="fr-wl"
      />

      {/* Right glass */}
      <path
        d="M118,28 L164,28 L159,120 L123,120 Z"
        fill="none"
        stroke="rgba(255,255,255,0.65)"
        strokeWidth="2"
      />
      <rect
        x="118"
        y="74"
        width="46"
        height="46"
        fill="rgba(100,200,255,0.4)"
        clipPath="url(#fr-right)"
        className="fr-wr"
      />
    </svg>
  );
}

export function PartitioningGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .pt-p { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
        :is(.patternGridCard:hover svg, svg.active) .pt-p1 { transform: translate(-13px, -9px); }
        :is(.patternGridCard:hover svg, svg.active) .pt-p2 { transform: translate(0px, -12px); }
        :is(.patternGridCard:hover svg, svg.active) .pt-p3 { transform: translate(13px, -9px); }
        :is(.patternGridCard:hover svg, svg.active) .pt-p4 { transform: translate(-13px, 9px); }
        :is(.patternGridCard:hover svg, svg.active) .pt-p5 { transform: translate(0px, 12px); }
        :is(.patternGridCard:hover svg, svg.active) .pt-p6 { transform: translate(13px, 9px); }
      `}</style>

      {/* Row 1 */}
      <g className="pt-p pt-p1">
        <rect
          x="24"
          y="26"
          width="46"
          height="50"
          rx="4"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
      </g>
      <g className="pt-p pt-p2">
        <rect
          x="77"
          y="26"
          width="46"
          height="50"
          rx="4"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
      </g>
      <g className="pt-p pt-p3">
        <rect
          x="130"
          y="26"
          width="46"
          height="50"
          rx="4"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
      </g>

      {/* Row 2 */}
      <g className="pt-p pt-p4">
        <rect
          x="24"
          y="84"
          width="46"
          height="50"
          rx="4"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
      </g>
      <g className="pt-p pt-p5">
        <rect
          x="77"
          y="84"
          width="46"
          height="50"
          rx="4"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
      </g>
      <g className="pt-p pt-p6">
        <rect
          x="130"
          y="84"
          width="46"
          height="50"
          rx="4"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
