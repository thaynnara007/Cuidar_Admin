import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { Container, IconButton, Link, makeStyles, Paper, Typography } from '@material-ui/core';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from '@material-ui/lab';

import { toast } from 'react-toastify';
import { deleteStep } from '../../api';
import Header from '../header';
import ArrowLeftIcon from '../icons/iconArrowLeft';
import Loading from '../loading';
import TrashIcon from '../icons/iconTrash';
import ConfirmationModal from '../modal/confirmationModal';
import { BlueTimelineDot, FinalTimelineDot } from '../styles/dot.style';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: '6px 16px',
  },
  titleDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  titleStyle: {
    color: '#112D4E',
  },
  subtitleStyle: {
    color: '#7F7C82',
  },
  tail: {
    backgroundColor: '#DBE2EF',
  },
});

function ListSteps({ setPageState, isFetching, refetch, activityObj }) {
  const classes = useStyles();
  const history = useHistory();

  const [stepId, setStepId] = useState(null);
  const [stepName, setStepName] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [activity, setActivity] = useState(activityObj);

  useEffect(() => {
    setActivity(activityObj);
  }, [activityObj]);

  const handleShowDeleteModal = (idStep, nameStep) => {
    setStepId(idStep);
    setStepName(nameStep);
    setOpenDeleteModal(true);
  };

  const handleDelete = async () => {
    const idStep = stepId;
    const result = await deleteStep(idStep, setIsLoadingDelete);

    if (result) {
      toast.success('Etapa deletada com sucesso.');
      refetch();
    }

    setOpenDeleteModal(false);
  };

  const generateSteps = () => {
    const sortedSteps = activity?.data?.steps?.sort((step1, step2) => step1.number - step2.number);
    const size = sortedSteps?.length - 1;

    return sortedSteps?.map((step, index) => (
      <TimelineItem key={step.id}>
        <TimelineSeparator>
          {index === size ? <FinalTimelineDot /> : <BlueTimelineDot />}
          {index < size && <TimelineConnector className={classes.tail} />}
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <div
              className={classes.titleDiv}
              style={index % 2 !== 0 ? { flexDirection: 'row-reverse' } : {}}
            >
              <Typography variant="h6" component="h1">
                <Link color="inherit" target="_blank" href={`/step/${step.id}`}>
                  {step.name}
                </Link>
              </Typography>
              <IconButton
                style={{ padding: '8px' }}
                onClick={() => handleShowDeleteModal(step.id, step.name)}
              >
                <TrashIcon size="xs" color="#BD4B4B" />
              </IconButton>
            </div>
            <Typography variant="subtitle1" className={classes.subtitleStyle}>
              {step.description}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    ));
  };

  return (
    <>
      <Header buttonName="Nova etapa" onClick={() => setPageState('create_step')}>
        <div className={classes.header}>
          <IconButton
            color="inherit"
            onClick={() => history.push(`/category/${activity?.data.categoryId}/activities`)}
          >
            <ArrowLeftIcon />
          </IconButton>
          <Typography variant="h4" style={{ marginLeft: '10px' }}>
            {activity?.data.name}
          </Typography>
        </div>
      </Header>
      <Container>
        {isFetching ? (
          <Loading />
        ) : (
          <>
            <Timeline align="alternate">{generateSteps()}</Timeline>
            <ConfirmationModal
              open={openDeleteModal}
              handleClose={() => setOpenDeleteModal(false)}
              title="Remover etapa"
              description={`Esta ação não poderá ser revertida,
                você tem certeza que quer apagar a etapa ${stepName ?? ''} ?`}
              confirmButtonName="Remover"
              handleConfirm={handleDelete}
              isLoading={isLoadingDelete}
            />
          </>
        )}
      </Container>
    </>
  );
}

export default ListSteps;
