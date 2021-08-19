/* eslint consistent-return: off */

import { toast } from 'react-toastify';
import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

import { CustomTextField } from '../styles/inputs.style';
import { CustomButton } from '../styles/buttons.style';
import { login } from '../../api';

import './login.css';

const useStyles = makeStyles({
  bottomSpace: {
    marginBottom: '30px',
  },
  center: {
    alignSelf: 'center',
  },
});

function Login({ flip }) {
  const style = useStyles();

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const goToRecoveryPassword = () => {
    flip(true);
  };

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
      <form style={{ marginTop: '60px', flexDirection: 'column', display: 'flex', width: '100%' }}>
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
        <a className="login-forget-password" onClick={goToRecoveryPassword}>
          Esqueceu a senha?
        </a>
        {isLoading && <CircularProgress className={style.center} />}
      </form>
    </>
  );
}

export default Login;
