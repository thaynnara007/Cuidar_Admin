/* eslint-disable no-param-reassign */

import React from 'react';

function ShirtIcon({
  color = '#2a3984',
  width = '36px',
  height = '50px',
  viewBox = '0 0 62 50',
  viewBoxLeft,
}) {
  if (viewBoxLeft) {
    const values = viewBox.split(' ');

    viewBox = `${viewBoxLeft + 5} ${values[1]} ${values[2]} ${values[3]}`;
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
          d="M171 557 c-23 -7 -52 -35 -98 -91 -36 -45 -68 -87 -71 -94 -5 -14 74
      -102 92 -102 5 0 18 8 29 17 20 18 20 17 14 -32 -20 -163 -20 -199 1 -225 20
      -24 24 -25 164 -28 132 -3 146 -2 169 16 24 20 24 23 21 149 -3 103 -1 126 9
      116 7 -7 21 -13 30 -13 18 0 89 73 89 91 0 6 -29 48 -65 94 -61 78 -97 105
      -142 105 -8 0 -28 -13 -45 -30 -40 -41 -75 -39 -118 5 -19 19 -36 35 -39 34
      -4 -1 -21 -6 -40 -12z m74 -43 c33 -31 43 -35 73 -30 20 3 49 18 66 34 29 27
      34 29 64 18 24 -8 51 -35 93 -91 32 -43 59 -81 59 -85 0 -3 -16 -21 -35 -40
      -31 -30 -38 -33 -55 -22 -41 25 -43 18 -36 -114 10 -170 16 -164 -163 -164
      -75 0 -141 4 -147 8 -27 18 -30 45 -17 159 11 93 11 118 1 124 -7 5 -20 2 -29
      -7 -8 -7 -20 -14 -24 -14 -13 0 -75 62 -75 74 0 20 122 161 149 173 37 16 34
      17 76 -23z"
        />
        <path
          d="M40 384 c0 -6 16 -25 35 -44 19 -19 35 -29 35 -24 0 6 -16 25 -35 44
      -19 19 -35 29 -35 24z"
        />
        <path
          d="M535 350 c-16 -16 -25 -33 -22 -37 8 -7 67 45 67 59 0 16 -17 8 -45
      -22z"
        />
      </g>
    </svg>
  );
}

export default ShirtIcon;
