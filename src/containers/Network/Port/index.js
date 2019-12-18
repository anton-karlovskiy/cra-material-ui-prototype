
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    zIndex: 10,
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: theme.spacing(1),
    cursor: 'pointer',
    // TODO: error prone
    // '&:hover' {
    //   background: 'rgba(0, 0, 0, 1)',
    // }
  }
}));

const Port = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} />
  );
};

export default Port;
