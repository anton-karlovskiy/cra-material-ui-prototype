
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ClockIcon from 'components/Icons/SvgIcons/ClockIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 18,
    height: 18
  }
}));

const WhiteClockIcon = () => {
  const classes = useStyles();

  return (
    <ClockIcon className={classes.root} viewBox='0 0 18 18' />
  );
};

export default WhiteClockIcon;
