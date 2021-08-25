import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { Container, makeStyles, Typography } from '@material-ui/core';

import { FormTextField } from '../../components/styles/inputs.style';
import { getPermissions, createUser } from '../../api';
import Header from '../../components/header';
import Navbar from '../../components/navbar';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    margin: '20px 0px',
    color: '#112D4E',
  },
  boxInput: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '12px 0px',
  },
  inputHalf: {
    width: '49%',
  },
  input3Width: {
    width: '33%',
  },
});

function MyInfo() {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [password2, setPassword2] = useState('');
  const [password2Error, setPassword2Error] = useState(false);

  const [state, setState] = useState('');
  const [stateError, setStateError] = useState(false);
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const [zipCodeError, setZipCodeError] = useState(false);
  const [district, setDistrict] = useState('');
  const [districtError, setDistrictError] = useState(false);
  const [street, setStreet] = useState('');
  const [streetError, setStreetError] = useState(false);
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState(false);
  const [complement, setComplement] = useState('');

  const { data, isFetching } = useQuery('permissions', () => getPermissions(), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  const validateUserInfo = () => {
    const validatedEmail = email && email !== '';
    setEmailError(!validatedEmail);

    const validatedPhone = phoneNumber && phoneNumber !== '';
    setPhoneNumberError(!validatedPhone);

    const validatedPassword = password && password !== '';
    setPasswordError(!validatedPassword);

    const validatedPassword2 = password2 && password2 !== '' && password2 === password;
    setPassword2Error(!validatedPassword2);

    return validatedEmail && validatedPhone && validatedPassword && validatedPassword2;
  };

  const validateAddressInfo = () => {
    const validateState = state && state !== '';
    setStateError(!validateState);

    const validateCity = city && city !== '';
    setCityError(!validateCity);

    const validateZipCode = zipCode && zipCode !== '';
    setZipCodeError(!validateZipCode);

    const validateDistrict = district && district !== '';
    setDistrictError(!validateDistrict);

    const validateStreet = street && street !== '';
    setStreetError(!validateStreet);

    const validateNumber = number && number !== '';
    setNumberError(!validateNumber);

    return (
      validateState &&
      validateCity &&
      validateZipCode &&
      validateDistrict &&
      validateStreet &&
      validateNumber
    );
  };

  const handleUpdateUser = async () => {
    const validateUser = validateUserInfo();
    const validateAddress = validateAddressInfo();

    if (validateUser && validateAddress) {
      const body = {
        user: {
          name,
          lastName,
          email,
          phoneNumber,
          password,
        },
        address: {
          state,
          city,
          zipCode,
          district,
          street,
          number,
          complement,
        },
      };

      const result = await createUser(body, setIsLoading);

      if (result) {
        toast.success('Informações atualizadas com sucesso');
      }
    }
  };

  return (
    <Navbar>
      <Header buttonName="Atualizar" onClick={handleUpdateUser}>
        <Typography variant="h4">Minhas informações</Typography>
      </Header>
      <Container maxWidth="md">
        <Typography className={classes.title} variant="h5">
          Informações do usuário
        </Typography>
        <div className={classes.boxInput}>
          <FormTextField
            label="Nome"
            variant="outlined"
            className={classes.inputHalf}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormTextField
            label="Sobrenome"
            variant="outlined"
            className={classes.inputHalf}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={classes.boxInput}>
          <FormTextField
            label="Email"
            variant="outlined"
            className={classes.inputHalf}
            value={email}
            error={emailError}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormTextField
            label="Número de telefone"
            variant="outlined"
            className={classes.inputHalf}
            value={phoneNumber}
            error={phoneNumberError}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={classes.boxInput}>
          <FormTextField
            label="Senha"
            type="password"
            variant="outlined"
            className={classes.inputHalf}
            value={password}
            error={passwordError}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormTextField
            label="Confirme a senha"
            type="password"
            variant="outlined"
            className={classes.inputHalf}
            value={password2}
            error={password2Error}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>

        <Typography className={classes.title} variant="h5">
          Informações do endereço
        </Typography>
        <div className={classes.boxInput}>
          <FormTextField
            label="Estado"
            variant="outlined"
            className={classes.input3Width}
            value={state}
            error={stateError}
            onChange={(e) => setState(e.target.value)}
          />
          <FormTextField
            label="Cidade"
            variant="outlined"
            className={classes.input3Width}
            value={city}
            error={cityError}
            onChange={(e) => setCity(e.target.value)}
          />
          <FormTextField
            label="CEP"
            variant="outlined"
            className={classes.input3Width}
            value={zipCode}
            error={zipCodeError}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        <div className={classes.boxInput}>
          <FormTextField
            label="Bairro"
            variant="outlined"
            className={classes.input3Width}
            value={district}
            error={districtError}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <FormTextField
            label="Rua"
            variant="outlined"
            className={classes.input3Width}
            value={street}
            error={streetError}
            onChange={(e) => setStreet(e.target.value)}
          />
          <FormTextField
            label="Número"
            variant="outlined"
            className={classes.input3Width}
            value={number}
            error={numberError}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <FormTextField
          label="Complemento"
          fullWidth
          variant="outlined"
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
        />
      </Container>
    </Navbar>
  );
}

export default MyInfo;
