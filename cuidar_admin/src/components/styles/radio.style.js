import React from 'react';
import { Radio, withStyles } from '@material-ui/core';

export const BlueRadio = withStyles({
  root: {
    color: '#3F72AF',
    '&$checked': {
      color: '#3F72AF',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
