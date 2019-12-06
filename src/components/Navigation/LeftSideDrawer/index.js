
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import Hierarchy from 'components/Hierarchy';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.layout.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: theme.layout.drawerWidth
  },
  toolbar: theme.mixins.toolbar // TODO: modular with UI components
}));

const LeftSideDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{paper: classes.drawerPaper}}
      anchor='left'>
      <div className={classes.toolbar} />
      <Divider />
      <Hierarchy />
    </Drawer>
  );
};

export default LeftSideDrawer;
