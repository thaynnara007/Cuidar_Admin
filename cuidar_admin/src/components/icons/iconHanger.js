import React from 'react';

function HangerIcon({ color = '#2a3984', width = '50px', height = '50px', viewBox = '0 0 72 50' }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M322 384 c-12 -8 -22 -25 -22 -37 1 -21 2 -21 21 6 33 44 79 31 79
        -24 0 -18 -9 -32 -26 -43 -17 -12 -24 -25 -22 -39 2 -17 36 -36 173 -98 133
        -60 171 -81 173 -98 2 -14 -3 -22 -20 -26 -13 -3 -165 -4 -338 -3 l-315 3 0
        24 c0 21 14 30 130 77 169 70 182 76 170 80 -15 6 -308 -114 -317 -129 -13
        -20 -9 -45 9 -63 16 -15 44 -16 348 -10 354 8 364 10 352 58 -5 20 -36 37
        -173 98 -91 41 -169 81 -172 89 -3 8 6 22 21 33 49 36 26 118 -33 118 -9 0
        -26 -7 -38 -16z"
        />
      </g>
    </svg>
  );
}

export default HangerIcon;
