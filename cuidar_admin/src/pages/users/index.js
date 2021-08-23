import React, { useState } from 'react';

import { Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../../components/navbar';
import Header from '../../components/header';
import ListUser from '../../components/ListUser';
import CreateUser from '../../components/createUser';
import ArrowLeftIcon from '../../components/icons/iconArrowLeft';

const useStyles = makeStyles({
  headerTitle: {
    marginTop: '12px',
  },
});

function Users() {
  const classes = useStyles();
  const [state, setState] = useState('list_user');

  return (
    <Navbar>
      <Header
        buttonName={state === 'list_user' ? 'Novo usuário' : 'Registrar usuário'}
        onClick={() => setState('create_user')}
      >
        {state === 'list_user' ? (
          <Typography className={classes.headerTitle} variant="h4">
            Usuários
          </Typography>
        ) : (
          <IconButton color="inherit" onClick={() => setState('list_user')}>
            <ArrowLeftIcon />
          </IconButton>
        )}
      </Header>
      <div>{state === 'list_user' ? <ListUser /> : <CreateUser />}</div>
    </Navbar>
  );
}

export default Users;
