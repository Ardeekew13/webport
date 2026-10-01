'use client';

import { useId } from 'react';

// Reusable basketball. Pass x/y/width/height to nest it inside another SVG.
export default function Basketball({ className = '', style, ...rest }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" {...rest}>
      <defs>
        <radialGradient id={`bb-${id}`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFA05C" />
          <stop offset="55%" stopColor="#F26A1B" />
          <stop offset="100%" stopColor="#A63A08" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="47" fill={`url(#bb-${id})`} stroke="#141414" strokeWidth="3" />
      <g fill="none" stroke="#141414" strokeWidth="3" strokeLinecap="round">
        <path d="M50 3 V97" />
        <path d="M3 50 H97" />
        <path d="M17 15 C 37 32, 37 68, 17 85" />
        <path d="M83 15 C 63 32, 63 68, 83 85" />
      </g>
    </svg>
  );
}
