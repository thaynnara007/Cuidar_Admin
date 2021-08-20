import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import MenuIcon from '../icons/iconMenu';
import ProfileIcon from '../icons/iconProfile';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    '& header.MuiAppBar-root': {
      backgroundColor: '#3F72AF',
    },
  },
  menuButton: {
    marginRight: '20px',
  },
  title: {
    flexGrow: 1,
    color: '#F9F7F7',
  },
  button: {
    color: '#F9F7F7',
  },
  avatar: {
    backgroundColor: '#F9F7F7',
  },
});

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon color="#F9F7F7" />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Cuidar
          </Typography>
          <IconButton color="inherit" aria-label="profile">
            <Avatar className={classes.avatar}>
              <ProfileIcon color="#112D4E" />
            </Avatar>
          </IconButton>
          <Button color="inherit" className={classes.button}>
            SAIR
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
