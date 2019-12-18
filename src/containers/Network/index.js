
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import CustomAnimatedLinkDemo from 'containers/Network/Demos/CustomAnimatedLinkDemo';
import CustomNodeDemo from 'containers/Network/Demos/CustomNodeDemo';

const useStyles = makeStyles(theme => ({
  canvasWidget: {
    width: '100%',
    height: '100%'
  }
}));

const Network = () => {
  const classes = useStyles();

  return (
    <>
      {/* <CustomAnimatedLinkDemo className={classes.canvasWidget} /> */}
      <CustomNodeDemo className={classes.canvasWidget} />
    </>
  );
};

export default Network;
