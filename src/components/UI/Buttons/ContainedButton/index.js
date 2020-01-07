
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: props => ({
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover': {
      boxShadow: 'none'
    },
    // TODO: handle color='error'
    // backgroundColor: props.color ? theme.palette[props.color].main : theme.palette.primary.main
  })
}));

const ContainedButton = ({ className, color, variant, children, ...rest }) => {
  const classes = useStyles();

  return (
    <Button
      className={clsx(classes.root, className)}
      color={color}
      variant='contained'
      {...rest}>
      {children}
    </Button>
  );
};

export default ContainedButton;
