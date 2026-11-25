
"use client";

import { useState } from "react";

type Props = {
  before: string;
  after: string;
  alt: string;
};

export default function BeforeAfterSlider({
  before,
  after,
  alt,
}: Props) {
  const [position, setPosition] = useState(50);

  return (
    <div className="w-full min-w-0 overflow-hidden">

      {/* IMAGE COMPARISON */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">

        {/* AFTER IMAGE */}
        <img
          src={after}
          alt={`${alt} after cleaning`}
         className="absolute inset-0 h-full w-full object-contain bg-slate-100"
        />

        {/* BEFORE IMAGE */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <img
            src={before}
            alt={`${alt} before cleaning`}
            className="absolute inset-0 h-full w-full object-contain bg-slate-100"
          />
        </div>

        {/* LABELS */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-900/80 px-4 py-2 text-xs font-bold text-white">
          BEFORE
        </span>

        <span className="absolute right-3 top-3 z-10 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white">
          AFTER
        </span>

        {/* SLIDER LINE */}
        <div
          className="pointer-events-none absolute bottom-0 top-0 z-10 w-1 bg-white shadow-lg"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-lg">
            ↔
          </div>
        </div>

        {/* INTERACTION */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Slide to compare before and after cleaning"
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />

      </div>

      <p className="px-3 py-3 text-center text-xs text-slate-500">
        Drag the slider to compare the results
      </p>

    </div>
  );
}
