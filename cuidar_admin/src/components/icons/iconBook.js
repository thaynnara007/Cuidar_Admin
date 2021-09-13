import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

function BookIcon({ size = 'lg', color = '#2a3984', styles = {} }) {
  return <FontAwesomeIcon icon={faBook} size={size} style={{ color, ...styles }} />;
}

export default BookIcon;
