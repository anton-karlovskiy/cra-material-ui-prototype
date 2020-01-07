
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Logo from 'components/Logo';
import SearchIcon from 'components/Icons/SvgIcons/SearchIcon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: theme.spacing(10),
    backgroundColor: theme.palette.common.white
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const DrawerHeader = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <Logo widthSpan={theme.custom.layout.closedDrawerWidth} />
        <Typography variant='h4' color='secondary'>My Networks</Typography>
      </div>
      <SearchIcon width={17} height={17} color={theme.palette.primary.main} />
    </div>
  );
};

export default DrawerHeader;
