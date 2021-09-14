import React from 'react';

import { Card, Typography, makeStyles } from '@material-ui/core';

import { CardButton } from '../styles/buttons.style';
import { getIcon } from '../../utils/util';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '310px',
    height: '130px',
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#24267E',
  },
});

function CardOption({ icon, name, description }) {
  const classes = useStyles();

  const iconComponent = getIcon(icon);

  const iconClone = React.cloneElement(iconComponent, {
    size: '3x',
    styles: { marginBottom: '6px' },
    width: '60px',
    height: '60px',
    viewBox: '0 0 72 50',
  });

  return (
    <Card className={classes.root}>
      <div className={classes.div} style={{ width: '40%' }}>
        {iconClone}
        <Typography variant="h6" className={classes.textColor}>
          {name}
        </Typography>
      </div>
      <div className={classes.div} style={{ width: '60%' }}>
        <p
          className={classes.textColor}
          style={{ margin: '0px', fontSize: '13px', marginRight: '5px' }}
        >
          {description}
        </p>
        <CardButton>Iniciar</CardButton>
      </div>
    </Card>
  );
}

export default CardOption;
