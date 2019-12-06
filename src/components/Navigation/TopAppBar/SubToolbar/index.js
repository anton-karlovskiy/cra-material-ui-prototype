
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import JoynSelect from 'components/JoynSelect';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.lightGrey,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tab: {
    textTransform: 'none',
    minWidth: 68,
    margin: theme.spacing(0, 18.8/8),
    paddingLeft: 0,
    paddingRight: 0,
    opacity: 1,
    color: theme.palette.common.black,
    ...theme.typography.h5,
    fontWeight: theme.typography.fontWeightBold
  },
  tabIndicator: {
    height: theme.spacing(.5),
    borderRadius: 2
  }
}));

const SubToolbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const onChangeHandler = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      {/* TODO: Tabs might be independent component */}
      <Tabs
        classes={{indicator: classes.tabIndicator}}
        value={value}
        indicatorColor='primary'
        textColor='inherit'
        onChange={onChangeHandler}
        aria-label='navigation tabs'>
        <Tab classes={{root: classes.tab}} label='Dashboard' />
        <Tab classes={{root: classes.tab}} label='Diagram' />
        <Tab classes={{root: classes.tab}} label='Results' />
      </Tabs>
      <JoynSelect />
    </Paper>
  );
};

export default SubToolbar;
