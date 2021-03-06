/* eslint-disable no-param-reassign */

import React from 'react';

function MealIcon({
  color = '#2a3984',
  width = '40px',
  height = '50px',
  viewBox = '0 0 62 50',
  viewBoxLeft,
}) {
  if (viewBoxLeft) {
    const values = viewBox.split(' ');

    viewBox = `${viewBoxLeft} ${values[1]} ${values[2]} ${values[3]}`;
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
        transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M185 491 c-69 -17 -125 -63 -161 -131 -13 -25 -19 -57 -19 -110 0
        -64 4 -82 27 -122 35 -58 95 -103 159 -118 57 -14 128 -6 155 16 18 15 18 15
        -1 8 -11 -4 -46 -9 -78 -12 -139 -11 -249 90 -249 229 0 134 94 229 227 229
        93 0 151 -34 206 -119 16 -25 29 -39 29 -32 0 22 -21 55 -64 99 -58 61 -144
        84 -231 63z"
        />
        <path
          d="M190 399 c-59 -24 -100 -85 -100 -149 0 -110 114 -188 214 -146 22 9
        37 19 33 22 -3 3 -14 1 -25 -5 -33 -17 -104 -13 -139 9 -46 28 -67 65 -67 120
        0 28 7 58 18 74 55 84 185 89 245 9 11 -15 21 -23 21 -17 0 20 -39 61 -74 78
        -38 18 -88 20 -126 5z"
        />
        <path
          d="M345 280 c-10 -17 27 -251 43 -266 17 -18 106 -18 120 -1 12 14 45
        244 38 263 -7 17 -191 20 -201 4z m182 -15 c5 -15 -13 -190 -23 -227 -4 -14
        -16 -18 -59 -18 -52 0 -53 1 -58 32 -18 100 -29 200 -23 213 8 22 154 22 163
        0z"
        />
        <path
          d="M385 170 c3 -5 33 -10 66 -10 33 0 59 4 59 10 0 6 -29 10 -66 10 -41
        0 -63 -4 -59 -10z"
        />
      </g>
    </svg>
  );
}

export default MealIcon;
