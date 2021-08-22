import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../../components/navbar';
import Header from '../../components/header';
import ListUser from '../../components/ListUser';

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
      <div style={{ marginTop: '0px'}}>
        <ListUser />
      </div>
    </Navbar>
  );
}

export default Users;
