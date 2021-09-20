import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

import { IconButton, Tabs, Tab } from '@material-ui/core';

import Header from '../../components/header';
import ArrowLeftIcon from '../../components/icons/iconArrowLeft';
import Navbar from '../../components/navbar';
import PatientFormInfo from '../../components/patientFormInfo';

function PatientDetails() {
  const { id } = useParams();
  const history = useHistory();

  const [showHistory, setShowHistory] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setShowHistory(newValue);
  };

  return (
    <Navbar>
      <Header hasButton={false}>
        <IconButton color="inherit" onClick={() => history.push('/patients')}>
          <ArrowLeftIcon />
        </IconButton>
      </Header>
      <Tabs value={showHistory} onChange={handleChangeTab} indicatorColor="primary" centered>
        <Tab label="Dados pessoais" />
        <Tab label="Histórico" />
      </Tabs>
      <div style={{ marginTop: '50px' }}>
        {!showHistory ? <PatientFormInfo patientId={id} /> : <div />}
      </div>
    </Navbar>
  );
}

export default PatientDetails;
