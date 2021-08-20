import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';

function ActivityIcon({ size = 'lg', color = '#112D4E', styles = {} }) {
  return <FontAwesomeIcon icon={faBookMedical} size={size} style={{ color, ...styles }} />;
}

export default ActivityIcon;
