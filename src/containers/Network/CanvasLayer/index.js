
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    minHeight: '100%'
  }
}));

const CanvasLayer = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  );
};

export default CanvasLayer;
