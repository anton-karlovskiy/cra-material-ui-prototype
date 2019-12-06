
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import DiagramIcon from 'components/Icons/SvgIcons/DiagramIcon';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    width: 20,
    height: 18
  }
}));

const WhiteDiagramIcon = () => {
  const classes = useStyles();

  return (
    <DiagramIcon className={classes.root} viewBox='0 0 20 18' />
  );
};

export default WhiteDiagramIcon;
