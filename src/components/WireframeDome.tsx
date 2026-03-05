"use client";

import { useMemo } from "react";

const W = 320;
const H = 220;
const CX = W / 2;
const CY = H / 2 - 10;
const R = 88;

function project(phi: number, theta: number): { x: number; y: number } {
  const x = R * Math.sin(phi) * Math.cos(theta);
  const y = R * (1 - Math.cos(phi));
  return { x: CX + x, y: CY + y };
}

export function WireframeDome() {
  const { latSegments, longLines, points, cubeLines } = useMemo(() => {
    const latSegments: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];
    for (let i = 1; i <= 4; i++) {
      const phi = (Math.PI / 2) * (i / 5);
      const rx = R * Math.sin(phi);
      const y = CY + R * (1 - Math.cos(phi));
      latSegments.push(
        { x1: CX - rx, y1: y, x2: CX + rx, y2: y }
      );
    }
    const longLines: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];
    const sphereCenterY = CY + R;
    for (let i = 0; i < 12; i++) {
      const theta = (i / 12) * Math.PI * 2;
      const edge = project(Math.PI / 2, theta);
      longLines.push({ x1: CX, y1: sphereCenterY, x2: edge.x, y2: edge.y });
    }
    const points: Array<{ x: number; y: number }> = [];
    for (let pi = 1; pi <= 5; pi++) {
      const phi = (Math.PI / 2) * (pi / 6);
      for (let ti = 0; ti < (pi === 5 ? 12 : 8); ti++) {
        const theta = (ti / (pi === 5 ? 12 : 8)) * Math.PI * 2;
        points.push(project(phi, theta));
      }
    }
    const s = 18;
    const cubeLines = [
      { x1: CX - s, y1: CY - s, x2: CX + s, y2: CY - s },
      { x1: CX + s, y1: CY - s, x2: CX + s, y2: CY + s },
      { x1: CX + s, y1: CY + s, x2: CX - s, y2: CY + s },
      { x1: CX - s, y1: CY + s, x2: CX - s, y2: CY - s },
      { x1: CX - s, y1: CY - s, x2: CX - s * 0.6, y2: CY - s * 1.4 },
      { x1: CX + s, y1: CY - s, x2: CX + s * 0.6, y2: CY - s * 1.4 },
      { x1: CX + s, y1: CY + s, x2: CX + s * 0.6, y2: CY + s * 0.6 },
      { x1: CX - s, y1: CY + s, x2: CX - s * 0.6, y2: CY + s * 0.6 },
      { x1: CX - s * 0.6, y1: CY - s * 1.4, x2: CX + s * 0.6, y2: CY - s * 1.4 },
      { x1: CX + s * 0.6, y1: CY - s * 1.4, x2: CX + s * 0.6, y2: CY + s * 0.6 },
      { x1: CX + s * 0.6, y1: CY + s * 0.6, x2: CX - s * 0.6, y2: CY + s * 0.6 },
      { x1: CX - s * 0.6, y1: CY + s * 0.6, x2: CX - s * 0.6, y2: CY - s * 1.4 },
    ];
    return { latSegments, longLines, points, cubeLines };
  }, []);

  return (
    <div
      className="wireframe-dome-container relative flex w-full items-center justify-center overflow-hidden rounded border border-brand-orange/20 bg-black"
      style={{ aspectRatio: `${W}/${H}`, maxWidth: "640px" }}
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-full w-full"
        style={{ filter: "drop-shadow(0 0 1px rgba(139, 255, 129, 0.3))" }}
      >
        <defs>
          <linearGradient id="dome-glow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 255, 129, 0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="glow-green">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Dome fill subtle */}
        <ellipse cx={CX} cy={CY + R} rx={R} ry={R * 0.4} fill="url(#dome-glow)" />
        {/* Latitude arcs (horizontal curves in front view) */}
        {latSegments.map((seg, i) => (
          <line
            key={`lat-${i}`}
            x1={seg.x1}
            y1={seg.y1}
            x2={seg.x2}
            y2={seg.y2}
            stroke="#8BFF81"
            strokeWidth="0.6"
            strokeOpacity="0.7"
            className="wireframe-dome-line"
          />
        ))}
        {/* Longitude lines */}
        {longLines.map((l, i) => (
          <line
            key={`long-${i}`}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#8BFF81"
            strokeWidth="0.5"
            strokeOpacity="0.6"
            className="wireframe-dome-line"
          />
        ))}
        {/* Dome outline (semicircle opening up) */}
        <path
          d={`M ${CX - R} ${CY + R} A ${R} ${R} 0 0 1 ${CX + R} ${CY + R}`}
          fill="none"
          stroke="#8BFF81"
          strokeWidth="1.2"
          strokeOpacity="0.9"
          className="wireframe-dome-line"
        />
        {/* Grid points (drones) */}
        {points.map((p, i) => (
          <g key={`pt-${i}`} filter="url(#glow-green)">
            <rect
              x={p.x - 2}
              y={p.y - 2}
              width={4}
              height={4}
              fill="#8BFF81"
              opacity="0.9"
              transform={`rotate(45 ${p.x} ${p.y})`}
              className="wireframe-dome-point"
            />
          </g>
        ))}
        {/* White wireframe cube (target) */}
        <g className="wireframe-dome-cube">
          {cubeLines.map((l, i) => (
            <line
              key={`cube-${i}`}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="rgba(255,255,255,0.95)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          ))}
        </g>
        {/* Red threat indicators */}
        <polygon
          points={`${CX - 35},${CY - 25} ${CX - 25},${CY - 35} ${CX - 25},${CY - 15}`}
          fill="none"
          stroke="#FF5837"
          strokeWidth="0.8"
          strokeOpacity="0.8"
          className="wireframe-dome-threat"
        />
        <polygon
          points={`${CX + 50},${CY + 20} ${CX + 60},${CY + 10} ${CX + 60},${CY + 30}`}
          fill="none"
          stroke="#FF5837"
          strokeWidth="0.8"
          strokeOpacity="0.8"
          className="wireframe-dome-threat"
        />
      </svg>
      <div className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-wider text-[#8BFF81]/60">
        Coverage · Network
      </div>
    </div>
  );
}
