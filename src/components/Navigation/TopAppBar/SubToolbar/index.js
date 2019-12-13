
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import LabeledSelect from 'components/LabeledSelect';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.custom.palette.lightGrey,
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

const subMenus = [
  {
    id: 1,
    label: 'Dashboard',
  },
  {
    id: 2,
    label: 'Diagram',
  },
  {
    id: 3,
    label: 'Results',
  }
];

const SubToolbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const onChangeHandler = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <Tabs
        classes={{indicator: classes.tabIndicator}}
        value={value}
        indicatorColor='primary'
        textColor='inherit'
        onChange={onChangeHandler}
        aria-label='navigation subMenus'>
        { subMenus.map(subMenu => (
          <Tab
            key={subMenu.id}
            classes={{root: classes.tab}}
            label={subMenu.label} />
        )) }
      </Tabs>
      <div>
        <LabeledSelect label='Product' />
        <LabeledSelect label='Disposition' />
        {/* TODO: datepicker */}
        <LabeledSelect label='Date' />
      </div>
    </Paper>
  );
};

export default SubToolbar;
