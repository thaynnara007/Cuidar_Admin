import React from 'react';

import { makeStyles } from '@material-ui/core';

import Screen from './screen';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleStyle: {
    textAlign: 'center',
    margin: '67px 0px 14px 0px',
    fontSize: '40px',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: '14px',
    margin: '0px 50px',
  },
});

function CategoryScreen({ title, description, color, textColor = '#FFFFFF' }) {
  const classes = useStyles();

  return (
    <Screen color={color}>
      <div className={classes.box}>
        <p className={classes.titleStyle} style={{ color: textColor }}>
          {title}
        </p>
        <p className={classes.textStyle} style={{ color: textColor }}>
          {description}
        </p>
      </div>
    </Screen>
  );
}

export default CategoryScreen;
