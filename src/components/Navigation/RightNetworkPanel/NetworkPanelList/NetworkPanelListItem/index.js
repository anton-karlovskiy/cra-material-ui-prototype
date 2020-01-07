
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    minHeight: theme.custom.layout.lowerSubToolbarHeight
  },
  label: {
    marginTop: theme.spacing(5/8)
  },
  selected: {
    backgroundColor: theme.palette.primary.main
  }
}));

const NetworkPanelListItem = ({ id, icon, label, openPopperWithId, selected }) => {
  const classes = useStyles();

  return (
    <div
      onClick={openPopperWithId}
      className={clsx(classes.root, {
        [classes.selected]: selected
      })}>
      {icon}
      <Typography
        className={classes.label}
        variant='body2'>
        {label}
      </Typography>
    </div>
  );
};

export default NetworkPanelListItem;
