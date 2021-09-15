import React, { useState } from 'react';

import Navbar from '../../components/navbar';
import ListActivities from '../../components/listActivities';
import CreateActivity from '../../components/createActivity';
import { useQuery } from 'react-query';
import { getCategory } from '../../api';
import { useParams } from 'react-router';

function Activities() {
  const [state, setState] = useState('list_activities');
  const { id } = useParams();

  const { data } = useQuery('category', () => getCategory(id, false), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <Navbar>
      {state === 'list_activities' ? (
        <ListActivities setPageState={setState} idCategory={id} />
      ) : (
        <CreateActivity setPageState={setState} category={data} />
      )}
    </Navbar>
  );
}

export default Activities;
