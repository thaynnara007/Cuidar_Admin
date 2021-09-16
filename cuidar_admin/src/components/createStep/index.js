/* eslint-disable no-dupe-keys */

import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container, makeStyles, Typography, IconButton } from '@material-ui/core';

import { FormTextField } from '../styles/inputs.style';
import { createActivity } from '../../api';
import Header from '../header';
import ArrowLeftIcon from '../icons/iconArrowLeft';
import Loading from '../loading';
import ActivityScreen from '../mobile/activityPage';
import FileUploader from '../fileUploader';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    margin: '25px 0px',
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
  layoutBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
  },
  input: {
    marginBottom: '15px',
  },
  iconDiv: {
    width: '-moz-fit-content',
    width: 'fit-content',
    margin: '20px auto',
  },
});

function CreateStep({ setPageState, activityId, activity }) {
  const classes = useStyles();
  
  const steps = activity?.data.steps

  const [isLoading, setIsLoading] = useState(false);
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [number, setNumber] = useState((steps[steps.length - 1].number + 1) ?? 1);
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const validateInfo = () => {
    const validatedName = name && name !== '';
    setNameError(!validatedName);

    const validatedDescription = description && description !== '';
    setDescriptionError(!validatedDescription);

    const validatedNumber = number && number > 0;
    setNumberError(!validatedNumber);

    return validatedName && validatedDescription && validatedNumber;
  };

  const handleUpload = (file) => {
    const imageUrl = URL.createObjectURL(file)

    setImageFile(file)
    setImage(imageUrl)
  }

  const handleCreateActivity = async () => {
    if (validateInfo()) {
      const body = {
        name,
        description,
        number,
      };

      const result = await createActivity(body, setIsLoading);

      if (result) {
        toast.success('Atividade criada com sucesso');
        setPageState('list_activities');
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header buttonName="Registrar etapa" onClick={handleCreateActivity}>
            <IconButton color="inherit" onClick={() => setPageState('list_steps')}>
              <ArrowLeftIcon />
            </IconButton>
          </Header>
          <Container maxWidth="xl">
            <Typography className={classes.title} variant="h5">
              Prototipação da etapa
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
                  label="Número sequêncial"
                  variant="outlined"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={number}
                  error={numberError}
                  className={classes.input}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <FileUploader handleUpload={handleUpload}>Escolher imagem</FileUploader>
              </div>
              <div className={classes.layoutBox}>
                <div style={{ width: '5%' }} />
                <ActivityScreen
                  title={name}
                  description={description}
                  icon={activity?.data.icon}
                  color={activity?.data.category.color ?? '#C6FFC1'}
                  textColor={activity?.data.category.textColor ?? '#24267E'}
                />
              </div>
            </Container>
          </Container>
        </>
      )}
    </>
  );
}

export default CreateStep;
