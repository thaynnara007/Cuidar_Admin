import React from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';

import { Container, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@material-ui/lab';

import { getSteps } from '../../api';
import Header from '../header';
import ArrowLeftIcon from '../icons/iconArrowLeft';
import Loading from '../loading';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: '6px 16px',
  },
});

function ListSteps({ setPageState, activityId, categoryId, activityName }) {
  const classes = useStyles();

  const history = useHistory();

  const { data: steps, isFetching } = useQuery('steps', () => getSteps(activityId), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  const generateSteps = () => {
    const sortedSteps = steps?.data.sort((step1, step2) => step1.number - step2.number);
    const size = sortedSteps.length - 1;

    return sortedSteps.map((step, index) => (
      <TimelineItem key={step.id}>
        <TimelineSeparator>
          <TimelineDot />
          {index < size && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {step.name}
            </Typography>
            <Typography>{step.description}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    ));
  };

  return (
    <>
      <Header buttonName="Novo passo" onClick={() => setPageState('create_step')}>
        <div className={classes.header}>
          <IconButton
            color="inherit"
            onClick={() => history.push(`/category/${categoryId}/activities`)}
          >
            <ArrowLeftIcon />
          </IconButton>
          <Typography variant="h4" style={{ marginLeft: '10px' }}>
            {activityName}
          </Typography>
        </div>
      </Header>
      <Container>
        {isFetching ? (
          <Loading />
        ) : (
          <>
            <Timeline align="alternate">{generateSteps()}</Timeline>
          </>
        )}
      </Container>
    </>
  );
}

export default ListSteps;
