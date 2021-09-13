import React from 'react';

import { Card, Typography, makeStyles } from '@material-ui/core';

import MealIcon from '../icons/iconMeal';
import { CardButton } from '../styles/buttons.style';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '295px',
    height: '126px',
  },
  div: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#24267E',
  },
});

function CardOption() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.div}>
        <MealIcon width="60px" height="60px" viewBox="0 0 62 50" />
        <Typography variant="h6" className={classes.textColor}>
          Refeições
        </Typography>
      </div>
      <div className={classes.div}>
        <Typography variant="caption" className={classes.textColor}>
          Aqui você encontra alimentos sólidos, líquidos e pastosos.
        </Typography>
        <CardButton>Iniciar</CardButton>
      </div>
    </Card>
  );
}

export default CardOption;
