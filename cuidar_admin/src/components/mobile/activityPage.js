import React from 'react';

import { makeStyles } from '@material-ui/core';

import Screen from './screen';
import { ActivityButton } from '../styles/buttons.style';

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
    margin: '157px 20px 0px 20px',
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
  buttonBox: {
    height: '20%',
  },
});

function ActivityScreen({ title, subtitle, description, color, textColor = '#FFFFFF' }) {
  const classes = useStyles();

  return (
    <Screen color={color}>
      <div className={classes.box}>
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
        <ActivityButton>Vamos lá!</ActivityButton>
      </div>
    </Screen>
  );
}

export default ActivityScreen;
