import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';

import CustomModal from '.';

const useStyles = makeStyles({
  label: {
    margin: '6px 0px',
    color: '#3F72AF',
  },
  title: {
    textAlign: 'center',
    color: '#112D4E',
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: '300px',
    overflow: 'auto',
  },
});

function FormModal({ title, open, handleClose, children }) {
  const classes = useStyles();

  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <Divider />
      <div className={classes.infoBox}>
        {children.map((item) => (
          <div key={item[0]} style={{ margin: '2px' }}>
            <Typography variant="subtitle1" className={classes.label}>
              {item[0]}
            </Typography>
            <div
              style={{
                border: 'solid 1px #DBE2EF',
                borderRadius: '5px',
                padding: '4px',
              }}
            >
              <Typography variant="body2">{item[1] ?? 'Não informado'}</Typography>
            </div>
          </div>
        ))}
      </div>
    </CustomModal>
  );
}

export default FormModal;
