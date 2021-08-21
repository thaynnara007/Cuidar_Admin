import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../../components/navbar';
import Header from '../../components/header';

const useStyles = makeStyles({
  headerTitle: {
    marginTop: '12px',
  },
});

function Users() {
  const classes = useStyles();

  return (
    <Navbar>
      <Header>
        <Typography className={classes.headerTitle} variant="h6">
          Usuários
        </Typography>
      </Header>
    </Navbar>
  );
}

export default Users;
