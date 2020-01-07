
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: theme.spacing(8)
  }
}));

const PanelLabel = ({ label }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h4' color='secondary'>
        {label}
      </Typography>
    </div>
  );
};

export default PanelLabel;
