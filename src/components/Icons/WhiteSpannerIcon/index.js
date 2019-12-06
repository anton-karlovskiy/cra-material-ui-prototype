
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SpannerIcon from 'components/Icons/SvgIcons/SpannerIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 18,
    height: 19
  }
}));

const WhiteSpannerIcon = () => {
  const classes = useStyles();

  return (
    <SpannerIcon className={classes.root} viewBox='0 0 18 19' />
  );
};

export default WhiteSpannerIcon;
