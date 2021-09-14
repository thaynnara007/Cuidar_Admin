import React, { useState } from 'react';

import Navbar from '../../components/navbar';
import ListActivities from '../../components/listActivities';
import CreateActivity from '../../components/createActivity';

function Activities() {
  const [state, setState] = useState('list_activities');

  return (
    <Navbar>
      {state === 'list_activities' ? (
        <ListActivities setPageState={setState} />
      ) : (
        <CreateActivity setPageState={setState} />
      )}
    </Navbar>
  );
}

export default Activities;
