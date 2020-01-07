
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 0)
  },
  inputLabel: {
    color: theme.palette.text.primary,
    ...theme.typography.h6
  },
  inputBase: props => ({
    '& textarea': {
      padding: theme.spacing(1, 10/8),
      minHeight: theme.spacing(124/8),
      backgroundColor: props.greyBg ? theme.palette.background.default : theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      ...theme.typography.h6
    }
  }),
  inputBaseMultiline: {
    padding: 0
  }
}));

const LabeledTextArea = ({ label, greyBg, ...rest }) => {
  const classes = useStyles({greyBg});

  return (
    <div className={classes.root}>
      <InputLabel className={classes.inputLabel}>{label}</InputLabel>
      <InputBase
        multiline
        fullWidth
        {...rest}
        id={label}
        name={label}
        classes={{multiline: classes.inputBaseMultiline}}
        className={classes.inputBase} />
    </div>
  );
};

export default LabeledTextArea;
