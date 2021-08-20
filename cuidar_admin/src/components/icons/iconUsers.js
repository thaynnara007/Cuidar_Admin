import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

function UsersIcon({ size = 'lg', color = '#112D4E', styles = {} }) {
  return <FontAwesomeIcon icon={faUsers} size={size} style={{ color, ...styles }} />;
}

export default UsersIcon;
