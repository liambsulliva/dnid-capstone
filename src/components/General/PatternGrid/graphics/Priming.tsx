import type { ReactNode } from "react";

export function CuratedDefaultsGraphic(): ReactNode {
  const options = [
    { label: "Share data with partners", checked: true, highlight: true },
    { label: "Receive marketing emails", checked: true, highlight: true },
    { label: "Enable location tracking", checked: true, highlight: true },
    { label: "Personalized ads", checked: false, highlight: false },
  ];

  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .cd-row-hi {
          transition: filter 0.35s ease;
        }
        .cd-row-hi rect.cd-box {
          transition: stroke 0.35s ease, fill 0.35s ease;
        }
        :is(svg:hover, svg.active) .cd-row-hi { filter: drop-shadow(0 0 5px var(--dnid-brand-300)); }
        :is(svg:hover, svg.active) .cd-box-hi { stroke: var(--dnid-brand-300); fill: var(--dnid-brand-300); }
      `}</style>

      {options.map((opt, i) => (
        <g key={i} className={opt.highlight ? "cd-row-hi" : ""}>
          {/* Row bg */}
          <rect
            x="16"
            y={26 + i * 30}
            width="168"
            height="22"
            rx="4"
            fill="var(--dnid-surface-card)"
            stroke={
              opt.highlight
                ? "var(--dnid-brand-300)"
                : "var(--dnid-neutral-300)"
            }
            strokeWidth="1"
            className={opt.highlight ? "cd-box cd-box-hi" : "cd-box"}
          />
          {/* Checkbox */}
          <rect
            x="24"
            y={31 + i * 30}
            width="12"
            height="12"
            rx="2"
            fill={
              opt.checked ? "var(--dnid-brand-300)" : "var(--dnid-neutral-300)"
            }
            stroke={
              opt.checked ? "var(--dnid-brand-300)" : "var(--dnid-neutral-300)"
            }
            strokeWidth="1.5"
          />
          {opt.checked && (
            <text
              x="30"
              y={40 + i * 30}
              textAnchor="middle"
              fill="var(--dnid-text-card)"
              fontSize="9"
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              ✓
            </text>
          )}
          <text
            x="44"
            y={41 + i * 30}
            fill={
              opt.highlight
                ? "var(--dnid-text-card)"
                : "var(--dnid-neutral-300)"
            }
            fontSize="8.5"
            fontFamily="sans-serif"
          >
            {opt.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function AvailabilityHeuristicGraphic(): ReactNode {
  const memories = [
    { x: 58, y: 45, r: 22, bright: true, label: "Plane crash" },
    { x: 140, y: 50, r: 18, bright: true, label: "Lottery win" },
    { x: 60, y: 105, r: 13, bright: false, label: "Car crash" },
    { x: 100, y: 95, r: 11, bright: false, label: "Heart disease" },
    { x: 148, y: 106, r: 16, bright: true, label: "Shark attack" },
  ];

  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .ah-bright {
          transition: filter 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-box: fill-box;
          transform-origin: center;
        }
        .ah-dim { transition: opacity 0.4s ease; }
        :is(svg:hover, svg.active) .ah-bright {
          filter: drop-shadow(0 0 8px rgba(255,200,50,0.75));
          transform: scale(1.12);
        }
        :is(svg:hover, svg.active) .ah-dim { opacity: 0.3; }
      `}</style>

      {/* Brain outline */}
      <path
        d="M38,90 C38,50 55,22 100,20 C145,22 162,50 162,90 C162,120 148,140 130,145 L100,148 L70,145 C52,140 38,120 38,90 Z"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
      />
      {/* Brain folds */}
      <path
        d="M70,40 C75,60 65,70 75,85"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <path
        d="M100,30 C95,50 105,65 100,80"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <path
        d="M130,40 C125,60 135,70 125,85"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />

      {memories.map((m, i) =>
        m.bright ? (
          <g key={i} className="ah-bright">
            <circle
              cx={m.x}
              cy={m.y}
              r={m.r}
              fill="rgba(255,200,50,0.25)"
              stroke="rgba(255,200,50,0.8)"
              strokeWidth="1.5"
            />
            <text
              x={m.x}
              y={m.y + 4}
              textAnchor="middle"
              fill="rgba(255,220,100,0.9)"
              fontSize="7"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              {m.label}
            </text>
          </g>
        ) : (
          <g key={i} className="ah-dim">
            <circle
              cx={m.x}
              cy={m.y}
              r={m.r}
              fill="rgba(255,255,255,0.08)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            <text
              x={m.x}
              y={m.y + 3}
              textAnchor="middle"
              fill="rgba(255,255,255,0.35)"
              fontSize="6"
              fontFamily="sans-serif"
            >
              {m.label}
            </text>
          </g>
        ),
      )}
    </svg>
  );
}

export function MereExposureEffectGraphic(): ReactNode {
  const instances = [
    { x: 30, y: 36, size: 18, opacity: 0.25 },
    { x: 72, y: 30, size: 22, opacity: 0.4 },
    { x: 118, y: 24, size: 28, opacity: 0.6 },
    { x: 155, y: 18, size: 34, opacity: 0.9 },
  ];

  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .me-extra {
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          opacity: 0;
          transform: translateX(20px) scale(0.8);
          transform-box: fill-box;
          transform-origin: center;
        }
        .me-label {
          transition: opacity 0.4s ease;
          opacity: 0;
        }
        :is(svg:hover, svg.active) .me-extra { opacity: 1; transform: translateX(0) scale(1); }
        :is(svg:hover, svg.active) .me-label { opacity: 1; }
      `}</style>

      {/* Label */}
      <text
        x="16"
        y="100"
        fill="rgba(255,255,255,0.3)"
        fontSize="7.5"
        fontFamily="sans-serif"
      >
        1st
      </text>
      <text
        x="58"
        y="100"
        fill="rgba(255,255,255,0.45)"
        fontSize="7.5"
        fontFamily="sans-serif"
      >
        2nd
      </text>
      <text
        x="104"
        y="100"
        fill="rgba(255,255,255,0.6)"
        fontSize="7.5"
        fontFamily="sans-serif"
      >
        3rd
      </text>
      <text
        x="142"
        y="100"
        fill="rgba(255,255,255,0.85)"
        fontSize="7.5"
        fontFamily="sans-serif"
      >
        4th
      </text>

      {instances.map((inst, i) => (
        <g key={i}>
          {/* Logo circle */}
          <circle
            cx={inst.x + inst.size / 2}
            cy={inst.y + inst.size / 2}
            r={inst.size / 2}
            fill={`rgba(255,255,255,${inst.opacity * 0.12})`}
            stroke={`rgba(255,255,255,${inst.opacity})`}
            strokeWidth="2"
          />
          {/* Brand letter */}
          <text
            x={inst.x + inst.size / 2}
            y={inst.y + inst.size / 2 + 5}
            textAnchor="middle"
            fill={`rgba(255,255,255,${inst.opacity})`}
            fontSize={inst.size * 0.55}
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            B
          </text>
        </g>
      ))}

      {/* Familiarity curve */}
      <path
        d="M39,106 Q80,118 128,112 Q158,108 183,95"
        fill="none"
        stroke="rgba(255,200,50,0.5)"
        strokeWidth="1.5"
        strokeDasharray="4,3"
      />

      {/* 5th repetition (appears on hover) */}
      <g className="me-extra">
        <circle
          cx="188"
          cy="34"
          r="20"
          fill="rgba(255,255,255,0.14)"
          stroke="rgba(255,200,50,0.9)"
          strokeWidth="2.5"
        />
        <text
          x="188"
          y="42"
          textAnchor="middle"
          fill="rgba(255,200,50,0.95)"
          fontSize="18"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          B
        </text>
      </g>
      <text
        x="188"
        y="97"
        textAnchor="middle"
        fill="rgba(255,200,50,0.8)"
        fontSize="7.5"
        fontFamily="sans-serif"
        className="me-label"
      >
        5th
      </text>

      <text
        x="100"
        y="148"
        textAnchor="middle"
        fill="rgba(255,255,255,0.35)"
        fontSize="8"
        fontFamily="sans-serif"
      >
        Familiarity breeds preference
      </text>
    </svg>
  );
}

export function MoodCongruenceGraphic(): ReactNode {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <style>{`
        .mc-happy { transition: opacity 0.5s ease; }
        .mc-sad { transition: opacity 0.5s ease; opacity: 0; }
        .mc-warm { transition: fill 0.5s ease, opacity 0.5s ease; }
        .mc-cool { transition: opacity 0.5s ease; opacity: 0; }
        .mc-rays {
          transition: opacity 0.5s ease;
          transform-box: fill-box;
          transform-origin: center;
        }
        :is(svg:hover, svg.active) .mc-happy { opacity: 0; }
        :is(svg:hover, svg.active) .mc-sad { opacity: 1; }
        :is(svg:hover, svg.active) .mc-warm { fill: rgba(150,160,180,0.6); }
        :is(svg:hover, svg.active) .mc-rays { opacity: 0; }
        :is(svg:hover, svg.active) .mc-cool { opacity: 1; }
      `}</style>

      {/* Sun rays */}
      <g className="mc-rays">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={100 + 30 * Math.cos(rad)}
              y1={52 + 30 * Math.sin(rad)}
              x2={100 + 42 * Math.cos(rad)}
              y2={52 + 42 * Math.sin(rad)}
              stroke="rgba(255,200,50,0.65)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* Happy face */}
      <g className="mc-happy">
        <circle
          cx="100"
          cy="52"
          r="24"
          fill="rgba(255,200,50,0.3)"
          stroke="rgba(255,200,50,0.85)"
          strokeWidth="2"
        />
        <circle cx="92" cy="46" r="3" fill="rgba(255,220,80,0.9)" />
        <circle cx="108" cy="46" r="3" fill="rgba(255,220,80,0.9)" />
        <path
          d="M91,58 Q100,66 109,58"
          fill="none"
          stroke="rgba(255,220,80,0.9)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Sad face (appears on hover) */}
      <g className="mc-sad">
        <circle
          cx="100"
          cy="52"
          r="24"
          fill="rgba(100,120,180,0.3)"
          stroke="rgba(100,120,200,0.7)"
          strokeWidth="2"
        />
        <circle cx="92" cy="46" r="3" fill="rgba(150,170,220,0.9)" />
        <circle cx="108" cy="46" r="3" fill="rgba(150,170,220,0.9)" />
        <path
          d="M91,64 Q100,56 109,64"
          fill="none"
          stroke="rgba(150,170,220,0.9)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Rain drops */}
        <line
          x1="88"
          y1="78"
          x2="85"
          y2="90"
          stroke="rgba(100,150,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="100"
          y1="80"
          x2="97"
          y2="94"
          stroke="rgba(100,150,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="112"
          y1="78"
          x2="109"
          y2="90"
          stroke="rgba(100,150,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Memory/content items below */}
      {[
        { x: 24, y: 100, w: 44, label: "Memories" },
        { x: 78, y: 100, w: 44, label: "Decisions" },
        { x: 132, y: 100, w: 44, label: "Recall" },
      ].map((item, i) => (
        <g key={i}>
          <rect
            x={item.x}
            y={item.y}
            width={item.w}
            height="30"
            rx="5"
            fill="rgba(255,200,50,0.2)"
            stroke="rgba(255,200,50,0.55)"
            strokeWidth="1.5"
            className="mc-warm"
          />
          <rect
            x={item.x}
            y={item.y}
            width={item.w}
            height="30"
            rx="5"
            fill="rgba(100,120,180,0.1)"
            stroke="rgba(100,120,200,0.35)"
            strokeWidth="1.5"
            className="mc-cool"
          />
          <text
            x={item.x + item.w / 2}
            y={item.y + 19}
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="8"
            fontFamily="sans-serif"
          >
            {item.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
