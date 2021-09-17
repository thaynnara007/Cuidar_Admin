/* eslint-disable no-dupe-keys */

import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container, makeStyles, Typography, IconButton } from '@material-ui/core';

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@material-ui/lab';
import { FormTextField } from '../styles/inputs.style';
import { createStep } from '../../api';
import Header from '../header';
import ArrowLeftIcon from '../icons/iconArrowLeft';
import Loading from '../loading';
import FileUploader from '../fileUploader';
import StepScreen from '../mobile/stepPage';

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
});

function CreateStep({ setPageState, activityId, activity, refetch }) {
  const classes = useStyles();

  const steps = activity?.data.steps;
  const sizeSteps = steps?.length;
  const initNumber = sizeSteps && sizeSteps > 0 ? steps[sizeSteps - 1].number + 1 : 1;

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [number, setNumber] = useState(initNumber);
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [numberHelperText, setNumberHelperText] = useState('Precisa ser um número positivo');

  const validateInfo = () => {
    const validatedName = name && name !== '';
    setNameError(!validatedName);

    const validatedDescription = description && description !== '';
    setDescriptionError(!validatedDescription);

    let validatedNumber = true;
    const sameStep = activity?.data.steps.find(
      (step) => parseInt(step.number, 10) === parseInt(number, 10)
    );

    if (sameStep) {
      validatedNumber = false;
      setNumberHelperText('Já existe uma etapa com esse número de sequência.');
    } else setNumberHelperText('Precisa ser um número positivo');

    setNumberError(!validatedNumber);

    return validatedName && validatedDescription && validatedNumber;
  };

  const handleSetNumber = (value) => {
    if (value !== '' && value >= 0) setNumber(value);
  };

  const handleUpload = (file) => {
    const imageUrl = URL.createObjectURL(file);

    setImageFile(file);
    setImage(imageUrl);
  };

  const handleCreateStep = async () => {
    if (validateInfo()) {
      const body = {
        name,
        description,
        number,
        activityId,
      };

      let imageFormData = null;

      if (imageFile) {
        imageFormData = new FormData();
        imageFormData.append('file', imageFile);
      }
      const result = await createStep(body, imageFormData, setIsLoading);

      if (result) {
        toast.success('Etapa criada com sucesso');
        setPageState('list_steps');
        refetch();
      }
    }
  };

  const generateSteps = () => {
    const currentStepId = `${name}-${number}`;
    const currentStep = {
      id: currentStepId,
      name,
      number,
    };

    const stepsToBeSorted = [...activity?.data.steps, currentStep];
    const sortedSteps = stepsToBeSorted.sort((step1, step2) => step1.number - step2.number);
    const size = sortedSteps?.length - 1;

    return sortedSteps?.map((step, index) => (
      <TimelineItem key={step.id}>
        <TimelineSeparator>
          {index === size ? (
            <TimelineDot variant="outlined" color="primary" />
          ) : (
            <TimelineDot variant="outlined" />
          )}
          {index < size && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variante="body1"
            style={step.id === currentStepId ? { color: '#112D4E' } : { color: '#7F7C82' }}
          >
            {`${step.name}`}
          </Typography>
          <Typography
            variante="body1"
            style={step.id === currentStepId ? { color: '#112D4E' } : { color: '#7F7C82' }}
          >
            {`sequencial: ${step.number}`}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    ));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header buttonName="Registrar etapa" onClick={handleCreateStep}>
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
                  helperText={numberHelperText}
                  className={classes.input}
                  onChange={(e) => handleSetNumber(e.target.value)}
                />
                <FileUploader handleUpload={handleUpload}>Escolher imagem</FileUploader>
              </div>
              <div className={classes.layoutBox}>
                <StepScreen
                  title={name}
                  description={description}
                  image={image}
                  icon={activity?.data.icon}
                  color={activity?.data.category.color ?? '#C6FFC1'}
                  textColor={activity?.data.category.textColor ?? '#24267E'}
                />
                <Timeline align="alternate">{generateSteps()}</Timeline>
              </div>
            </Container>
          </Container>
        </>
      )}
    </>
  );
}

export default CreateStep;
