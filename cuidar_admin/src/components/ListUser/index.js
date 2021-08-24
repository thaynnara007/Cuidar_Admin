import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import Pagination from '@material-ui/lab/Pagination';
import IconButton from '@material-ui/core/IconButton';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import AngleDownIcon from '../icons/iconAngleDown';
import TrashIcon from '../icons/iconTrash';
import { AccordionButton } from '../styles/buttons.style';
import { getUsers, deleteUser, getPermissions } from '../../api';
import Loading from '../loading';
import FormModal from '../modal/formModal';
import ConfirmationModal from '../modal/confirmationModal';
import CustomModal from '../modal';
import Header from '../header';

const useStyles = makeStyles({
  heading: {
    fontSize: '15px',
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: '15px',
    color: '#7F7C82',
    flexShrink: 0,
    flexBasis: '33.33%',
  },
  box: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
  },
  chip: {
    margin: '5px',
  },
  pagination: {
    margin: '20px auto',
    width: 'fit-content',
  },
  label: {
    margin: '8px 0px',
    fontWeight: 'bold',
  },
});

function ListUser({ setPageState }) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const [address, setAddress] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [openPermissionModal, setOpenPermissionModal] = useState(true);

  const {
    data: usersRes,
    isFetching: isFetchingUsers,
    refetch,
  } = useQuery('users', () => getUsers(page), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: permissionsRes, isFetching: isFetchingPermissions } = useQuery(
    'permissions',
    () => getPermissions(),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [page]);

  const handlePagination = (event, value) => {
    setPage(value);
  };

  const handleShowAddress = (addressObj) => {
    const addressInfo = {
      Estado: addressObj?.state,
      Bairro: addressObj?.district,
      Rua: addressObj?.street,
      Complemento: addressObj?.complement,
      Cidade: addressObj?.city,
      CEP: addressObj?.zipCode,
      Numero: addressObj?.number,
    };

    const entries = address ? Object.entries(addressInfo) : [];

    setAddress(entries);
    setOpenAddressModal(true);
  };

  const handleShowDeleteModal = (id) => {
    setIdToDelete(id);
    setOpenDeleteModal(true);
  };

  const handleDelete = async () => {
    const id = idToDelete;
    const result = await deleteUser(id, setIsLoadingDelete);

    if (result) {
      toast.success('Usário deletado com sucesso.');
      refetch();
    }

    setOpenDeleteModal(false);
  };

  const accordionUserItens = (users) =>
    users?.map((user) => (
      <Accordion key={user.id}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          expandIcon={<AngleDownIcon size="1x" color="#7F7C82" />}
        >
          <Typography className={classes.heading}>{`${user.name} ${user.lastName}`}</Typography>
          <Typography className={classes.secondaryHeading}>{`${user.email}`}</Typography>
          <Typography className={classes.secondaryHeading}>{`${user.phoneNumber}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.box}>
            {user.permissions.map((permission) => (
              <li key={permission.id}>
                <Tooltip title={permission.description}>
                  <Chip label={permission.name} className={classes.chip} />
                </Tooltip>
              </li>
            ))}
          </Box>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <AccordionButton onClick={() => handleShowAddress(user.address)}>
            Ver endereço
          </AccordionButton>
          <AccordionButton>Editar permissões</AccordionButton>
          {user.email !== 'master@email.com' && (
            <IconButton color="inherit" onClick={() => handleShowDeleteModal(user.id)}>
              <TrashIcon size="1x" color="#BD4B4B" />
            </IconButton>
          )}
        </AccordionActions>
      </Accordion>
    ));

  const permissionsModal = (permissions) => (
    <CustomModal open={openPermissionModal} handleClose={() => setOpenPermissionModal(false)}>
      <Typography variant="h4" className={classes.title}>
        Permissões
      </Typography>
      <Divider />
      {permissions?.map((permission) => (
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
    </CustomModal>
  );

  return (
    <>
      <Header buttonName="Novo usuário" onClick={() => setPageState('create_user')}>
        <Typography className={classes.headerTitle} variant="h4">
          Usuários
        </Typography>
      </Header>
      <div style={{ width: '100%', marginTop: '2px' }}>
        {isFetchingUsers || isFetchingPermissions ? (
          <Loading />
        ) : (
          <>
            <Pagination
              className={classes.pagination}
              count={usersRes?.data.pages}
              page={page}
              onChange={handlePagination}
              shape="rounded"
            />
            {accordionUserItens(usersRes?.data.rows)}
            <FormModal
              open={openAddressModal}
              handleClose={() => setOpenAddressModal(false)}
              title="Endereço"
            >
              {address}
            </FormModal>
            <ConfirmationModal
              open={openDeleteModal}
              handleClose={() => setOpenDeleteModal(false)}
              title="Remover usuário"
              description="Esta ação não poderá ser revertida, você tem certeza que quer de apagar este usuário?"
              confirmButtonName="Remover"
              handleConfirm={handleDelete}
              isLoading={isLoadingDelete}
            />
            {permissionsModal(permissionsRes?.data)}
          </>
        )}
      </div>
    </>
  );
}

export default ListUser;
