
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MinusIcon from 'components/Icons/SvgIcons/MinusIcon';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.lightTeal,
    width: 13,
    height: 13
  }
}));

const LightTealMinusIcon = () => {
  const classes = useStyles();

  return (
    <MinusIcon className={classes.root} viewBox='0 0 13 13' />
  );
};

export default LightTealMinusIcon;
