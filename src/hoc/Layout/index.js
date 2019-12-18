
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopAppBar from 'components/Navigation/TopAppBar';
import LeftSideDrawer from 'components/Navigation/LeftSideDrawer';

const appbarHeight = 150;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  main: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    marginTop: appbarHeight, // TODO: hardcoded matching with appbar height
    minHeight: `calc(100vh - ${appbarHeight}px)`
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const openDrawerHandler = () => {
    setOpen(true);
  };

  const closeDrawerHandler = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <TopAppBar openDrawer={openDrawerHandler} closeDrawer={closeDrawerHandler} open={open} />
      <LeftSideDrawer open={open} />
      <main className={classes.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
