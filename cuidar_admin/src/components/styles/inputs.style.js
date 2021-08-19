import { TextField, withStyles } from '@material-ui/core';

export const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#112D4E',
    },
    '& p.MuiFormHelperText-root': {
      color: '#F9F7F7',
      fontSize: '15px',
    },
    '& p.Mui-focused': {
      color: '#112D4E',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#112D4E',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#F9F7F7',
      },
      '&:hover fieldset': {
        borderColor: '#DBE2EF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#112D4E',
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important',
      },
    },
  },
})(TextField);
