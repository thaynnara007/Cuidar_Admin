import React, { useEffect, useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { makeStyles } from '@material-ui/core';
import { getEntries } from '../../api';
import { getFirstDayOfCurrentMonth, getLastDayOfCurrentMonth } from '../../utils/date';

const defaultTime = {
  startStr: getFirstDayOfCurrentMonth().toISOString(),
  endStr: getLastDayOfCurrentMonth().toISOString(),
};

const useStyles = makeStyles({
  event: {
    fontWeight: 'bold',
    fontSize: '15px',
  },
});

const PatientCalendar = ({ patientId }) => {
  const classes = useStyles();
  const [events, setEvents] = useState();
  const [timeInfo, settimeInfo] = useState(defaultTime);

  useEffect(() => {
    getEntries(timeInfo, patientId).then((result) => {
      const entries = result?.data.map((entry) => {
        const { activity } = entry;
        const { category } = activity;

        return {
          id: entry.id,
          title: activity.name,
          start: entry.endTime,
          color: category.color,
          textColor: category.textColor,
          className: `${classes.event}`,
        };
      });

      setEvents(entries);
    });
  }, [timeInfo]);

  const handleDateChange = (dateInfo) => {
    const { startStr, endStr } = dateInfo;

    settimeInfo({ startStr, endStr });
  };

  return (
    <div style={{ margin: '20px' }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        initialEvents={[]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        datesSet={handleDateChange}
        locale="pt"
      />
    </div>
  );
};

export default PatientCalendar;
