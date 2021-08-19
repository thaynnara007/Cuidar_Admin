/* eslint consistent-return: off */

import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

import Login from '../../components/login';
import RecoveryPassword from '../../components/recoveryPassword';

import './enterPage.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function Enter() {
  const style = useStyles();

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="login-background">
      <Container maxWidth="xs" className={style.root}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bazart-6b8a5.appspot.com/o/cuidar-logo.png?alt=media&token=91e874ec-99c2-40ec-9f88-3b489f0ad258"
          className="login-logo"
          alt="cuidar's logo"
        />

        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          containerStyle={{ width: '100%' }}
        >
          <Login />
          <RecoveryPassword />
        </ReactCardFlip>
      </Container>
    </div>
  );
}

export default Enter;
