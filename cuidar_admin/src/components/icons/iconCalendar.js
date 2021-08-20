import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function CalendarIcon({ size = 'lg', color = '#112D4E', styles = {} }) {
  return <FontAwesomeIcon icon={faCalendarAlt} size={size} style={{ color, ...styles }} />;
}

export default CalendarIcon;
