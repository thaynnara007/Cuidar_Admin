import React from 'react';

function MyCalendarIcon({
  color = '#2a3984',
  width = '50px',
  height = '50px',
  viewBox = '0 0 72 50',
}) {
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
          d="M127 493 c-4 -3 -7 -30 -7 -60 0 -57 17 -76 49 -56 20 12 27 89 10
        109 -12 15 -41 19 -52 7z m43 -59 c0 -38 -3 -45 -17 -42 -13 2 -19 15 -21 46
        -3 37 -1 42 17 42 18 0 21 -6 21 -46z"
        />
        <path
          d="M361 486 c-7 -8 -11 -34 -9 -57 3 -45 24 -67 52 -56 23 9 23 112 0
        121 -23 9 -30 8 -43 -8z m49 -51 c0 -38 -3 -45 -20 -45 -17 0 -20 7 -20 45 0
        38 3 45 20 45 17 0 20 -7 20 -45z"
        />
        <path
          d="M26 419 l-26 -20 0 -180 c0 -166 1 -180 20 -199 19 -19 33 -20 250
        -20 217 0 231 1 250 20 19 19 20 33 20 199 l0 180 -26 20 c-28 22 -74 29 -74
        11 0 -5 13 -10 30 -10 55 0 62 -26 58 -215 -2 -134 -6 -168 -18 -175 -8 -5
        -117 -10 -242 -10 -193 0 -229 2 -242 16 -13 13 -16 43 -16 177 0 183 7 207
        61 207 18 0 28 4 24 10 -10 16 -40 11 -69 -11z"
        />
        <path d="M238 423 c17 -2 47 -2 65 0 17 2 3 4 -33 4 -36 0 -50 -2 -32 -4z" />
        <path
          d="M152 333 c65 -2 171 -2 235 0 65 1 12 3 -117 3 -129 0 -182 -2 -118
        -3z"
        />
        <path
          d="M44 276 c-3 -8 -4 -27 -2 -43 3 -25 7 -28 45 -31 35 -3 42 0 48 18 4
        12 4 32 1 46 -5 20 -12 24 -47 24 -25 0 -42 -5 -45 -14z m74 -33 c3 -31 1 -33
        -27 -33 -29 0 -31 3 -31 36 0 33 2 35 28 32 22 -2 28 -8 30 -35z"
        />
        <path
          d="M172 278 c-14 -14 -16 -47 -3 -66 5 -8 23 -12 47 -10 38 3 39 4 39
        43 0 38 -1 40 -35 43 -19 2 -41 -3 -48 -10z m74 -22 c8 -34 -2 -46 -37 -46
        -25 0 -29 4 -29 28 0 35 6 42 36 42 17 0 25 -7 30 -24z"
        />
        <path
          d="M302 278 c-8 -8 -12 -45 -12 -100 0 -104 4 -108 108 -108 91 0 102
        11 102 109 0 107 -4 111 -103 111 -51 0 -88 -5 -95 -12z m166 -7 c9 -5 12 -31
        10 -92 l-3 -84 -79 -3 c-57 -2 -82 1 -87 10 -13 20 -11 152 3 166 14 14 136
        16 156 3z"
        />
        <path
          d="M44 156 c-3 -8 -4 -27 -2 -43 3 -25 7 -28 45 -31 35 -3 42 0 48 18 4
        12 4 32 1 46 -5 20 -12 24 -47 24 -25 0 -42 -5 -45 -14z m71 -31 c0 -25 -4
        -30 -27 -33 -26 -3 -28 -1 -28 33 0 34 2 36 28 33 23 -3 27 -8 27 -33z"
        />
        <path
          d="M164 146 c-3 -13 -3 -34 1 -46 6 -18 13 -21 48 -18 42 3 42 3 42 43
        0 40 0 40 -42 43 -38 3 -43 0 -49 -22z m82 -12 c8 -31 -6 -47 -37 -42 -43 6
        -38 68 5 68 19 0 27 -7 32 -26z"
        />
      </g>
    </svg>
  );
}

export default MyCalendarIcon;
