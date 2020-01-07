
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NodeAnnotation from 'containers/Network/CommonElements/NodeAnnotation';
import CustomPortWidget from 'containers/Network/CommonElements/CustomPortWidget';

const useStyles = makeStyles(theme => ({
  root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
  },
  nodeWidget: props => ({
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    width: props.size.width,
    height: props.size.height
  }),
  portWidget: props => ({
    position: 'absolute',
    left: props.size.width / 2 - 8,
    top: props.size.height - 8
  })
}));

const NodeWidgetWrapper = ({ node, engine, size, name, color, children }) => {
  const classes = useStyles({size});

  return (
    <div className={classes.root}>
      <div className={classes.nodeWidget}>
        {children}
        <CustomPortWidget className={classes.portWidget} node={node} engine={engine} size={size} />
      </div>
      <NodeAnnotation color={color} nodeName={name} />
    </div>
  );
};

export default NodeWidgetWrapper;
