
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import ZoomInButton from './ZoomInButton';
import ZoomOutButton from './ZoomOutButton';
import ZoomFitButton from './ZoomFitButton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const scrollDelta = 10;

const ZoomButtons = ({ engine, className }) => {
  const classes = useStyles();

  const model = engine.getModel();
  const zoomInHandler = () => {
    model.setZoomLevel(model.getZoomLevel() + scrollDelta);
    engine.repaintCanvas();
  };
  const zoomOutHandler = () => {
    model.setZoomLevel(model.getZoomLevel() - scrollDelta);
    engine.repaintCanvas();
  };
  const zoomFitHandler = () => {
    engine.zoomToFit();
    model.setZoomLevel(100);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <ZoomInButton onClick={zoomInHandler} />
      <ZoomOutButton onClick={zoomOutHandler} />
      <ZoomFitButton onClick={zoomFitHandler} />
    </div>
  );
};

export default ZoomButtons;
