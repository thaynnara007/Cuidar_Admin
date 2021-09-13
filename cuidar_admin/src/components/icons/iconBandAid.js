import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandAid } from '@fortawesome/free-solid-svg-icons';

function BandAidIcon({ size = 'lg', color = '#2a3984', styles = {} }) {
  return <FontAwesomeIcon icon={faBandAid} size={size} style={{ color, ...styles }} />;
}

export default BandAidIcon;
