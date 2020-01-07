
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LabeledDatePicker from 'components/LabeledDatePicker';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 30/8),
    minHeight: theme.custom.layout.lowerSubToolbarHeight
  }
}));

const LowerSubToolbarOnEdit = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LabeledDatePicker greyBg label='Effective from:' />
      <LabeledDatePicker greyBg label='Effective to:' />
    </div>
  );
};

export default LowerSubToolbarOnEdit;
