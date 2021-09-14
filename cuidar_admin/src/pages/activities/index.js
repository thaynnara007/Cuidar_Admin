import React, { useState } from 'react';

import Navbar from '../../components/navbar';
import CreateCategory from '../../components/createCategory';
import ListActivities from '../../components/listActivities';

function Activities() {
  const [state, setState] = useState('list_activities');

  return (
    <Navbar>
      {state === 'list_activities' ? (
        <ListActivities setPageState={setState} />
      ) : (
        <CreateCategory setPageState={setState} />
      )}
    </Navbar>
  );
}

export default Activities;
