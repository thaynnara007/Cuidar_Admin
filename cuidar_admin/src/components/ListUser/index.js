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

import { InputBase, Paper } from '@material-ui/core';
import AngleDownIcon from '../icons/iconAngleDown';
import TrashIcon from '../icons/iconTrash';
import { AccordionButton } from '../styles/buttons.style';
import { getUsers, deleteUser, getPermissions } from '../../api';
import Loading from '../loading';
import FormModal from '../modal/formModal';
import ConfirmationModal from '../modal/confirmationModal';
import EditPermissionsModal from '../modal/editPermissionModal';
import Header from '../header';
import SearchIcon from '../icons/iconSearch';
import {
  CREATE_USER_PERMISSION,
  DELETE_USER_PERMISSION,
  GET_USER_PERMISSION,
} from '../../utils/constants';
import { verifyPermission } from '../../utils/util';

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
  inputPaper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '20%',
    marginTop: '10px',
  },
  input: {
    flex: 1,
    marginLeft: '5px',
  },
  iconButton: {
    padding: 10,
  },
});

function ListUser({ setPageState }) {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const [address, setAddress] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [idToEdit, setIdToEdit] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [openPermissionModal, setOpenPermissionModal] = useState(false);
  const [initPermissions, setInitPermisisons] = useState(new Set());
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');

  const createUserPermission = verifyPermission(CREATE_USER_PERMISSION);

  const {
    data: usersRes,
    isFetching: isFetchingUsers,
    refetch,
  } = useQuery('users', () => getUsers(search, page), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: permissionsRes, isFetching: isFetchingPermissions } = useQuery(
    'permissions',
    () => getPermissions(createUserPermission),
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

  const handleShowDeleteModal = (id, nameUser) => {
    setIdToDelete(id);
    setName(nameUser);
    setOpenDeleteModal(true);
  };

  const handleShowPermissionsModal = (id, permissions) => {
    setIdToEdit(id);
    setInitPermisisons(new Set(permissions.map((permission) => permission.id)));
    setOpenPermissionModal(true);
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
          {createUserPermission && (
            <AccordionButton onClick={() => handleShowPermissionsModal(user.id, user.permissions)}>
              Editar permissões
            </AccordionButton>
          )}
          {verifyPermission(DELETE_USER_PERMISSION) && (
            <IconButton
              color="inherit"
              onClick={() => handleShowDeleteModal(user.id, `${user.name} ${user.lastName}`)}
            >
              <TrashIcon size="1x" color="#BD4B4B" />
            </IconButton>
          )}
        </AccordionActions>
      </Accordion>
    ));

  return (
    <>
      <Header
        hasButton={createUserPermission}
        buttonName="Novo usuário"
        onClick={() => setPageState('create_user')}
      >
        <Typography variant="h4">Usuários</Typography>
      </Header>
      <Paper component="form" className={classes.inputPaper}>
        <InputBase
          className={classes.input}
          placeholder="Busca"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton onClick={() => refetch()} className={classes.iconButton} aria-label="search">
          <SearchIcon size="1x" />
        </IconButton>
      </Paper>
      {verifyPermission(GET_USER_PERMISSION) && (
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
                description={`Esta ação não poderá ser revertida, você tem certeza que quer de apagar o usuário ${
                  name ?? ''
                } ?`}
                confirmButtonName="Remover"
                handleConfirm={handleDelete}
                isLoading={isLoadingDelete}
              />
              <EditPermissionsModal
                open={openPermissionModal}
                handleClose={() => setOpenPermissionModal(false)}
                userId={idToEdit}
                allPermissions={permissionsRes?.data}
                initPermissions={initPermissions}
                refetch={refetch}
              />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default ListUser;
