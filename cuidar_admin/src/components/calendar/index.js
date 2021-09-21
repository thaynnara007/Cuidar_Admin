import React from 'react';

import { makeStyles } from '@material-ui/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import api from '../../api/api';

const useStyles = makeStyles({
  event: {
    fontWeight: 'bold',
    fontSize: '15px',
  },
});

function PatientCalendar({ patientId }) {
  const classes = useStyles();

  const handleGetEntries = (timeInfo, successCallback, failureCallback) => {
    const url = `/history/patient/${patientId}?start=${timeInfo.startStr}&end=${timeInfo.endStr}`;

    api
      .get(url)
      .then((result) => {
        const events = result.data.map((entry) => {
          const { activity } = entry;
          const { category } = activity;

          return {
            title: activity.name,
            start: entry.endTime,
            color: category.color,
            textColor: category.textColor,
            className: classes.event,
          };
        });

        successCallback(events);
      })
      .catch((error) => {
        failureCallback(error);
      });
  };

  return (
    <div style={{ margin: '20px' }}>
      <FullCalendar
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={handleGetEntries}
        locale="pt"
      />
    </div>
  );
}

export default PatientCalendar;
