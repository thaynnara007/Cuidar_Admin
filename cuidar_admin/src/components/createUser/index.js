import React from 'react';
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

  const { data, isFetching } = useQuery('permissions', () => getPermissions(), {
    refetchOnWindowFocus: false,
    retry: false,
  });

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
            control={<Checkbox />}
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

      <Typography className={classes.title} variant="h5">
        Permissões
      </Typography>
      <div>{isFetching ? <Loading /> : listPermissions(data?.data)}</div>
    </Container>
  );
}

export default CreateUser;
