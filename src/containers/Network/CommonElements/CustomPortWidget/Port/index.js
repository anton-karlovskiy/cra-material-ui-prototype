
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: props => ({
    width: theme.spacing(2),
    height: theme.spacing(2),
    zIndex: 10,
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0, 0, 0, 1)',
    }
  })
}));

const Port = ({ size = {} }) => {
  const classes = useStyles({size});

  return (
    <div className={classes.root} />
  );
};

export default Port;
