import React from 'react';

import { makeStyles } from '@material-ui/core';

import Screen from './screen';
import { BeforeButton, NextStepButton } from '../styles/buttons.style';
import CircleIcon from './circleIcon';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    minHeight: '640px',
  },
  contentbox: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleStyle: {
    textAlign: 'center',
    margin: '18px 20px 3px 20px',
    fontSize: '30px',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: '24px',
    margin: '3px 45px',
  },
  imageStyle: {
    width: '281px',
    height: '253px',
    margin: '0 auto',
  },
});

function StepScreen({ title, image, description, icon, color, textColor = '#FFFFFF' }) {
  const classes = useStyles();

  return (
    <Screen color={color}>
      <div className={classes.box}>
        <div>
          <CircleIcon icon={icon} />
          <div className={classes.contentbox}>
            <p className={classes.titleStyle} style={{ color: textColor }}>
              {title}
            </p>
            <img
              className={classes.imageStyle}
              src={image}
              alt="imagem descrevendo o que é para ser feito"
            />
            <p className={classes.textStyle} style={{ color: textColor }}>
              {description}
            </p>
          </div>
        </div>
        <NextStepButton>Próximo passo</NextStepButton>
        <BeforeButton>Anterior</BeforeButton>
      </div>
    </Screen>
  );
}

export default StepScreen;
