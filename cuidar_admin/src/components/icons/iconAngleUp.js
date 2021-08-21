import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';

function AngleUp({ size = 'lg', color = '#112D4E', styles = {} }) {
  return <FontAwesomeIcon icon={faAngleUp} size={size} style={{ color, ...styles }} />;
}

export default AngleUp;
