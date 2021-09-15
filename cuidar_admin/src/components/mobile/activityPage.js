import React from 'react';

import { makeStyles } from '@material-ui/core';

import Screen from './screen';
import { ActivityButton } from '../styles/buttons.style';
import { getIcon } from '../../utils/util';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: '640px',
  },
  titleStyle: {
    textAlign: 'center',
    margin: '40px 20px 0px 20px',
    fontSize: '55px',
    fontWeight: 'bold',
  },
  subtitleStyle: {
    textAlign: 'center',
    margin: '0px 20px 34px 20px',
    fontSize: '20px',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: '22px',
    margin: '0px 45px',
  },
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

function ActivityScreen({ title, subtitle, description, icon, color, textColor = '#FFFFFF' }) {
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
    <Screen color={color}>
      <div className={classes.box}>
        <div>
          <div className={classes.blueSemiCircle}>
            <div className={classes.whiteCircle}>{handleShowIcon(icon)}</div>
          </div>
          <div>
            <p className={classes.titleStyle} style={{ color: textColor }}>
              {title}
            </p>
            <p className={classes.subtitleStyle} style={{ color: textColor }}>
              {subtitle}
            </p>
            <p className={classes.textStyle} style={{ color: textColor }}>
              {description}
            </p>
          </div>
        </div>
        <ActivityButton>Vamos lá!</ActivityButton>
      </div>
    </Screen>
  );
}

export default ActivityScreen;
