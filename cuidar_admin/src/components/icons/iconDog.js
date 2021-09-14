import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';

function DogIcon({ size = 'lg', color = '#2a3984', styles = {} }) {
  return <FontAwesomeIcon icon={faDog} size={size} style={{ color, ...styles }} />;
}

export default DogIcon;
