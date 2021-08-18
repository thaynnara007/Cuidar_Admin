/* eslint consistent-return: off */

import { toast } from 'react-toastify';
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, TextField, withStyles } from '@material-ui/core';

import { login } from '../../api';

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
  center: {
    alignSelf: 'center',
  },
});

function Login() {
  const style = useStyles();

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = () => {
    const validated = !email || email === '';
    setErrorEmail(validated);

    return !validated;
  };

  const validatePassword = () => {
    const validated = !password || password === '';
    setErrorPassword(validated);

    return !validated;
  };

  const validateInputs = () => validateEmail() && validatePassword();

  const auth = async () => {
    if (validateInputs()) {
      const result = await login(email, password, setIsLoading);

      if (result) {
        const { token, user } = result.data;

        await localStorage.setItem('cuidar_access_token', token);

        toast(`Bem-vindo de volta ${user.name}!`);
        window.location.replace('/home');
      }
    }
  };

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
            error={errorEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomTextField
            className={style.bottomSpace}
            label="Senha"
            variant="outlined"
            error={errorPassword}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomButton size="large" className={style.bottomSpace} onClick={auth}>
            Entrar
          </CustomButton>
          <a className="login-forget-password">Esqueceu a senha?</a>
          {isLoading && <CircularProgress className={style.center} />}
        </form>
      </Container>
    </div>
  );
}

export default Login;
