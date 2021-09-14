import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage } from '@fortawesome/free-solid-svg-icons';

function BabyCarriageIcon({ size = 'lg', color = '#2a3984', styles = {} }) {
  return <FontAwesomeIcon icon={faBabyCarriage} size={size} style={{ color, ...styles }} />;
}

export default BabyCarriageIcon;
