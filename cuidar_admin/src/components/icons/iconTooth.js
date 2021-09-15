/* eslint-disable no-param-reassign */

import React from 'react';

function ToothIcon({
  color = '#2a3984',
  width = '50px',
  height = '50px',
  viewBox = '0 0 72 50',
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
          d="M63 558 c-13 -6 -32 -31 -44 -55 -18 -37 -21 -56 -16 -112 6 -68 33
        -155 47 -146 4 2 -1 28 -11 57 -35 101 -18 215 35 240 20 9 38 8 79 -2 51 -12
        110 -10 169 5 42 11 77 -2 98 -38 27 -44 25 -110 -6 -204 -14 -43 -31 -120
        -38 -171 -7 -51 -18 -98 -24 -104 -16 -16 -39 27 -59 108 -25 105 -60 132
        -102 78 -22 -28 -51 -112 -51 -148 0 -12 -4 -27 -9 -35 -16 -26 -38 5 -46 64
        -3 30 -11 55 -16 55 -6 0 -8 -18 -3 -48 9 -62 20 -91 39 -98 25 -10 43 14 55
        74 7 31 20 76 31 100 15 35 23 43 41 40 19 -2 26 -14 39 -71 22 -89 38 -126
        59 -137 31 -16 51 20 62 111 5 46 23 125 39 177 32 105 36 147 15 196 -16 38
        -60 76 -89 76 -11 0 -44 -7 -73 -16 -44 -14 -59 -15 -95 -5 -66 19 -102 22
        -126 9z"
        />
        <path
          d="M176 473 c19 -14 71 -17 98 -7 32 12 14 19 -50 19 -56 1 -63 -1 -48
        -12z"
        />
      </g>
    </svg>
  );
}

export default ToothIcon;
