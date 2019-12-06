
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PlusIcon from 'components/Icons/SvgIcons/PlusIcon';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.lightTeal,
    width: 13,
    height: 13
  }
}));

const LightTealPlusIcon = () => {
  const classes = useStyles();

  return (
    <PlusIcon className={classes.root} viewBox='0 0 13 13' />
  );
};

export default LightTealPlusIcon;
