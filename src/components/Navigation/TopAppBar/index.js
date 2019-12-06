
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import OutlinedButton from 'components/Buttons/OutlinedButton';
import SubToolbar from 'components/Navigation/TopAppBar/SubToolbar';

const useStyles = makeStyles(theme => ({
  root: {
    width: `calc(100% - ${theme.layout.drawerWidth}px)`,
    marginLeft: theme.layout.drawerWidth,
    boxShadow: `${theme.spacing(10/8, 20/8, 4, 0)} rgba(208, 235, 237, 0.3)`,
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    padding: theme.spacing(20/8, 30/8),
    display: 'block'
  }
}));

const TopAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Box
          mb={2}
          flexGrow={1}
          display='flex'
          justifyContent='space-between'
          alignItems='center'>
          <Typography color='textPrimary' variant='h3'>
            Washington 10H Battery Oil
          </Typography>
          <OutlinedButton color='secondary'>Export...</OutlinedButton>
        </Box>
        <SubToolbar />
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
