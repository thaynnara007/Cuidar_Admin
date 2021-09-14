import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

function BedIcon({ size = 'lg', color = '#2a3984', styles = {} }) {
  return <FontAwesomeIcon icon={faBed} size={size} style={{ color, ...styles }} />;
}

export default BedIcon;
