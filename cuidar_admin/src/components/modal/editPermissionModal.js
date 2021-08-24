import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import AngleDownIcon from '../icons/iconAngleDown';
import { HeaderButton } from '../styles/buttons.style';
import CustomModal from '.';

const useStyles = makeStyles({
  modalTitle: {
    textAlign: 'center',
    color: '#112D4E',
    margin: '10px 0px',
  },
  modalBox: {
    maxHeight: '400px',
    overflow: 'auto',
  },
  modalButton: {
    margin: '10px auto',
    width: 'fit-content',
  },
});

function EditPermissionsModal({ open, handleClose, allPermissions, initPermissions }) {
  const classes = useStyles();

  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Typography variant="h4" className={classes.modalTitle}>
        Permissões
      </Typography>
      <div className={classes.modalBox}>
        {allPermissions?.map((permission) => (
          <Accordion key={permission.id}>
            <AccordionSummary
              expandIcon={<AngleDownIcon size="1x" color="#7F7C82" />}
              style={{ backgroundColor: '#F9F7F7' }}
            >
              <FormControlLabel
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                onChange={(event) => {}}
                control={<Checkbox color="primary" />}
                label={permission.name}
              />
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: '#F9F7F7' }}>
              <Typography variant="body1" color="textSecondary">
                {permission.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className={classes.modalButton}>
        <HeaderButton onClick={() => {}}>Salvar</HeaderButton>
      </div>
    </CustomModal>
  );
}

export default EditPermissionsModal;
