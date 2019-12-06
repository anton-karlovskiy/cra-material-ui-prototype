
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// TODO: optimize bundle for performance
import smallWebpLogo from 'assets/images/logo/webp/logo.webp';
import mediumWebpLogo from 'assets/images/logo/webp/logo@2x.webp';
import largeWebpLogo from 'assets/images/logo/webp/logo@3x.webp';

import smallPngLogo from 'assets/images/logo/png/logo.png';
import mediumPngLogo from 'assets/images/logo/png/logo@2x.png';
import largePngLogo from 'assets/images/logo/png/logo@3x.png';

import imagePlaceHolder from 'assets/images/placeholder.gif';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(.5),
    width: 56,
    height: 56
  }
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <picture>
        <source srcSet={`${smallWebpLogo} 600w, ${mediumWebpLogo} 960w, ${largeWebpLogo} 1280w`} type='image/webp' />
        <source srcSet={`${smallPngLogo} 600w, ${mediumPngLogo} 960w, ${largePngLogo} 1280w`} type='image/png' />
        <img
          width='100%'
          className={classes.image}
          src={imagePlaceHolder}
          alt='three cicles in green' />
      </picture>
    </div>
  );
};

export default Logo;
