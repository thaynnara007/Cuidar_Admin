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

function RecoveryPassword({ flip }) {
  const style = useStyles();

  const [value, setValue] = useState('');
  const [errorValue, setErrorValue] = useState(false);
  const [password2, setPassword2] = useState('');
  const [errorPassword2, setErrorPassword2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState(RECOVERY_PASSWORD_EMAIL);

  const goToLogin = () => {
    flip(false);
  };

  const getLabel = () => {
    if (state === RECOVERY_PASSWORD_EMAIL) return 'Email';
    else if (state === RECOVERY_PASSWORD_CODE) return 'Código';
    else return 'Senha';
  };

  const validateValue = () => {
    const validated = !value || value === '';
    setErrorPassword(validated);

    return !validated;
  };

  const validatePassword2 = () => {
    const validated = !password2 || password2 === '' || value !== password2;
    setErrorPassword2(validated);

    return !validated;
  };

  const validateInputs = () => validateValue() && validatePassword2();

  return (
    <>
      <form style={{ marginTop: '60px', flexDirection: 'column', display: 'flex', width: '100%' }}>
        <CustomTextField
          className={style.bottomSpace}
          label={getLabel()}
          variant="outlined"
          helperText={state}
          error={errorValue}
          value={value}
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
        <CustomButton size="large" className={style.bottomSpace}>
          Confirmar
        </CustomButton>
        <a className="login-forget-password" onClick={goToLogin}>
          Voltar para login
        </a>
        {isLoading && <CircularProgress className={style.center} />}
      </form>
    </>
  );
}

export default RecoveryPassword;
