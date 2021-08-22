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
})(Button)
