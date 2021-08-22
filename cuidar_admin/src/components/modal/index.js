import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(() => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: '#F4F4F4',
    padding: '20px',
    borderRadius: '8px',
  },
  button: {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '5px',
    color: '#F4F4F4',
    fontWeight: 'bold',
  },
}));

function CustomModal({ open, handleClose, children }) {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        {children}
      </div>
    </Modal>
  );
}

export default CustomModal;
