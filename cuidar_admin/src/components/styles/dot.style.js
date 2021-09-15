import { withStyles } from '@material-ui/core';
import { TimelineDot } from '@material-ui/lab';

export const BlueTimelineDot = withStyles({
  root: {
    backgroundColor: '#D3E0EA',
  },
})(TimelineDot);

export const FinalTimelineDot = withStyles({
  root: {
    backgroundColor: '#3F72AF',
  },
})(TimelineDot);
