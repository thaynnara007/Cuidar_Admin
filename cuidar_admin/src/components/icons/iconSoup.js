/* eslint-disable no-param-reassign */

import React from 'react';

function SoupIcon({
  color = '#2a3984',
  width = '40px',
  height = '50px',
  viewBox = '0 0 60 50',
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
        transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M80 574 c-14 -35 -12 -57 6 -104 16 -39 15 -52 -2 -95 -7 -17 -6 -18
      8 -7 25 20 30 58 13 98 -17 42 -19 87 -5 115 8 13 7 19 0 19 -6 0 -15 -12 -20
      -26z"
        />
        <path
          d="M162 496 c-10 -36 -5 -83 9 -92 14 -8 11 -78 -3 -93 -11 -11 -10 -13
      2 -9 29 9 35 53 15 112 -15 45 -17 60 -7 81 14 31 15 35 2 35 -5 0 -13 -15
      -18 -34z"
        />
        <path
          d="M397 400 c-69 -73 -79 -80 -114 -80 -22 0 -48 -7 -59 -15 -23 -17 -3
      -20 28 -4 16 8 31 8 60 0 38 -12 39 -12 111 47 94 77 104 89 90 110 -20 33
      -41 22 -116 -58z m103 47 c0 -12 -120 -118 -159 -141 -9 -5 17 27 58 72 69 77
      101 99 101 69z"
        />
        <path
          d="M17 259 c-24 -14 -21 -35 13 -89 52 -81 127 -120 231 -120 46 0 59
      -3 59 -15 0 -12 -15 -15 -75 -15 -60 0 -75 3 -75 15 0 8 -4 15 -10 15 -13 0
      -13 -6 0 -31 9 -16 22 -19 84 -19 76 0 104 13 93 44 -4 9 3 16 18 20 79 20
      174 179 119 200 -27 10 -438 6 -457 -5z m458 -19 c6 -10 -28 -85 -54 -114 -9
      -10 -32 -26 -51 -36 -113 -57 -254 -19 -326 90 -46 69 -44 70 205 70 131 0
      222 -4 226 -10z"
        />
        <path
          d="M60 220 c0 -6 72 -10 196 -10 127 0 193 3 189 10 -8 14 -385 14 -385
      0z"
        />
      </g>
    </svg>
  );
}

export default SoupIcon;
