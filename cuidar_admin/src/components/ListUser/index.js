import React, { useState } from 'react';
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

import AngleDownIcon from '../icons/iconAngleDown';
import { AccordionButton } from '../styles/buttons.style';
import { getUsers } from '../../api';
import Loading from '../loading';

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
});

function ListUser() {
  const classes = useStyles();
  const { data, isFetching } = useQuery('users', () => getUsers(), {
    refetchOnWindowFocus: false,
    retry: false,
  });

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
          <AccordionButton>Ver endereço</AccordionButton>
          <AccordionButton>Editar permissões</AccordionButton>
        </AccordionActions>
      </Accordion>
    ));

  return (
    <div style={{ width: '100%', marginTop: '2px' }}>
      {isFetching ? <Loading /> : accordionUserItens(data?.data.rows)}
    </div>
  );
}

export default ListUser;
