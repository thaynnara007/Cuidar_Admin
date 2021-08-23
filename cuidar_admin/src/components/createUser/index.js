import React from 'react';

import { Container, makeStyles, Typography } from '@material-ui/core';

import { FormTextField } from '../styles/inputs.style';

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

  return (
    <Container maxWidth="md">
      <Typography className={classes.title} variant="h5">
        Informações do usuário
      </Typography>
      <div className={classes.boxInput}>
        <FormTextField label="Nome" variant="outlined" className={classes.inputHalf} />
        <FormTextField label="Sobrenome" variant="outlined" className={classes.inputHalf} />
      </div>
      <div className={classes.boxInput}>
        <FormTextField label="Email" variant="outlined" className={classes.inputHalf} />
        <FormTextField
          label="Número de telefone"
          variant="outlined"
          className={classes.inputHalf}
        />
      </div>
      <div className={classes.boxInput}>
        <FormTextField label="Senha" variant="outlined" className={classes.inputHalf} />
        <FormTextField label="Confirme a senha" variant="outlined" className={classes.inputHalf} />
      </div>

      <Typography className={classes.title} variant="h5">
        Informações do endereço
      </Typography>
      <div className={classes.boxInput}>
        <FormTextField label="Estado" variant="outlined" className={classes.input3Width} />
        <FormTextField label="Cidade" variant="outlined" className={classes.input3Width} />
        <FormTextField label="CEP" variant="outlined" className={classes.input3Width} />
      </div>
      <div className={classes.boxInput}>
        <FormTextField label="Bairro" variant="outlined" className={classes.input3Width} />
        <FormTextField label="Rua" variant="outlined" className={classes.input3Width} />
        <FormTextField label="Número" variant="outlined" className={classes.input3Width} />
      </div>
      <FormTextField label="Complemento" fullWidth variant="outlined" />
    </Container>
  );
}

export default CreateUser;
