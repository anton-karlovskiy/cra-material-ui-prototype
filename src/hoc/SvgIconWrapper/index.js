
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles({
  root: props => ({
    cursor: 'pointer',
    color: props.color,
    width: props.width,
    height: props.height
  })
});

const SvgIconWrapper = ({ viewBox, className, width, height, color, children, ...rest }) => {
  const classes = useStyles({width, height, color});

  return (
    <SvgIcon className={clsx(classes.root, className)} viewBox={viewBox} {...rest}>
      {children}
    </SvgIcon>
  );
};

export default SvgIconWrapper;
