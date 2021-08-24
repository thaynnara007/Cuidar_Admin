import React, { useState } from 'react';
import { useQuery } from 'react-query';

import {
  Container,
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import { FormTextField } from '../styles/inputs.style';
import { getPermissions } from '../../api';
import Loading from '../loading';
import AngleDownIcon from '../icons/iconAngleDown';

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

function CreateUser() {
  const classes = useStyles();

  const [permissionsIds, setPermissionsIds] = useState(new Set());

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

  const addPermission = (event, id) => {
    if (event.target.checked) {
      setPermissionsIds((previos) => {
        previos.add(id);
        return previos;
      });
    } else {
      setPermissionsIds((previos) => {
        previos.delete(id);
        return previos;
      });
    }
  };

  const listPermissions = (permissions) =>
    permissions.map((permission) => (
      <Accordion key={permission.id}>
        <AccordionSummary
          expandIcon={<AngleDownIcon size="1x" color="#7F7C82" />}
          style={{ backgroundColor: '#F9F7F7' }}
        >
          <FormControlLabel
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            onChange={(event) => addPermission(event, permission.id)}
            control={<Checkbox color="primary" />}
            label={permission.name}
          />
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: '#F9F7F7' }}>
          <Typography variant="body1" color="textSecondary">
            {permission.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ));

  return (
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
          variant="outlined"
          className={classes.inputHalf}
          value={password}
          error={passwordError}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormTextField
          label="Confirme a senha"
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

      <Typography className={classes.title} variant="h5">
        Permissões
      </Typography>
      <div>{isFetching ? <Loading /> : listPermissions(data?.data)}</div>
    </Container>
  );
}

export default CreateUser;
