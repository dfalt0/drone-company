"use client";

import { useMemo } from "react";

const GRID_SIZE = 16;
const CELL_PX = 6;
const NEST_OFFSET = 32;

const ZONE_CENTERS = [
  { x: -22, y: -22 },
  { x: 22, y: -22 },
  { x: 22, y: 22 },
  { x: -22, y: 22 },
];

function getNestOffset(nestIndex: number): { x: number; y: number } {
  switch (nestIndex) {
    case 0:
      return { x: -NEST_OFFSET, y: -NEST_OFFSET };
    case 1:
      return { x: NEST_OFFSET, y: -NEST_OFFSET };
    case 2:
      return { x: NEST_OFFSET, y: NEST_OFFSET };
    default:
      return { x: -NEST_OFFSET, y: NEST_OFFSET };
  }
}

function nearestZone(x: number, y: number): number {
  let best = 0;
  let bestD = Infinity;
  ZONE_CENTERS.forEach((c, i) => {
    const d = (c.x - x) ** 2 + (c.y - y) ** 2;
    if (d < bestD) {
      bestD = d;
      best = i;
    }
  });
  return best;
}

export function SwarmAnimation() {
  const { dots, impacts } = useMemo(() => {
    const list: Array<{
      tx: number;
      ty: number;
      cx: number;
      cy: number;
      nx: number;
      ny: number;
      zone: number;
      delay: number;
    }> = [];
    const center = (GRID_SIZE - 1) / 2;
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        const tx = (col - center) * CELL_PX;
        const ty = (row - center) * CELL_PX;
        const zone = nearestZone(tx, ty);
        const nest = getNestOffset(zone);
        list.push({
          tx,
          ty,
          cx: ZONE_CENTERS[zone].x,
          cy: ZONE_CENTERS[zone].y,
          nx: nest.x,
          ny: nest.y,
          zone,
          delay: (row * GRID_SIZE + col) * 4,
        });
      }
    }
    return {
      dots: list,
      impacts: ZONE_CENTERS.map((c, i) => ({ ...c, zone: i })),
    };
  }, []);

  return (
    <div
      className="swarm-animation-container relative flex shrink-0 items-center justify-center overflow-hidden rounded border border-brand-orange/20 bg-brand-black"
      style={{ width: "clamp(200px, 28vw, 280px)", aspectRatio: "16/10" }}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,88,55,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,88,55,0.12) 1px, transparent 1px)
          `,
          backgroundSize: `${CELL_PX * 2}px ${CELL_PX * 2}px`,
          backgroundPosition: "50% 50%",
        }}
      />
      <div className="relative h-full w-full">
        {dots.map((d, i) => (
          <div
            key={i}
            className={`swarm-dot swarm-zone-${d.zone} absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-brand-orange shadow-[0_0_4px_rgba(255,88,55,0.8)]`}
            style={
              {
                ["--tx" as string]: `${d.tx}px`,
                ["--ty" as string]: `${d.ty}px`,
                ["--cx" as string]: `${d.cx}px`,
                ["--cy" as string]: `${d.cy}px`,
                ["--nx" as string]: `${d.nx}px`,
                ["--ny" as string]: `${d.ny}px`,
                animationDelay: `${d.delay}ms`,
              } as React.CSSProperties
            }
          />
        ))}
        {impacts.map((imp, i) => (
          <div
            key={`imp-${i}`}
            className={`swarm-impact swarm-impact-zone-${i} absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/0`}
            style={
              {
                ["--cx" as string]: `${imp.x}px`,
                ["--cy" as string]: `${imp.y}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <div className="absolute bottom-1.5 left-1.5 font-mono text-[8px] uppercase tracking-wider text-brand-orange/50">
        Grid → Intercept → Replenish
      </div>
    </div>
  );
}
