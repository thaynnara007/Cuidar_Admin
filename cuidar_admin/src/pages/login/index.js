import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles, TextField, withStyles } from '@material-ui/core';

import './login.css';

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#112D4E',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#112D4E',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#F9F7F7',
      },
      '&:hover fieldset': {
        borderColor: '#DBE2EF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#112D4E',
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important',
      },
    },
  },
})(TextField);

const CustomButton = withStyles({
  root: {
    color: '#F9F7F7',
    backgroundColor: '#112D4E',
    '&:hover': {
      backgroundColor: '#3F72AF',
    },
  },
})(Button);

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottomSpace: {
    marginBottom: '30px',
  },
});

function Login() {
  const style = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-background">
      <Container maxWidth="xs" className={style.root}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bazart-6b8a5.appspot.com/o/cuidar-logo.png?alt=media&token=91e874ec-99c2-40ec-9f88-3b489f0ad258"
          className="login-logo"
          alt="cuidar's logo"
        />
        <form
          style={{ marginTop: '60px', flexDirection: 'column', display: 'flex', width: '100%' }}
        >
          <CustomTextField
            className={style.bottomSpace}
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomTextField
            className={style.bottomSpace}
            label="Senha"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomButton size="large" className={style.bottomSpace}>
            Entrar
          </CustomButton>
          <a className="login-forget-password">Esqueceu a senha?</a>
        </form>
      </Container>
    </div>
  );
}

export default Login;
