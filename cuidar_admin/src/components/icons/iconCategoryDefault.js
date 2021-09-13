import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtlas } from '@fortawesome/free-solid-svg-icons';

function CategoryIconDefault({ size = 'lg', color = '#2a3984', styles = {} }) {
  return <FontAwesomeIcon icon={faAtlas} size={size} style={{ color, ...styles }} />;
}

export default CategoryIconDefault;
