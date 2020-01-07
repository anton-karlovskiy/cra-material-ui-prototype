
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import DrawerHeader from 'components/Navigation/LeftSideDrawer/DrawerHeader';
import DrawerMenu from 'components/Navigation/LeftSideDrawer/DrawerMenu';
import commonUseStyles from 'styles/common-use-styles';

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerPaper: {
    border: 'none',
    backgroundColor: theme.custom.palette.blueGrey
  },
  drawerOpen: {
    width: theme.custom.layout.openedDrawerWidth,
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
    width: theme.custom.layout.closedDrawerWidth
  }
}));

const LeftSideDrawer = ({ open }) => {
  const classes = useStyles();
  const commonClasses = commonUseStyles();

  return (
    <Drawer
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.closeDrawer]: !open
      })}
      classes={{
        paper: clsx(classes.drawerPaper, commonClasses.boxShadow, {
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
