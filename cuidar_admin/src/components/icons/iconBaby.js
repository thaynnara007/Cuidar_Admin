import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

function BabyIcon({ size = 'lg', color = '#112D4E', styles = {} }) {
  return <FontAwesomeIcon icon={faBaby} size={size} style={{ color, ...styles }} />;
}

export default BabyIcon;
