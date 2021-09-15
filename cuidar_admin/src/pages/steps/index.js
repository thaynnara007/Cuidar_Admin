import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

import Navbar from '../../components/navbar';
import ListActivities from '../../components/listActivities';
import CreateActivity from '../../components/createActivity';
import { getActivity } from '../../api';

function ActivitySteps() {
  const [state, setState] = useState('list_steps');
  const { id } = useParams();

  const { data } = useQuery('activity', () => getActivity(id, false), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <Navbar>
      {state === 'list_steps' ? (
        <ListActivities setPageState={setState} idCategory={id} />
      ) : (
        <CreateActivity setPageState={setState} categoryId={id} category={data} />
      )}
    </Navbar>
  );
}

export default ActivitySteps;
