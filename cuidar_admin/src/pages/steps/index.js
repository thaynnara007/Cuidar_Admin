import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

import Navbar from '../../components/navbar';
import { getActivity } from '../../api';
import ListSteps from '../../components/listSteps';
import CreateStep from '../../components/createStep';

function ActivitySteps() {
  const [state, setState] = useState('list_steps');
  const { id } = useParams();

  const {
    data: activity,
    isFetching,
    refetch,
  } = useQuery('activity', () => getActivity(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <Navbar>
      {state === 'list_steps' ? (
        <ListSteps
          setPageState={setState}
          isFetching={isFetching}
          refetch={refetch}
          activityId={id}
          activityObj={activity}
        />
      ) : (
        <CreateStep setPageState={setState} activityId={id} activity={activity} />
      )}
    </Navbar>
  );
}

export default ActivitySteps;
