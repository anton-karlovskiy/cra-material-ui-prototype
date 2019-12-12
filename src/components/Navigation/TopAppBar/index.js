
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import OutlinedButton from 'components/Buttons/OutlinedButton';
import ContainedButton from 'components/Buttons/ContainedButton';
import SubToolbar from 'components/Navigation/TopAppBar/SubToolbar';

const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: theme.layout.closeDrawerWidth,
    width: `calc(100% - ${theme.layout.closeDrawerWidth}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    boxShadow: `${theme.spacing(10/8, 20/8, 32/8, 0)} rgba(208, 235, 237, 0.3)`,
    backgroundColor: theme.palette.common.white
  },
  appBarShift: {
    marginLeft: theme.layout.openDrawerWidth,
    width: `calc(100% - ${theme.layout.openDrawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolbar: {
    padding: theme.spacing(20/8, 30/8),
    display: 'block'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  }
}));

const TopAppBar = ({ open, openDrawer, closeDrawer }) => {
  const classes = useStyles();

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}>
      <Toolbar className={classes.toolbar}>
        <Box
          mb={2}
          flexGrow={1}
          display='flex'
          justifyContent='space-between'
          alignItems='center'>
          <Box display='flex' alignItems='center'>
            {/* TODO: replace with svgicon */}
            <IconButton
              aria-label='open drawer'
              onClick={openDrawer}
              color='primary'
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}>
              <MenuIcon />
            </IconButton>
            <IconButton
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
          </Box>
          <div>
            <OutlinedButton color='secondary'>Export...</OutlinedButton>
            <ContainedButton color='secondary'>Edit</ContainedButton>
          </div>
        </Box>
        <SubToolbar />
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
