
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: props => ({
    color: props.color,
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(2)
  })
}));

const NodeAnnotation = ({ color, nodeName, className, ...rest }) => {
  const classes = useStyles({color});

  return (
    <Typography
      className={clsx(classes.root, className)}
      variant='caption'
      {...rest}>
      {nodeName}
    </Typography>
  );
};

export default NodeAnnotation;
