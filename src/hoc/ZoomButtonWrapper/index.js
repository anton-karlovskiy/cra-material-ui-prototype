
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ContainedButton from 'components/UI/Buttons/ContainedButton';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    minWidth: theme.spacing(6),
    minHeight: theme.spacing(6),
    backgroundColor: theme.palette.background.paper
  },
  text: {
    ...theme.typography.h3,
    color: theme.palette.primary.main
  }
}));

const ZoomButtonWrapper = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <ContainedButton
      {...rest}
      classes={{
        root: classes.root,
        label: classes.text
      }}>
      {children}
    </ContainedButton>
  );
};

export default ZoomButtonWrapper;
