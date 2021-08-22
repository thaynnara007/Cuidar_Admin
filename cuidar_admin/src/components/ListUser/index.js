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

import AngleDownIcon from '../icons/iconAngleDown';
import TrashIcon from '../icons/iconTrash';
import { AccordionButton } from '../styles/buttons.style';
import { getUsers } from '../../api';
import Loading from '../loading';
import CustomModal from '../modal';

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
});

function ListUser() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [openAddressModal, setOpenAddressModal] = useState(false);

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
          <AccordionButton onClick={() => setOpenAddressModal(true)}>Ver endereço</AccordionButton>
          <AccordionButton>Editar permissões</AccordionButton>
          <IconButton color="inherit">
            <TrashIcon size="1x" color="#BD4B4B" />
          </IconButton>
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
          <CustomModal open={openAddressModal} handleClose={() => setOpenAddressModal(false)}>
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              Endereço
            </Typography>
            <Divider />
          </CustomModal>
        </>
      )}
    </div>
  );
}

export default ListUser;
