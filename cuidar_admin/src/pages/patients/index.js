import React, { useState } from 'react';

import Navbar from '../../components/navbar';
import ListPatients from '../../components/listPatients';

function Patients() {
  const [state, setState] = useState('list_patients');

  return (
    <Navbar>
      <ListPatients setPageState={setState} />
    </Navbar>
  );
}

export default Patients;
