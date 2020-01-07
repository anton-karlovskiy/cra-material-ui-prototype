
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import NetworkPanelListItem from './NetworkPanelListItem';
import GridIcon from 'components/Icons/SvgIcons/GridIcon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  }
}));

const NetworkPanelList = ({ selectedId, networkPanelListItems, openPopper, clickAway }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={clickAway}>
        <div>
          { networkPanelListItems.map(networkPanelListItem => (
            <NetworkPanelListItem
              selected={selectedId === networkPanelListItem.id}
              openPopperWithId={openPopper(networkPanelListItem.id)}
              id={networkPanelListItem.id}
              key={networkPanelListItem.id}
              icon={networkPanelListItem.icon}
              label={networkPanelListItem.label} />
          )) }
        </div>
      </ClickAwayListener>
      <NetworkPanelListItem icon={<GridIcon color='#fff' />} label='Show Grid' />
    </div>
  );
};

export default NetworkPanelList;
