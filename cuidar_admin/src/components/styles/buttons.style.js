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
