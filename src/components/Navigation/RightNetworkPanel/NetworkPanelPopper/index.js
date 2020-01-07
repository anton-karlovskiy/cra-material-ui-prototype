
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import PanelLabel from './PanelLabel';

const useStyles = makeStyles(theme => ({
  popper: {
    width: theme.custom.layout.networkPopperWidth,
    height: `calc(100vh - ${theme.custom.layout.upperSubToolbarHeight}px)`,
    zIndex: theme.zIndex.drawer + 2
  },
  popperPaper: {
    height: '100%',
    padding: theme.spacing(0, 2.5)
  }
}));

const NetworkPanelPopper = ({ popperRef, popperPaperRef, isOpen, clickAway, panelLabel, children }) => {
  const classes = useStyles();

  return (
    <Popper
      className={classes.popper}
      open={isOpen}
      anchorEl={popperRef.current}
      placement='left-start'
      transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper
            ref={popperPaperRef}
            className={classes.popperPaper}
            square
            elevation={0}>
            <PanelLabel label={panelLabel} />
            {children}
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default NetworkPanelPopper;
