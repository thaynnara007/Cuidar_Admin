import React, { useState } from 'react'
import { useQuery } from 'react-query'

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

const useStyles = makeStyles({
  heading: {
    fontSize: '15px',
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: '15px',
    color: "#7F7C82",
  },
  box: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
  },
  chip: {
    margin: '5px'
  }
})

const cu =  [
  {name: "criar usuário", description: "permite a criação e edição de usuários"},
  {name: "remove usuário", description: "permite a criação e edição de usuários"},
  {name: "criar atividade", description: "permite a criação e edição de usuários"},
  {name: "editar usuário", description: "permite a criação e edição de usuários"},
]

function ListUser() {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return(
    <div style={{ width: '100%', marginTop: '2px'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          expandIcon={<AngleDownIcon size='1x' color="#7F7C82"/>}
        >
          <Typography className={classes.heading}>Thaynnara Gonçalves</Typography>
          <Typography className={classes.secondaryHeading}>thaynnara.goncalves@ccc.ufcg.edu.br</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.box}>
            {
              cu.map( c => {
                return (
                  <li key={c.name}>
                    <Tooltip title={c.description}>
                      <Chip 
                        label={c.name}
                        className={classes.chip}
                      />
                    </Tooltip>
                  </li>
                )
              })
            }
          </Box>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <AccordionButton>Detalhes</AccordionButton>
          <AccordionButton>Editar permissões</AccordionButton>
        </AccordionActions>
      </Accordion>
    </div>
  )
}

export default ListUser