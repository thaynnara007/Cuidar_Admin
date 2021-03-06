/* eslint-disable no-param-reassign */

import React from 'react';

function BodyIcon({
  color = '#2a3984',
  width = '30px',
  height = '50px',
  viewBox = '0 0 39 50',
  viewBoxLeft,
}) {
  if (viewBoxLeft) {
    const values = viewBox.split(' ');

    viewBox = `${viewBoxLeft - 5} ${values[1]} ${values[2]} ${values[3]}`;
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
      <g fill={color}>
        <path d="M1.6 54.4 c-1.3 -1.2 -1.6 -4.1 -1.6 -15.1 l0 -13.5 3.4 -3.4 c1.9 -1.9 4.3 -3.4 5.5 -3.4 3 0 2.6 0.7 -1.9 3 -2.3 1.2 -4.2 3 -4.5 4.3 -0.3 1.2 -0.4 7.8 -0.3 14.7 0.3 11.3 0.5 12.5 2.2 12.8 3 0.6 3.6 -1.6 3.6 -13 0 -6.5 0.4 -10.8 1 -10.8 0.6 0 1 4.4 1 11.3 0 9.8 -0.3 11.6 -1.8 13 -2.3 2.1 -4.6 2.2 -6.6 0.1z" />
        <path d="M31 54 c-1.8 -1.8 -2 -3.3 -2 -13 0 -6.7 0.4 -11 1 -11 0.6 0 1 4.3 1 10.9 0 11.3 1 14.1 4.5 12.7 1.2 -0.4 1.5 -2.9 1.5 -13.6 0 -7.5 -0.5 -14 -1.1 -15.2 -0.6 -1.1 -2.6 -2.6 -4.5 -3.4 -1.9 -0.8 -3.4 -1.8 -3.4 -2.4 0 -1.5 5.7 1 8.4 3.7 2.5 2.5 2.6 2.9 2.6 16.3 0 12 -0.2 13.9 -1.8 15.3 -2.4 2.2 -3.8 2.1 -6.2 -0.3z" />
        <path d="M13.5 16.5 c-4.7 -4.6 -3.2 -13.2 2.7 -15.6 7.1 -2.9 13.9 3.6 11.7 11.4 -1.8 6.8 -9.6 9.1 -14.4 4.2z m11 -1.5 c2.4 -2.7 2.4 -8.3 0 -11 -4.1 -4.5 -11.9 -1.1 -11.9 5.3 0 4.7 2.7 7.7 6.9 7.7 1.9 0 3.9 -0.8 5 -2z" />
      </g>
    </svg>
  );
}

export default BodyIcon;
