import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

export const CustomButton = withStyles({
  root: {
    color: '#F9F7F7',
    backgroundColor: '#112D4E',
    '&:hover': {
      backgroundColor: '#3F72AF',
    },
  },
})(Button);

export const HeaderButton = withStyles({
  root: {
    color: '#3F72AF',
    border: 'solid 1px #3F72AF',
    '&:hover': {
      backgroundColor: '#DBE2EF',
      border: 'solid 1px #DBE2EF',
    },
    margin: '0px 20px',
    marginBottom: '10px',
    padding: '10px 20px',
  },
})(Button);

export const AccordionButton = withStyles({
  root: {
    color: '#3F72AF',
    margin: '0px 20px',
    padding: '10px 20px',
  },
})(Button);

export const CardButton = withStyles({
  root: {
    width: '80%',
    marginRight: '30px',
    marginTop: '4px',
    textTransform: 'none',
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#24267E',
    '&:hover': {
      backgroundColor: '#24267E',
      color: '#FFFFFF',
    },
    paddingTop: '2px',
    paddingBottom: '2px',
  },
})(Button);

export const ActivityButton = withStyles({
  root: {
    width: '56%',
    margin: '0px auto',
    marginBottom: '90px',
    marginTop: '20px',
    borderRadius: '15px',
    textTransform: 'none',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: '30px',
    backgroundColor: '#24267E',
    '&:hover': {
      backgroundColor: '#24267E',
      color: '#FFFFFF',
    },
  },
})(Button);

export const NextStepButton = withStyles({
  root: {
    margin: '0px auto',
    marginTop: '31px',
    padding: '6px 30px',
    borderRadius: '15px',
    textTransform: 'none',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: '25px',
    backgroundColor: '#24267E',
    '&:hover': {
      backgroundColor: '#24267E',
      color: '#FFFFFF',
    },
  },
})(Button);

export const BeforeButton = withStyles({
  root: {
    margin: '10px auto',
    textTransform: 'none',
    fontSize: '18px',
    color: '#24267E',
    '&:hover': {
      backgroundColor: 'transparent'
    },
  },
})(Button);
