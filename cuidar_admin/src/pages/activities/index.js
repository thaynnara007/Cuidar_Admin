import React, { useState } from 'react';

import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import Navbar from '../../components/navbar';
import ListActivities from '../../components/listActivities';
import CreateActivity from '../../components/createActivity';
import { getCategory } from '../../api';

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
        <CreateActivity setPageState={setState} categoryId={id} category={data} />
      )}
    </Navbar>
  );
}

export default Activities;
