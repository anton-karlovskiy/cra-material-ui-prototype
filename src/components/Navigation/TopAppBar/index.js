
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import UpperSubToolbarOnView from './UpperSubToolbarOnView';
import UpperSubToolbarOnEdit from './UpperSubToolbarOnEdit';
import LowerSubToolbarOnView from './LowerSubToolbarOnView';
import LowerSubToolbarOnEdit from './LowerSubToolbarOnEdit';
import commonUseStyles from 'styles/common-use-styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: theme.custom.layout.closedDrawerWidth,
    width: `calc(100% - ${theme.custom.layout.closedDrawerWidth}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: theme.palette.common.white
  },
  appBarShift: {
    marginLeft: theme.custom.layout.openedDrawerWidth,
    width: `calc(100% - ${theme.custom.layout.openedDrawerWidth}px)`
  },
  toolbar: {
    display: 'block'
  }
}));

const TopAppBar = ({ open, openDrawer, closeDrawer }) => {
  const classes = useStyles();
  const commonClasses = commonUseStyles();
  const [isEditMode, setEditMode] = useState(true);

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, commonClasses.boxShadow, {
        [classes.appBarShift]: open
      })}>
      <Toolbar disableGutters className={classes.toolbar}>
        { isEditMode ? (
          <>
            <UpperSubToolbarOnEdit />
            <LowerSubToolbarOnEdit />
          </>
        ) : (
          <>
            <UpperSubToolbarOnView
              open={open}
              openDrawer={openDrawer}
              closeDrawer={closeDrawer} />
            <LowerSubToolbarOnView />
          </>
        ) }
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
