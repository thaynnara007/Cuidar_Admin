import React from 'react';
import { useQuery } from 'react-query';

import { Container, makeStyles, Typography } from '@material-ui/core';

import { FormTextField } from '../styles/inputs.style';
import { getPatient } from '../../api';
import Loading from '../loading';

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

function PatientFormInfo({ patientId }) {
  const classes = useStyles();

  const { data, isFetching } = useQuery('getPatient', () => getPatient(patientId), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
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
              value={data?.data.name ?? ''}
              className={classes.inputHalf}
              onChange={() => {}}
              variant="outlined"
            />
            <FormTextField
              label="Sobrenome"
              value={data?.data.lastName ?? ''}
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
              value={data?.data.email ?? ''}
            />
            <FormTextField
              label="Número de telefone"
              variant="outlined"
              className={classes.inputHalf}
              value={data?.data.phoneNumber ?? ''}
            />
          </div>
          <div className={classes.boxInput}>
            <FormTextField
              label="CPF"
              variant="outlined"
              helperText="Ex: 08910513310"
              className={classes.inputHalf}
              value={data?.data.cpfFormatted ?? ''}
            />
            <FormTextField
              label="Data de nascimento"
              variant="outlined"
              type="date"
              className={classes.inputHalf}
              InputLabelProps={{
                shrink: true,
              }}
              value={data?.data.birthday?.split('T')[0] ?? ''}
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
              value={data?.data.address?.state ?? ''}
            />
            <FormTextField
              label="Cidade"
              variant="outlined"
              className={classes.input3Width}
              value={data?.data.address?.city ?? ''}
            />
            <FormTextField
              label="CEP"
              variant="outlined"
              className={classes.input3Width}
              value={data?.data.address?.zipCode ?? ''}
            />
          </div>
          <div className={classes.boxInput}>
            <FormTextField
              label="Bairro"
              variant="outlined"
              className={classes.input3Width}
              value={data?.data.address?.district ?? ''}
            />
            <FormTextField
              label="Rua"
              variant="outlined"
              className={classes.input3Width}
              value={data?.data.address?.street ?? ''}
            />
            <FormTextField
              label="Número"
              variant="outlined"
              className={classes.input3Width}
              value={data?.data.address?.number ?? ''}
            />
          </div>
          <FormTextField
            label="Complemento"
            fullWidth
            variant="outlined"
            value={data?.data.address?.complement ?? ''}
          />
        </>
      )}
    </Container>
  );
}

export default PatientFormInfo;
