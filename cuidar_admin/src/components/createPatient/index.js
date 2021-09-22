import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container, makeStyles, Typography, IconButton } from '@material-ui/core';

import { FormTextField } from '../styles/inputs.style';
import { createPatient } from '../../api';
import Header from '../header';
import ArrowLeftIcon from '../icons/iconArrowLeft';
import ConfirmationModal from '../modal/confirmationModal';

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

function CreatePatient({ setPageState }) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [cpf, setCpf] = useState('');
  const [cpfError, setCpfError] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [birthdayError, setBirthdayError] = useState(false);

  const [state, setState] = useState('');
  const [stateError, setStateError] = useState(false);
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const [district, setDistrict] = useState('');
  const [districtError, setDistrictError] = useState(false);
  const [street, setStreet] = useState('');
  const [streetError, setStreetError] = useState(false);
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState(false);
  const [complement, setComplement] = useState('');

  const validatePacientInfo = () => {
    const validatedEmail = email && email !== '';
    setEmailError(!validatedEmail);

    const validatedCpf = cpf && cpf.length === 11;
    setCpfError(!validatedCpf);

    const validatedPhone = phoneNumber && phoneNumber !== '';
    setPhoneNumberError(!validatedPhone);

    const validatedBirthday = birthday && birthday !== '';
    setBirthdayError(!validatedBirthday);

    return validatedEmail && validatedCpf && validatedPhone && validatedBirthday;
  };

  const validateAddressInfo = () => {
    const validateState = state && state !== '';
    setStateError(!validateState);

    const validateCity = city && city !== '';
    setCityError(!validateCity);

    const validateDistrict = district && district !== '';
    setDistrictError(!validateDistrict);

    const validateStreet = street && street !== '';
    setStreetError(!validateStreet);

    const validateNumber = number && number !== '';
    setNumberError(!validateNumber);

    return validateState && validateCity && validateDistrict && validateStreet && validateNumber;
  };

  const handleCreatePatient = async () => {
    const body = {
      patient: {
        name,
        lastName,
        email,
        phoneNumber,
        cpf,
        birthday,
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

    const result = await createPatient(body, setIsLoading);

    if (result) {
      toast.success('Paciente criado com sucesso');
      setOpenModal(false);
      setPageState('list_patients');
    }
  };

  const handleShowModal = async () => {
    const validatePatient = validatePacientInfo();
    const validateAddress = validateAddressInfo();

    if (validatePatient && validateAddress) setOpenModal(true);
  };

  return (
    <>
      <Header buttonName="Registrar paciente" onClick={handleShowModal}>
        <IconButton color="inherit" onClick={() => setPageState('list_patients')}>
          <ArrowLeftIcon />
        </IconButton>
      </Header>
      <Container maxWidth="md">
        <Typography className={classes.title} variant="h5">
          Informações do paciente
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
            required
            variant="outlined"
            className={classes.inputHalf}
            value={email}
            error={emailError}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormTextField
            label="Número de telefone"
            required
            variant="outlined"
            className={classes.inputHalf}
            error={phoneNumberError}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={classes.boxInput}>
          <FormTextField
            label="CPF"
            required
            variant="outlined"
            helperText="Ex: 08910513310"
            className={classes.inputHalf}
            value={cpf}
            error={cpfError}
            onChange={(e) => setCpf(e.target.value)}
          />
          <FormTextField
            label="Data de nascimento"
            required
            variant="outlined"
            type="date"
            className={classes.inputHalf}
            InputLabelProps={{
              shrink: true,
            }}
            value={birthday}
            error={birthdayError}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>

        <Typography className={classes.title} variant="h5">
          Informações do endereço
        </Typography>
        <div className={classes.boxInput}>
          <FormTextField
            label="Estado"
            required
            variant="outlined"
            className={classes.input3Width}
            value={state}
            error={stateError}
            onChange={(e) => setState(e.target.value)}
          />
          <FormTextField
            label="Cidade"
            required
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
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        <div className={classes.boxInput}>
          <FormTextField
            label="Bairro"
            required
            variant="outlined"
            className={classes.input3Width}
            value={district}
            error={districtError}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <FormTextField
            label="Rua"
            required
            variant="outlined"
            className={classes.input3Width}
            value={street}
            error={streetError}
            onChange={(e) => setStreet(e.target.value)}
          />
          <FormTextField
            label="Número"
            required
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
        <ConfirmationModal
          open={openModal}
          title="Registrar paciente"
          description="A senha deste paciente será o CPF do mesmo. Recomende que ele troque sua senha assim que possível."
          confirmButtonName="Registrar"
          handleClose={() => setOpenModal(false)}
          handleConfirm={handleCreatePatient}
          isLoading={isLoading}
          danger={false}
        />
      </Container>
    </>
  );
}

export default CreatePatient;
