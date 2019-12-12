
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';

import TransitionComponent from 'components/Hierarchy/TransitionComponent';

const JoynTreeItem = withStyles(theme => ({
  root: {
    '&:focus > .MuiTreeItem-content': {
      backgroundColor: theme.palette.primary.main
    }
  },
  group: {
    marginLeft: 12,
    paddingLeft: 12
  },
  content: {
    minHeight: 46,
    borderBottom: '1px solid #d0ebed',
    paddingLeft: 4
  },
  label: {
    paddingLeft: 4,
    ...theme.typography.h5,
    fontWeight: theme.typography.fontWeightBold
  }
}))(props => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

export default JoynTreeItem;
