/* eslint-disable no-dupe-keys */
/* eslint-disable no-shadow */

import { Typography, makeStyles, RadioGroup, FormControlLabel } from '@material-ui/core';
import React from 'react';

import CustomModal from '.';
import { BlueRadio } from '../styles/radio.style';
import { getAllIcons } from '../../utils/util';
import { HeaderButton } from '../styles/buttons.style';

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
  modalButton: {
    margin: '0px auto',
    marginTop: '25px',
    width: 'fit-content',
  },
});

function ChooseIconModal({ open, handleClose, icon, setIcon }) {
  const classes = useStyles();
  const allIcons = getAllIcons();

  const handleChange = (event) => {
    setIcon(event.target.value);
  };

  const listIcons = () =>
    allIcons.map(({ icon, value }) => {
      const iconComponent = React.cloneElement(icon, {
        size: '3x',
        styles: { marginRight: '6px', marginTop: '6px' },
      });

      return (
        <di className={classes.itemBox} key={value}>
          {iconComponent}
          <FormControlLabel value={value} control={<BlueRadio />} />
        </di>
      );
    });

  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Typography variant="h4" className={classes.modalTitle}>
        Ícones
      </Typography>
      <RadioGroup
        name="choose_icon"
        value={icon}
        onChange={handleChange}
        className={classes.modalBox}
      >
        {listIcons()}
      </RadioGroup>
      <div className={classes.modalButton}>
        <HeaderButton onClick={handleClose}>Fechar</HeaderButton>
      </div>
    </CustomModal>
  );
}

export default ChooseIconModal;
