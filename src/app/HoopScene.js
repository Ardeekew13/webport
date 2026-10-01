'use client';

import { useEffect, useState } from 'react';
import Basketball from './Basketball';

const DUR = '3.2s';
const RIM_X = 318;
const RIM_Y = 160;

// Net strands, drawn relative to the rim centre.
const NET = (() => {
  const n = 7;
  const top = Array.from({ length: n }, (_, i) => -34 + (68 / (n - 1)) * i);
  const bot = Array.from({ length: n }, (_, i) => -18 + (36 / (n - 1)) * i);
  let d = '';
  for (let i = 0; i < n; i++) {
    d += `M${top[i]} 0 L${bot[i]} 52 `;
    if (i < n - 1) d += `M${top[i]} 0 L${bot[i + 1]} 52 M${top[i + 1]} 0 L${bot[i]} 52 `;
  }
  d += 'M-26 26 L26 26 M-18 52 L18 52';
  return d;
})();

// Ball arcs from the left, drops through the rim and the net swishes. Loops forever.
export default function HoopScene({ className = '' }) {
  const [still, setStill] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setStill(mq.matches);
    const onChange = (e) => setStill(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  return (
    <svg viewBox="0 0 420 420" className={className} role="img" aria-label="Animated basketball swishing through a hoop">
      {/* Floor */}
      <line x1="10" y1="384" x2="410" y2="384" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
      <ellipse cx={RIM_X} cy="386" rx="26" ry="4" fill="currentColor" opacity="0.12" />

      {/* Pole + backboard */}
      <rect x="392" y="140" width="9" height="244" fill="currentColor" opacity="0.35" />
      <rect x="352" y="146" width="44" height="7" fill="currentColor" opacity="0.35" />
      <rect x="270" y="52" width="140" height="96" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="3" />
      <rect x="298" y="96" width="52" height="40" fill="none" stroke="#F26A1B" strokeWidth="3" />

      {/* Rim, back half */}
      <path d={`M${RIM_X - 34} ${RIM_Y} A34 7 0 0 1 ${RIM_X + 34} ${RIM_Y}`} fill="none" stroke="#E8590C" strokeWidth="4" />

      {/* Ball */}
      {still ? (
        <Basketball x={RIM_X - 70} y="352" width="32" height="32" />
      ) : (
        <g>
          <animateMotion
            dur={DUR}
            repeatCount="indefinite"
            path={`M40 340 Q 170 -60 ${RIM_X} 150 L${RIM_X} 366`}
            keyPoints="0;0.69;1;1"
            keyTimes="0;0.5;0.66;1"
            calcMode="spline"
            keySplines="0.25 0.1 0.6 1; 0.5 0 1 1; 0 0 1 1"
          />
          <animate attributeName="opacity" dur={DUR} repeatCount="indefinite" values="0;1;1;1;0;0" keyTimes="0;0.06;0.5;0.68;0.8;1" />
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0" to="-540" dur={DUR} repeatCount="indefinite" />
            <Basketball x="-16" y="-16" width="32" height="32" />
          </g>
        </g>
      )}

      {/* Net */}
      <g transform={`translate(${RIM_X} ${RIM_Y + 2})`}>
        <g>
          {!still && (
            <animateTransform
              attributeName="transform"
              type="scale"
              dur={DUR}
              repeatCount="indefinite"
              values="1 1;1 1;1.07 1.28;0.96 0.9;1 1;1 1"
              keyTimes="0;0.55;0.62;0.72;0.82;1"
            />
          )}
          <path d={NET} fill="none" stroke="currentColor" strokeOpacity="0.75" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      </g>

      {/* Rim, front half */}
      <path d={`M${RIM_X - 34} ${RIM_Y} A34 7 0 0 0 ${RIM_X + 34} ${RIM_Y}`} fill="none" stroke="#F26A1B" strokeWidth="4.5" strokeLinecap="round" />

    </svg>
  );
}
