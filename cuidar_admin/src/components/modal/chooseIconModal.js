/* eslint-disable no-dupe-keys */

import { Typography, makeStyles, Divider, RadioGroup, FormControlLabel } from '@material-ui/core';
import React from 'react';

import CustomModal from '.';
import AppleIcon from '../icons/iconApple';
import { BlueRadio } from '../styles/radio.style';

const useStyles = makeStyles({
  modalTitle: {
    textAlign: 'center',
    color: '#112D4E',
    margin: '10px 0px',
  },
  modalBox: {
    maxHeight: '400px',
    overflow: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  itemBox: {
    width: '-moz-fit-content',
    width: 'fit-content',
    margin: '10px',
  },
});

function ChooseIconModal({ open, handleClose, icon, setIcon }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setIcon(event.target.value);
  };

  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Typography variant="h4" className={classes.modalTitle}>
        Ícones
      </Typography>
      <Divider />
      <RadioGroup
        name="choose_icon"
        value={icon}
        onChange={handleChange}
        className={classes.modalBox}
      >
        <div className={classes.itemBox}>
          <AppleIcon />
          <FormControlLabel value="APPLE" control={<BlueRadio />} />
        </div>
      </RadioGroup>
    </CustomModal>
  );
}

export default ChooseIconModal;
