/* eslint-disable no-param-reassign */

import React from 'react';

function LiquidIcon({
  color = '#2a3984',
  width = '36px',
  height = '50px',
  viewBox = '0 0 62 50',
  viewBoxLeft,
}) {
  if (viewBoxLeft) {
    const values = viewBox.split(' ');

    viewBox = `${viewBoxLeft - 10} ${values[1]} ${values[2]} ${values[3]}`;
  }

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
        transform="translate(0.000000,58.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M176 572 c-2 -4 -7 -48 -10 -97 -4 -60 -3 -83 3 -70 5 11 10 39 10
        62 l1 42 31 -11 c28 -10 40 -26 65 -93 7 -19 8 -19 11 3 6 32 -27 84 -65 102
        -17 8 -32 23 -32 33 0 13 8 17 40 17 22 0 40 5 40 10 0 12 -87 14 -94 2z"
        />
        <path
          d="M64 486 c-24 -24 -34 -43 -34 -66 0 -18 4 -29 10 -25 5 3 10 17 10
        31 0 29 41 74 67 74 10 0 25 5 33 10 11 7 7 10 -18 10 -25 0 -43 -9 -68 -34z"
        />
        <path
          d="M7 374 c-12 -12 -8 -43 7 -51 9 -5 18 -54 28 -150 8 -79 21 -149 28
        -158 18 -22 152 -21 174 1 9 8 16 20 16 25 0 5 7 69 16 142 11 91 21 135 31
        142 8 6 14 20 11 31 -3 18 -14 19 -154 22 -82 1 -153 -1 -157 -4z m293 -19 c0
        -13 -22 -15 -140 -15 -118 0 -140 2 -140 15 0 13 22 15 140 15 118 0 140 -2
        140 -15z m-30 -62 c-1 -50 -27 -250 -34 -261 -4 -8 -36 -12 -81 -12 -61 0 -75
        3 -79 18 -6 21 -26 212 -26 253 l0 29 110 0 110 0 0 -27z"
        />
        <path
          d="M89 126 c-4 -4 -3 -21 0 -39 6 -26 12 -32 36 -35 l30 -3 -25 13 c-15
        8 -27 25 -30 42 -3 15 -8 25 -11 22z"
        />
      </g>
    </svg>
  );
}

export default LiquidIcon;
