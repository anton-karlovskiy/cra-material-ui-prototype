
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';

import PlusIcon from 'components/Icons/SvgIcons/PlusIcon';
import MinusIcon from 'components/Icons/SvgIcons/MinusIcon';
import JoynTreeItem from 'components/Hierarchy/JoynTreeItem';

const GeographicalHierarchy = [
  {
    nodeId: 'permian-basin',
    label: 'Permian Basin',
    children: [
      {
        nodeId: 'west-texas',
        label: 'West Texas',
        children: [
          {
            nodeId: 'john-adams-1h-combined',
            label: 'John Adams 1H Combined'
          },
          {
            nodeId: 'washington-10h-battery-oil',
            label: 'Washington 10H Battery Oil'
          },
          {
            nodeId: 'washington-10h-battery-gas',
            label: 'Washington 10H Battery Gas'
          },
          {
            nodeId: 'washington-10h-battery-water',
            label: 'Washington 10H Battery Water'
          },
          {
            nodeId: 'redford-a1h-combined',
            label: 'Redford A1H Combined'
          }
        ]
      },
      {
        nodeId: 'east-texas',
        label: 'East Texas',
        children: [
          {
            nodeId: 'east-texas-district-1',
            label: 'East Texas District 1'
          }
        ]
      },
      {
        nodeId: 'new-mexico',
        label: 'New Mexico',
        children: [
          {
            nodeId: 'new-mexico-district-1',
            label: 'New Mexico District 1'
          }
        ]
      }
    ]
  },
  {
    nodeId: 'bakken',
    label: 'Bakken',
    children: [
      {
        nodeId: 'bakken-city-1',
        label: 'Bakken City 1'
      }
    ]
  },
  {
    nodeId: 'marcellus',
    label: 'Marcellus',
    children: [
      {
        nodeId: 'marcellus-city-1',
        label: 'Marcellus City 1'
      }
    ]
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
    '& > li > .MuiTreeItem-content': {
      backgroundColor: theme.palette.lightGrey,
      border: 'none',
      marginBottom: 1
    }
  }
}));

const renderTreeItems = treeItems => (
  treeItems.map(treeItem => (
    <JoynTreeItem key={treeItem.nodeId} nodeId={treeItem.nodeId} label={treeItem.label}>
      { treeItem.children && treeItem.children.length > 0 ? (
        renderTreeItems(treeItem.children)
      ) : null }
    </JoynTreeItem>
  ))
);

const Hierarchy = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['permian-basin']}
      defaultCollapseIcon={<MinusIcon color={theme.palette.primary.main} />}
      defaultExpandIcon={<PlusIcon color={theme.palette.primary.main} />}
      defaultEndIcon={null}>
      {renderTreeItems(GeographicalHierarchy)}
    </TreeView>
  );
}

export default Hierarchy;
