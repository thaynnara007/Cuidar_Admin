import React from 'react';

function ShowColor({ color, styles }) {
  const style = {
    backgroundColor: color,
    borderRadius: '10px',
    ...styles,
  };

  return <div style={style} />;
}

export default ShowColor;
