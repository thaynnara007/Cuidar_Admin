import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

import './login.css';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

function Login() {
  const classes = useStyles();

  return (
    <div className="homepage-background">
      <Container maxWidth="sm" className={classes.root}>
        <p>some</p>
      </Container>
    </div>
  );
}

export default Login;
