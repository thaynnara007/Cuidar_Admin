import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ArrowLeftIcon({ size = 'lg', color = '#112D4E', styles = {} }) {
  return <FontAwesomeIcon icon={faArrowLeft} size={size} style={{ color, ...styles }} />;
}

export default ArrowLeftIcon;
