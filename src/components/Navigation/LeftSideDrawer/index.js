
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import DrawerHeader from 'components/Navigation/LeftSideDrawer/DrawerHeader';
import DrawerMenu from 'components/Navigation/LeftSideDrawer/DrawerMenu';

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerPaper: {
    border: 'none',
    backgroundColor: theme.palette.blueGrey,
    boxShadow: `${theme.spacing(10/8, 20/8, 32/8, 0)} rgba(208, 235, 237, 0.3)`
  },
  drawerOpen: {
    width: theme.layout.openDrawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  closeDrawer: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.layout.closeDrawerWidth
  }
}));

const LeftSideDrawer = ({ open }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.closeDrawer]: !open
      })}
      classes={{
        paper: clsx(classes.drawerPaper, {
          [classes.drawerOpen]: open,
          [classes.closeDrawer]: !open
        })
      }}
      open={open}>
      <DrawerHeader />
      <DrawerMenu />
    </Drawer>
  );
};

export default LeftSideDrawer;
