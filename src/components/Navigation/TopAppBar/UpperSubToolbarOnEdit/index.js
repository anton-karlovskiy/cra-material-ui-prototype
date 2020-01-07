
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import CustomBreadcrumbs from 'components/CustomBreadcrumbs';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import commonUseStyles from 'styles/common-use-styles';
import RightNetworkPanel from 'components/Navigation/RightNetworkPanel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 30/8),
    minHeight: theme.custom.layout.upperSubToolbarHeight,
    position: 'relative'
  },
  leftMargin: {
    marginLeft: theme.spacing(6/8)
  }
}));

const UpperSubToolbarOnEdit = () => {
  const classes = useStyles();
  const commonClasses = commonUseStyles();

  return (
    <div className={clsx(classes.root, commonClasses.boxShadow)}>
      <CustomBreadcrumbs />
      <div>
        {/* TODO: handle color='error' */}
        <OutlinedButton className={classes.leftMargin} color='primary'>Cancel</OutlinedButton>
        <ContainedButton className={classes.leftMargin} color='secondary'>Save As...</ContainedButton>
        <ContainedButton className={classes.leftMargin} color='primary'>Save</ContainedButton>
      </div>
      <RightNetworkPanel />
    </div>
  );
};

export default UpperSubToolbarOnEdit;
