import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

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
import { toast } from 'react-toastify';

import AngleDownIcon from '../icons/iconAngleDown';
import TrashIcon from '../icons/iconTrash';
import { AccordionButton } from '../styles/buttons.style';
import { getUsers, deleteUser } from '../../api';
import Loading from '../loading';
import FormModal from '../modal/formModal';
import ConfirmationModal from '../modal/confirmationModal';

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

function ListUser() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const [address, setAddress] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { data, isFetching, refetch } = useQuery('users', () => getUsers(page), {
    refetchOnWindowFocus: false,
    retry: false,
  });

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
    const result = await deleteUser(id, setIsLoading);

    if (result) {
      toast.success('Usário deletado com sucesso.');
      refetch();
    }

    setOpenDeleteModal(false);
  };

  const accordionUserItens = (users) =>
    users.map((user) => (
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

  return (
    <div style={{ width: '100%', marginTop: '2px' }}>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <Pagination
            className={classes.pagination}
            count={data?.data.pages}
            page={page}
            onChange={handlePagination}
            shape="rounded"
          />
          {accordionUserItens(data?.data.rows)}
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
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
}

export default ListUser;
