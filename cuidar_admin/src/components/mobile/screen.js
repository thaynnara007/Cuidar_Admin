import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  screen: {
    minHeight: '640px',
    width: '360px',
  },
});

function Screen({ color, children }) {
  const classes = useStyles();

  return (
    <Box className={classes.screen} style={{ backgroundColor: color }}>
      {children}
    </Box>
  );
}

export default Screen;
