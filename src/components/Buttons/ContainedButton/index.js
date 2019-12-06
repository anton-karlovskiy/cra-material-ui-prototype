
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: props => ({
    margin: theme.spacing(3/8),
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
      className={clsx(className, classes.root)}
      color={color}
      variant='contained'
      {...rest}>
      {children}
    </Button>
  );
};

export default ContainedButton;
