
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import DiagramIcon from 'components/Icons/SvgIcons/DiagramIcon';
import ClockIcon from 'components/Icons/SvgIcons/ClockIcon';
import SpannerIcon from 'components/Icons/SvgIcons/SpannerIcon';

const useStyles = makeStyles(theme => ({
  tabs: {
    width: '100%'
  },
  tabRoot: {
    padding: 0,
    maxWidth: '100%',
    minWidth: theme.custom.layout.openedDrawerWidth
  },
  tabIndicator: {
    display: 'none'
  },
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  tabLabelIcon: {
    padding: 0,
    minHeight: theme.spacing(8)
  },
  tabIconWrapper: {
    width: theme.custom.layout.closedDrawerWidth,
    display: 'flex',
    justifyContent: 'center'
  },
  selectedTab: {
    backgroundColor: theme.palette.primary.main,
    transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeIn} 0ms` // TODO: improve animation
  }
}));

const getMenus = iconColor => ([
  {
    id: 1,
    label: 'Networks',
    icon: <DiagramIcon color={iconColor} />
  },
  {
    id: 2,
    label: 'Scheduling',
    icon: <ClockIcon color={iconColor} />
  },
  {
    id: 3,
    label: 'Configuration',
    icon: <SpannerIcon color={iconColor} />
  }
]);

const TabIconWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.tabIconWrapper}>{children}</div>
  );
};

const TabLabel = ({ children }) => (
  <Typography variant='h5' color='textSecondary'>
    {children}
  </Typography>
);

const DrawerMenu = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const onChangeHandler = (event, newValue) => {
    setValue(newValue);
  };

  const menus = getMenus(theme.palette.common.white);

  return (
    <Tabs
      classes={{indicator: classes.tabIndicator}}
      orientation='vertical'
      variant='scrollable'
      value={value}
      onChange={onChangeHandler}
      aria-label='vertical menu bar'
      className={classes.tabs}>
      { menus.map(menu => (
        <Tab
          key={menu.id}
          id={`vertical-tab-${menu.id}`}
          aria-controls={`vertical-tabpanel-${menu.id}`}
          classes={{
            root: classes.tabRoot,
            selected: classes.selectedTab,
            wrapper: classes.tabWrapper,
            labelIcon: classes.tabLabelIcon
          }}
          icon={
            <TabIconWrapper>
              {menu.icon}
            </TabIconWrapper>
          }
          label={<TabLabel>{menu.label}</TabLabel>} />
      )) }
    </Tabs>
  );
};

export default DrawerMenu;
