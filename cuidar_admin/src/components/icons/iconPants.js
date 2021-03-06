/* eslint-disable no-param-reassign */

import React from 'react';

function PantsIcon({
  color = '#2a3984',
  width = '36px',
  height = '50px',
  viewBox = '0 0 62 50',
  viewBoxLeft,
}) {
  if (viewBoxLeft) {
    const values = viewBox.split(' ');

    viewBox = `${viewBoxLeft - 2} ${values[1]} ${values[2]} ${values[3]}`;
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
        transform="translate(0.000000,57.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M81 556 c-13 -16 -85 -501 -77 -521 6 -16 165 -40 178 -27 5 5 16 66
        25 136 9 69 20 123 24 119 5 -6 39 -218 39 -244 0 -16 36 -18 103 -8 40 6 76
        14 80 19 11 10 -50 477 -67 510 -12 25 -13 25 -152 28 -115 2 -143 0 -153 -12z
        m56 -52 c-3 -28 -13 -54 -28 -70 -12 -13 -20 -26 -17 -30 20 -19 75 89 65 127
        -5 18 1 19 73 19 74 0 78 -1 73 -20 -7 -28 24 -108 48 -120 26 -14 24 -4 -6
        32 -17 20 -25 42 -25 69 0 35 3 39 24 39 14 0 27 -3 29 -7 9 -15 69 -484 64
        -497 -7 -18 -138 -31 -148 -15 -3 6 -15 72 -25 145 -28 208 -39 208 -68 -4
        l-21 -147 -70 3 c-38 2 -74 7 -79 12 -8 8 46 456 59 498 3 6 16 12 31 12 26 0
        26 -2 21 -46z"
        />
        <path
          d="M220 495 c0 -25 5 -45 10 -45 6 0 10 20 10 45 0 25 -4 45 -10 45 -5
        0 -10 -20 -10 -45z"
        />
      </g>
    </svg>
  );
}

export default PantsIcon;
