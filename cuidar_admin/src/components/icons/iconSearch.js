import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchIcon({ size = 'lg', color = 'grey', styles = {} }) {
  return <FontAwesomeIcon icon={faSearch} size={size} style={{ color, ...styles }} />;
}

export default SearchIcon;
