/* eslint-disable no-lonely-if */

import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { FormControlLabel, Checkbox, CircularProgress } from '@material-ui/core';

import AngleDownIcon from '../icons/iconAngleDown';
import { HeaderButton } from '../styles/buttons.style';
import CustomModal from '.';
import { updateUser } from '../../api';

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

function EditPermissionsModal({
  open,
  handleClose,
  userId,
  allPermissions,
  initPermissions,
  refetch,
}) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [permissionsToUpdate, setPermissionsToUpdate] = useState(new Set());

  const addPermisison = (id) => {
    setPermissionsToUpdate((previos) => {
      previos.add(id);

      return previos;
    });
  };

  const removePermission = (id) => {
    setPermissionsToUpdate((previos) => {
      previos.delete(id);

      return previos;
    });
  };

  const handleCheck = (event, id) => {
    if (event.target.checked) {
      if (initPermissions.has(id)) removePermission(id);
      else addPermisison(id);
    } else {
      if (initPermissions.has(id)) addPermisison(id);
      else removePermission(id);
    }
  };

  const updatePermissions = async () => {
    const body = {
      permissions: Array.from(permissionsToUpdate),
    };

    const result = await updateUser(userId, body, setIsLoading);

    if (result) {
      toast.success('Permissões atualizadas com sucesso.');
      handleClose();
      refetch();
    }
  };

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
                onChange={(event) => handleCheck(event, permission.id)}
                control={
                  <Checkbox color="primary" defaultChecked={initPermissions.has(permission.id)} />
                }
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
        {isLoading ? (
          <CircularProgress />
        ) : (
          <HeaderButton onClick={updatePermissions}>Salvar</HeaderButton>
        )}
      </div>
    </CustomModal>
  );
}

export default EditPermissionsModal;
