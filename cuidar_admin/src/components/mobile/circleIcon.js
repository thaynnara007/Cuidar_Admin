import React from 'react';

import { makeStyles } from '@material-ui/core';
import { getIcon } from '../../utils/util';

const useStyles = makeStyles({
  whiteCircle: {
    height: '70px',
    width: '70px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueSemiCircle: {
    height: '100px',
    width: '100px',
    backgroundColor: '#24267E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px auto',
    borderRadius: '0px 0px 50px 50px',
  },
});

function CircleIcon({ icon }) {
  const classes = useStyles();

  const handleShowIcon = (iconName) => {
    const icon2 = getIcon(iconName);
    const iconComponent = React.cloneElement(icon2, {
      size: '3x',
      width: '60px',
      height: '60px',
      viewBox: '0 0 72 50',
      viewBoxLeft: -10,
    });

    return iconComponent;
  };

  return (
    <div className={classes.blueSemiCircle}>
      <div className={classes.whiteCircle}>{handleShowIcon(icon)}</div>
    </div>
  );
}

export default CircleIcon;
