import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { HeaderButton } from '../styles/buttons.style';

const useStyles = makeStyles({
  root: {
    borderBottom: 'solid #DBE2EF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '16px',
  },
});

function Header({ children }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {children}
      <HeaderButton variant="outlined">Novo usuário</HeaderButton>
    </Box>
  );
}

export default Header;