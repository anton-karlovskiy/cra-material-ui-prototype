
import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PropertiesIcon from 'components/Icons/SvgIcons/PropertiesIcon';
import LibraryIcon from 'components/Icons/SvgIcons/LibraryIcon';
import TemplatesIcon from 'components/Icons/SvgIcons/TemplatesIcon';
import ConnectionsIcon from 'components/Icons/SvgIcons/ConnectionsIcon';
import UsersIcon from 'components/Icons/SvgIcons/UsersIcon';
import NetworkPanelList from './NetworkPanelList';
import NetworkPanelPopper from './NetworkPanelPopper';
import PropertiesPanel from './NetworkPanelPopper/PropertiesPanel';
import LibraryPanel from './NetworkPanelPopper/LibraryPanel';
import TemplatesPanel from './NetworkPanelPopper/TemplatesPanel';
import ConnectionsPanel from './NetworkPanelPopper/ConnectionsPanel';
import UsersAndGroupsPanel from './NetworkPanelPopper/UsersAndGroupsPanel';

// TODO: color is hardcoded
const networkPanelListItems = [
  {
    id: 'properties',
    icon: <PropertiesIcon color='#fff' />,
    label: 'Properties',
    panel: <PropertiesPanel />
  },
  {
    id: 'library',
    icon: <LibraryIcon color='#fff' />,
    label: 'Library',
    panel: <LibraryPanel />
  },
  {
    id: 'templates',
    icon: <TemplatesIcon color='#fff' />,
    label: 'Templates',
    panel: <TemplatesPanel />
  },
  {
    id: 'connections',
    icon: <ConnectionsIcon color='#fff' />,
    label: 'Connections',
    panel: <ConnectionsPanel />
  },
  {
    id: 'users-and-groups',
    icon: <UsersIcon color='#fff' />,
    label: 'Users and Groups',
    panel: <UsersAndGroupsPanel />
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: theme.custom.layout.upperSubToolbarHeight,
    height: `calc(100vh - ${theme.custom.layout.upperSubToolbarHeight}px)`,
    width: 64,
    backgroundColor: theme.custom.palette.darkBlue
  }
}));

const RightNetworkPanel = () => {
  const classes = useStyles();
  const popperRef = useRef(null);
  const popperPaperRef = useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState('');

  const openPopperHandler = id => event => {
    if (id !== selectedId) {
      setSelectedId(id);
    }
    if (!isOpen) {
      setIsOpen(id !== '');
    }
  };

  const clickAwayHandler = event => {
    if (!popperPaperRef.current || popperPaperRef.current.contains(event.target)) {
      return;
    }

    setIsOpen(false);
    setSelectedId('');
  };

  const selectedNetworkPanelListItem =
    selectedId ?
    networkPanelListItems.find(networkPanelListItem => networkPanelListItem.id === selectedId) :
    null;
  
  return (
    <>
      { selectedNetworkPanelListItem && (
        <NetworkPanelPopper
          panelLabel={selectedNetworkPanelListItem.label}
          popperRef={popperRef}
          popperPaperRef={popperPaperRef}
          isOpen={isOpen}
          clickAway={clickAwayHandler}>
          {selectedNetworkPanelListItem.panel}
        </NetworkPanelPopper>
      ) }
      <div ref={popperRef} className={classes.root}>
        <NetworkPanelList
          selectedId={selectedId}
          networkPanelListItems={networkPanelListItems}
          openPopper={openPopperHandler}
          clickAway={clickAwayHandler} />
      </div>
    </>
  );
};

export default RightNetworkPanel;
