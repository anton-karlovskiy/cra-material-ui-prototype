
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
    '& input': {
      padding: theme.spacing(0, 10/8),
      minHeight: theme.spacing(4.5),
      backgroundColor: props.greyBg ? theme.palette.background.default : theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      ...theme.typography.h6
    }
  })
}));

const LabeledTextField = ({ label, greyBg, ...rest }) => {
  const classes = useStyles({greyBg});

  return (
    <div className={classes.root}>
      <InputLabel className={classes.inputLabel}>{label}</InputLabel>
      <InputBase
        fullWidth
        {...rest}
        id={label}
        name={label}
        className={classes.inputBase} />
    </div>
  );
};

export default LabeledTextField;
