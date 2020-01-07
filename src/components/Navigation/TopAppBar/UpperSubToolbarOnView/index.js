
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import ContainedButton from 'components/UI/Buttons/ContainedButton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 30/8),
    minHeight: theme.custom.layout.upperSubToolbarHeight
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  leftMargin: {
    marginLeft: theme.spacing(6/8)
  }
}));

const UpperSubToolbarOnView = ({ open, openDrawer, closeDrawer }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        {/* TODO: replace with svgicon */}
        <IconButton
          edge='start'
          aria-label='open drawer'
          onClick={openDrawer}
          color='primary'
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}>
          <MenuIcon />
        </IconButton>
        <IconButton
          edge='start'
          aria-label='close drawer'
          onClick={closeDrawer}
          color='primary'
          className={clsx(classes.menuButton, {
            [classes.hide]: !open
          })}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography color='textPrimary' variant='h3'>
          Washington 10H Battery Oil
        </Typography>
      </div>
      <div>
        <OutlinedButton className={classes.leftMargin} color='secondary'>Export...</OutlinedButton>
        <ContainedButton className={classes.leftMargin} color='secondary'>Edit</ContainedButton>
      </div>
    </div>
  );
};

export default UpperSubToolbarOnView;
