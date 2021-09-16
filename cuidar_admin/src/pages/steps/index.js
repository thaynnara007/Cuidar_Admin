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

  const { data: activity } = useQuery('activity', () => getActivity(id, false), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <Navbar>
      {state === 'list_steps' ? (
        <ListSteps
          setPageState={setState}
          activityId={id}
          categoryId={activity?.data.categoryId}
          activityName={activity?.data.name}
        />
      ) : (
        <CreateStep setPageState={setState} activityId={id} activity={activity} />
      )}
    </Navbar>
  );
}

export default ActivitySteps;
