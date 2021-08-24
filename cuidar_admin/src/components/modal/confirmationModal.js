import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button, CircularProgress } from '@material-ui/core';

import CustomModal from '.';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    color: '#112D4E',
  },
  button: {
    border: 'none',
    padding: '8px',
    marginLeft: '20px',
  },
  buttonConfirm: {
    color: '#F9F7F7',
    backgroundColor: '#F6A9A9',
    '&:hover': {
      backgroundColor: '#BD4B4B',
    },
  },
  buttonCancel: {
    color: 'white',
    backgroundColor: '#DBE2EF',
    '&:hover': {
      backgroundColor: '#93B5C6',
    },
  },
  box: {
    margin: '20px 10px',
  },
  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  loading: {
    justifyContent: 'center',
  },
});

function ConfirmationModal({
  open,
  title,
  description,
  confirmButtonName,
  handleClose,
  handleConfirm,
  isLoading,
}) {
  const classes = useStyles();

  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <Divider />
      <div className={classes.box}>
        <Typography variant="body1">{description}</Typography>
      </div>
      <div className={classes.footer}>
        <Button onClick={handleConfirm} className={`${classes.button} ${classes.buttonConfirm}`}>
          {confirmButtonName}
        </Button>
        <Button onClick={handleClose} className={`${classes.button} ${classes.buttonCancel}`}>
          Cancelar
        </Button>
      </div>
      {isLoading && <CircularProgress className={classes.loading} />}
    </CustomModal>
  );
}

export default ConfirmationModal;
