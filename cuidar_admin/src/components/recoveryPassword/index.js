/* eslint consistent-return: off */

import { toast } from 'react-toastify';
import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

import { login } from '../../api';
import { CustomButton } from '../styles/buttons.style';
import { CustomTextField } from '../styles/inputs.style';
import {
  RECOVERY_PASSWORD_EMAIL,
  RECOVERY_PASSWORD_CODE,
  RECOVERY_PASSWORD_PASSWORD,
} from '../../utils/constants';

import '../login/login.css';

const useStyles = makeStyles({
  bottomSpace: {
    marginBottom: '30px',
  },
  center: {
    alignSelf: 'center',
  },
});

function RecoveryPassword() {
  const style = useStyles();

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [code, setCode] = useState('');
  const [errorCode, setErrorCode] = useState(false);
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [password2, setPassword2] = useState('');
  const [errorPassword2, setErrorPassword2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState(RECOVERY_PASSWORD_EMAIL);

  const validateEmail = () => {
    const validated = !email || email === '';
    setErrorEmail(validated);

    return !validated;
  };

  const validateCode = () => {
    const validated = !email || email === '';
    setErrorCode(validated);

    return !validated;
  };

  const validatePassword = () => {
    const validated = !password || password === '';
    setErrorPassword(validated);

    return !validated;
  };

  const validatePassword2 = () => {
    const validated = !password || password === '' || password !== password2;
    setErrorPassword2(validated);

    return !validated;
  };

  const validateInputs = () =>
    validateEmail() && validateCode() && validatePassword() && validatePassword2();

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
          helperText={RECOVERY_PASSWORD_EMAIL}
          error={errorEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {state === RECOVERY_PASSWORD_PASSWORD && (
          <CustomTextField
            className={style.bottomSpace}
            label="Confirmar senha"
            variant="outlined"
            error={errorPassword2}
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        )}
        <CustomButton size="large" className={style.bottomSpace} onClick={auth}>
          Confirmar
        </CustomButton>
        <a className="login-forget-password">Voltar para login</a>
        {isLoading && <CircularProgress className={style.center} />}
      </form>
    </>
  );
}

export default RecoveryPassword;
