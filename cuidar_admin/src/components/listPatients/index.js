import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Pagination from '@material-ui/lab/Pagination';
import IconButton from '@material-ui/core/IconButton';

import AngleDownIcon from '../icons/iconAngleDown';
import TrashIcon from '../icons/iconTrash';
import { AccordionButton } from '../styles/buttons.style';
import { getUsers, deleteUser } from '../../api';
import Loading from '../loading';
import ConfirmationModal from '../modal/confirmationModal';
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

function ListPatients({ setPageState }) {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [address, setAddress] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [idToEdit, setIdToEdit] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const {
    data: patients,
    isFetching,
    refetch,
  } = useQuery('users', () => getUsers(page), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    refetch();
  }, [page]);

  const handlePagination = (event, value) => {
    setPage(value);
  };

  const handleShowDeleteModal = (id) => {
    setIdToDelete(id);
    setOpenDeleteModal(true);
  };

  const handleDelete = async () => {
    const id = idToDelete;
    const result = await deleteUser(id, setIsLoadingDelete);

    if (result) {
      toast.success('Paciente deletado com sucesso.');
      refetch();
    }

    setOpenDeleteModal(false);
  };

  const accordionPatientItens = (users) =>
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
        <AccordionDetails></AccordionDetails>
        <Divider />
        <AccordionActions>
          <AccordionButton onClick={() => {}}>Detalhes</AccordionButton>
          <IconButton color="inherit" onClick={() => handleShowDeleteModal(user.id)}>
            <TrashIcon size="1x" color="#BD4B4B" />
          </IconButton>
        </AccordionActions>
      </Accordion>
    ));

  return (
    <>
      <Header buttonName="Novo paciente" onClick={() => setPageState('create_patient')}>
        <Typography variant="h4">Pacientes</Typography>
      </Header>
      <div style={{ width: '100%', marginTop: '2px' }}>
        {isFetching ? (
          <Loading />
        ) : (
          <>
            <Pagination
              className={classes.pagination}
              count={patients?.data.pages}
              page={page}
              onChange={handlePagination}
              shape="rounded"
            />
            {accordionPatientItens(patients?.data.rows)}
            <ConfirmationModal
              open={openDeleteModal}
              handleClose={() => setOpenDeleteModal(false)}
              title="Remover paciente"
              description="Esta ação não poderá ser revertida, você tem certeza que quer de apagar este paciente?"
              confirmButtonName="Remover"
              handleConfirm={handleDelete}
              isLoading={isLoadingDelete}
            />
          </>
        )}
      </div>
    </>
  );
}

export default ListPatients;
