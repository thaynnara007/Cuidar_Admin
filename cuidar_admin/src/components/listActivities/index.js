import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Pagination from '@material-ui/lab/Pagination';
import IconButton from '@material-ui/core/IconButton';

import { AccordionDetails } from '@material-ui/core';
import AngleDownIcon from '../icons/iconAngleDown';
import TrashIcon from '../icons/iconTrash';
import { AccordionButton } from '../styles/buttons.style';
import { getActivities, deleteActivity } from '../../api';
import Loading from '../loading';
import ConfirmationModal from '../modal/confirmationModal';
import Header from '../header';
import { getIcon } from '../../utils/util';

const useStyles = makeStyles({
  heading: {
    fontSize: '15px',
    flexBasis: '40%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    color: '#112D4E',
    flexShrink: 0,
    flexBasis: '40%',
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
  descriptionDiv: {
    width: '48%',
  },
});

function ListActivities({ setPageState, idCategory }) {
  const history = useHistory();
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [name, setName] = useState('');

  const { data, isFetching, refetch } = useQuery(
    'activities',
    () => getActivities(idCategory, page),
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

  const handleShowDeleteModal = (idActivity, nameCategory) => {
    setIdToDelete(idActivity);
    setName(nameCategory);
    setOpenDeleteModal(true);
  };

  const handleDelete = async () => {
    const idActivity = idToDelete;
    const result = await deleteActivity(idActivity, setIsLoadingDelete);

    if (result) {
      toast.success('Atividade deletada com sucesso.');
      refetch();
    }

    setOpenDeleteModal(false);
  };

  const handleShowIcon = (iconName) => {
    const icon = getIcon(iconName);

    const iconComponent = React.cloneElement(icon, {
      size: '3x',
      styles: { marginRight: '6px', marginTop: '6px' },
    });

    return iconComponent;
  };

  const accordionActivityItens = (activities) =>
    activities?.map((activity) => (
      <Accordion key={activity.id}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          expandIcon={<AngleDownIcon size="xs" color="#7F7C82" />}
        >
          <div className={classes.heading}>{handleShowIcon(activity.icon)}</div>
          <Typography className={classes.secondaryHeading}>{`${activity.name}`}</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails style={{ justifyContent: 'space-between' }}>
          <div className={classes.descriptionDiv}>
            <Typography variant="overline">Descrição:</Typography>
            <Typography variant="body2" style={{ color: '#7F7C82' }}>
              {activity.description}
            </Typography>
          </div>
          <div className={classes.descriptionDiv}>
            <Typography variant="overline">Descrição da página:</Typography>
            <Typography variant="body2" style={{ color: '#7F7C82' }}>
              {activity.pageDescription}
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <AccordionButton onClick={() => history.push(`/activity/${activity?.id}/steps`)}>
            Ver passos
          </AccordionButton>
          <AccordionButton onClick={() => history.push(`/activity/${activity?.id}`)}>
            Editar
          </AccordionButton>
          <IconButton
            color="inherit"
            onClick={() => handleShowDeleteModal(activity.id, `${activity?.name}`)}
          >
            <TrashIcon size="1x" color="#BD4B4B" />
          </IconButton>
        </AccordionActions>
      </Accordion>
    ));

  return (
    <>
      <Header buttonName="Nova atividade" onClick={() => setPageState('create_acitvity')}>
        <Typography variant="h4">{data?.data.category.name ?? ''}</Typography>
      </Header>
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
            {accordionActivityItens(data?.data.rows)}
            <ConfirmationModal
              open={openDeleteModal}
              handleClose={() => setOpenDeleteModal(false)}
              title="Remover atividade"
              description={`Esta ação não poderá ser revertida, ao apagar uma atividade 
                todos os passos dessa atividade também serão apagados. 
                Você tem certeza que quer apagar a atividade ${name ?? ''} ?`}
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

export default ListActivities;
