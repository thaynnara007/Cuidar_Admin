/* eslint-disable no-dupe-keys */

import React, { useEffect, useState } from 'react';
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
import { useHistory, useParams } from 'react-router';
import { useQuery } from 'react-query';
import Header from '../../components/header';
import ArrowLeftIcon from '../../components/icons/iconArrowLeft';
import { FormTextField } from '../../components/styles/inputs.style';
import FileUploader from '../../components/fileUploader';
import StepScreen from '../../components/mobile/stepPage';
import { getStep, updateStep } from '../../api';
import Loading from '../../components/loading';
import Navbar from '../../components/navbar';
import { verifyPermission } from '../../utils/util';
import { CREATE_ACTIVITY_PERMISSION } from '../../utils/constants';

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

function EditStep() {
  const classes = useStyles();

  const { id } = useParams();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [number, setNumber] = useState(1);
  const [steps, setSteps] = useState([]);
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [numberHelperText, setNumberHelperText] = useState('Precisa ser um n??mero positivo');

  const hasPermission = verifyPermission(CREATE_ACTIVITY_PERMISSION);

  const { data: step, isFetching } = useQuery('step', () => getStep(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    setName(step?.data.name);
    setDescription(step?.data.description);
    setNumber(step?.data.number);
    setSteps(step?.data.activity.steps.filter((stepObj) => `${stepObj.id}` !== `${id}`));
  }, [step]);

  const validateInfo = () => {
    const validatedName = name && name !== '';
    setNameError(!validatedName);

    const validatedDescription = description && description !== '';
    setDescriptionError(!validatedDescription);

    let validatedNumber = true;
    const sameStep = steps?.find(
      (stepObj) => parseInt(stepObj.number, 10) === parseInt(number, 10)
    );

    if (sameStep) {
      validatedNumber = false;
      setNumberHelperText('J?? existe uma etapa com esse n??mero de sequ??ncia.');
    } else setNumberHelperText('Precisa ser um n??mero positivo');

    setNumberError(!validatedNumber);

    return validatedName && validatedDescription && validatedNumber;
  };

  const handleSetNumber = (value) => {
    if (value !== '' && value >= 0) setNumber(value);
  };

  const goToListSteps = () => history.push(`/activity/${step?.data.activityId}/steps`);

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
        activityId: step?.data.activityId,
      };

      let imageFormData = null;

      if (imageFile) {
        imageFormData = new FormData();
        imageFormData.append('file', imageFile);
      }
      const result = await updateStep(body, imageFormData, id, setIsLoading);

      if (result) {
        toast.success('Etapa atualizada com sucesso');
        goToListSteps();
      }
    }
  };

  const generateSteps = () => {
    const currentStep = {
      id,
      name,
      number,
      current: true,
    };

    const stepsToBeSorted = [...(steps ?? []), currentStep];
    const sortedSteps = stepsToBeSorted?.sort((step1, step2) => step1.number - step2.number);
    const size = sortedSteps?.length - 1;

    return sortedSteps?.map((stepObj, index) => (
      <TimelineItem key={stepObj.id}>
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
            style={stepObj.current ? { color: '#112D4E' } : { color: '#7F7C82' }}
          >
            {`${stepObj.name}`}
          </Typography>
          <Typography
            variante="body1"
            style={stepObj.current ? { color: '#112D4E' } : { color: '#7F7C82' }}
          >
            {`sequencial: ${stepObj.number}`}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    ));
  };

  return (
    <Navbar>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <>
          <Header hasButton={hasPermission} buttonName="Atualizar etapa" onClick={handleCreateStep}>
            <IconButton color="inherit" onClick={() => goToListSteps()}>
              <ArrowLeftIcon />
            </IconButton>
          </Header>
          <Container maxWidth="xl">
            <Typography className={classes.title} variant="h5">
              Prototipa????o da etapa
            </Typography>
            <Container maxWidth="xl" className={classes.box}>
              <div className={classes.formBox}>
                <FormTextField
                  label="Nome"
                  required
                  variant="outlined"
                  value={name}
                  error={nameError}
                  className={classes.input}
                  onChange={hasPermission ? (e) => setName(e.target.value) : () => {}}
                />
                <FormTextField
                  label="descri????o"
                  required
                  variant="outlined"
                  multiline
                  value={description}
                  error={descriptionError}
                  className={classes.input}
                  onChange={hasPermission ? (e) => setDescription(e.target.value) : () => {}}
                />
                <FormTextField
                  label="N??mero sequ??ncial"
                  variant="outlined"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={number}
                  error={numberError}
                  helperText={numberHelperText}
                  className={classes.input}
                  onChange={hasPermission ? (e) => handleSetNumber(e.target.value) : () => {}}
                />
                {hasPermission && (
                  <FileUploader handleUpload={handleUpload}>Escolher imagem</FileUploader>
                )}
              </div>
              <div className={classes.layoutBox}>
                <StepScreen
                  title={name}
                  description={description}
                  image={image ?? step?.data.image?.pictureUrl}
                  icon={step?.data.activity.icon}
                  color={step?.data.activity.category.color ?? '#C6FFC1'}
                  textColor={step?.data.activity.category.textColor ?? '#24267E'}
                />
                <Timeline align="alternate">{generateSteps()}</Timeline>
              </div>
            </Container>
          </Container>
        </>
      )}
    </Navbar>
  );
}

export default EditStep;
