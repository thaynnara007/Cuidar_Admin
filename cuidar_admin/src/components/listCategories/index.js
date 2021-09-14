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

import AngleDownIcon from '../icons/iconAngleDown';
import TrashIcon from '../icons/iconTrash';
import { AccordionButton } from '../styles/buttons.style';
import { getCategories, deleteCategory } from '../../api';
import Loading from '../loading';
import ConfirmationModal from '../modal/confirmationModal';
import Header from '../header';
import { getIcon } from '../../utils/util';
import ShowColor from '../color';

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
});

function ListCategories({ setPageState }) {
  const history = useHistory();
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [name, setName] = useState('');

  const {
    data: categories,
    isFetching,
    refetch,
  } = useQuery('categories', () => getCategories(page), {
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    refetch();
  }, [page]);

  const handlePagination = (event, value) => {
    setPage(value);
  };

  const handleShowDeleteModal = (id, nameCategory) => {
    setIdToDelete(id);
    setName(nameCategory);
    setOpenDeleteModal(true);
  };

  const handleDelete = async () => {
    const id = idToDelete;
    const result = await deleteCategory(id, setIsLoadingDelete);

    if (result) {
      toast.success('Categoria deletada com sucesso.');
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

  const accordionCategoryItens = (categoriesList) =>
    categoriesList?.map((category) => (
      <Accordion key={category.id}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          expandIcon={<AngleDownIcon size="xs" color="#7F7C82" />}
        >
          <div className={classes.heading}>{handleShowIcon(category.icon)}</div>
          <Typography className={classes.secondaryHeading}>{`${category.name}`}</Typography>
          <ShowColor color={category.color} styles={{ flexShrink: 0, flexBasis: '12%' }} />
        </AccordionSummary>
        <Divider />
        <AccordionActions>
          <AccordionButton onClick={() => history.push(`/category/${category?.id}/activities`)}>
            Ver atividades
          </AccordionButton>
          <AccordionButton onClick={() => history.push(`/category/${category?.id}`)}>
            Detalhes
          </AccordionButton>
          <IconButton
            color="inherit"
            onClick={() => handleShowDeleteModal(category.id, `${category?.name}`)}
          >
            <TrashIcon size="1x" color="#BD4B4B" />
          </IconButton>
        </AccordionActions>
      </Accordion>
    ));

  return (
    <>
      <Header buttonName="Nova categoria" onClick={() => setPageState('create_category')}>
        <Typography variant="h4">Categorias</Typography>
      </Header>
      <div style={{ width: '100%', marginTop: '2px' }}>
        {isFetching ? (
          <Loading />
        ) : (
          <>
            <Pagination
              className={classes.pagination}
              count={categories?.data.pages}
              page={page}
              onChange={handlePagination}
              shape="rounded"
            />
            {accordionCategoryItens(categories?.data.rows)}
            <ConfirmationModal
              open={openDeleteModal}
              handleClose={() => setOpenDeleteModal(false)}
              title="Remover categoria"
              description={`Esta ação não poderá ser revertida, ao apagar uma categoria, 
                todas as atividades dessa categoria também serão apagadas. 
                Você tem certeza que quer apagar a categoria ${name ?? ''} ?`}
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

export default ListCategories;
