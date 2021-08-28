import React from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

import { Container, makeStyles, Typography, IconButton } from '@material-ui/core';

import { FormTextField } from '../../components/styles/inputs.style';
import Header from '../../components/header';
import ArrowLeftIcon from '../../components/icons/iconArrowLeft';
import Navbar from '../../components/navbar';
import { getPatient } from '../../api';
import Loading from '../../components/loading';

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

function PatientDetails() {
  const { id } = useParams();
  const history = useHistory();
  const classes = useStyles();

  const { data, isFetching } = useQuery('getPatient', () => getPatient(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <Navbar>
      <Header hasButton={false}>
        <IconButton color="inherit" onClick={() => history.push('/patients')}>
          <ArrowLeftIcon />
        </IconButton>
      </Header>
      <Container maxWidth="md">
        {isFetching ? (
          <Loading />
        ) : (
          <>
            <Typography className={classes.title} variant="h5">
              Informações do paciente
            </Typography>
            <div className={classes.boxInput}>
              <FormTextField
                label="Nome"
                value={data?.data.name}
                className={classes.inputHalf}
                onChange={() => {}}
                variant="outlined"
              />
              <FormTextField
                label="Sobrenome"
                value={data?.data.lastName}
                className={classes.inputHalf}
                onChange={() => {}}
                variant="outlined"
              />
            </div>
            <div className={classes.boxInput}>
              <FormTextField
                label="Email"
                variant="outlined"
                className={classes.inputHalf}
                value={data?.data.email}
              />
              <FormTextField
                label="Número de telefone"
                variant="outlined"
                className={classes.inputHalf}
                value={data?.data.phoneNumber}
              />
            </div>
            <div className={classes.boxInput}>
              <FormTextField
                label="CPF"
                variant="outlined"
                helperText="Ex: 08910513310"
                className={classes.inputHalf}
                value={data?.data.cpfFormatted}
              />
              <FormTextField
                label="Data de nascimento"
                variant="outlined"
                type="date"
                className={classes.inputHalf}
                InputLabelProps={{
                  shrink: true,
                }}
                value={data?.data.birthday}
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
                value={data?.data.address?.state}
              />
              <FormTextField
                label="Cidade"
                variant="outlined"
                className={classes.input3Width}
                value={data?.data.address?.city}
              />
              <FormTextField
                label="CEP"
                variant="outlined"
                className={classes.input3Width}
                value={data?.data.address?.zipCode}
              />
            </div>
            <div className={classes.boxInput}>
              <FormTextField
                label="Bairro"
                variant="outlined"
                className={classes.input3Width}
                value={data?.data.address?.district}
              />
              <FormTextField
                label="Rua"
                variant="outlined"
                className={classes.input3Width}
                value={data?.data.address?.street}
              />
              <FormTextField
                label="Número"
                variant="outlined"
                className={classes.input3Width}
                value={data?.data.address?.number}
              />
            </div>
            <FormTextField
              label="Complemento"
              fullWidth
              variant="outlined"
              value={data?.data.address?.complement}
            />
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default PatientDetails;
