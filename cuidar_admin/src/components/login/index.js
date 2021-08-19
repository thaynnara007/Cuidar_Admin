/* eslint consistent-return: off */

import { toast } from 'react-toastify';
import React, { useState } from 'react';
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
    <>
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
    </>
  );
}

export default Login;
