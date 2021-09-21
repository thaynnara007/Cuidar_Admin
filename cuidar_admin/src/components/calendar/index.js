import React from 'react';

import { makeStyles } from '@material-ui/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { toast } from 'react-toastify';
import api from '../../api/api';

const useStyles = makeStyles({
  event: {
    fontWeight: 'bold',
    fontSize: '15px',
  },
});

function PatientCalendar({ patientId }) {
  const classes = useStyles();

  const handleGetEntries = (timeInfo) => {
    const url = `/history/patient/${patientId}?start=${timeInfo.startStr}&end=${timeInfo.endStr}`;

    return api
      .get(url)
      .then((result) => {
        const events = result.data.map((entry) => {
          const { activity } = entry;
          const { category } = activity;

          return {
            id: entry.id,
            title: activity.name,
            start: entry.endTime,
            color: category.color,
            textColor: category.textColor,
            className: classes.event,
          };
        });

        return events;
      })
      .catch((error) => {
        toast.error(error);
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
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialEvents={[
          {
            id: 0,
            title: '',
          },
        ]}
        events={handleGetEntries}
        locale="pt"
      />
    </div>
  );
}

export default PatientCalendar;
