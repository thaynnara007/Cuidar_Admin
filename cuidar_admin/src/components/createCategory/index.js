import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container, makeStyles, Typography, IconButton } from '@material-ui/core';

import { FormTextField } from '../styles/inputs.style';
import { createPatient } from '../../api';
import Header from '../header';
import ArrowLeftIcon from '../icons/iconArrowLeft';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    margin: '20px 0px',
    color: '#112D4E',
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '35%',
  },
  input: {
    marginBottom: '12px',
  },
});

function CreateCategory({ setPageState }) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pageDescription, setPageDescription] = useState('');
  const [icon, setIcon] = useState(false);
  const [color, setColor] = useState('');
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const validateInfo = () => {
    const validatedName = name && name !== '';
    setNameError(!validatedName);

    const validatedDescription = description && description;
    setDescriptionError(!validatedDescription);

    return validatedName && validatedDescription;
  };

  const handleCreateCategory = async () => {
    const body = {
      name,
      description,
      pageDescription,
      icon,
      color,
    };

    const result = await createPatient(body, setIsLoading);

    if (result) {
      toast.success('Categoria criada com sucesso');
      setPageState('list_categories');
    }
  };

  return (
    <>
      <Header buttonName="Registrar categoria" onClick={handleCreateCategory}>
        <IconButton color="inherit" onClick={() => setPageState('list_categories')}>
          <ArrowLeftIcon />
        </IconButton>
      </Header>
      <Container maxWidth="xl">
        <Typography className={classes.title} variant="h5">
          Informações da categoria
        </Typography>
        <Container maxWidth="xl" className={classes.box}>
          <div className={classes.formBox}>
            <FormTextField
              label="Nome"
              variant="outlined"
              value={name}
              error={nameError}
              className={classes.input}
              onChange={(e) => setName(e.target.value)}
            />
            <FormTextField
              label="descrição"
              variant="outlined"
              multiline
              value={description}
              error={descriptionError}
              className={classes.input}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormTextField
              label="descrição da página"
              variant="outlined"
              multiline
              value={pageDescription}
              className={classes.input}
              onChange={(e) => setPageDescription(e.target.value)}
            />
          </div>
          <div></div>
        </Container>
      </Container>
    </>
  );
}

export default CreateCategory;
