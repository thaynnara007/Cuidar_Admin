import React, { useState } from 'react';

import Navbar from '../../components/navbar';
import ListPatients from '../../components/listPatients';
import CreatePatient from '../../components/createPatient';

function Patients() {
  const [state, setState] = useState('list_patients');

  return (
    <Navbar>
      {state === 'list_patients' ? (
        <ListPatients setPageState={setState} />
      ) : (
        <CreatePatient setPageState={setState} />
      )}
    </Navbar>
  );
}

export default Patients;
