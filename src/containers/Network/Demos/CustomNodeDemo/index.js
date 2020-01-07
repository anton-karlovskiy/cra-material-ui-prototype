
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CanvasWidget } from '@projectstorm/react-canvas-core';

import CanvasLayer from 'containers/Network/CanvasLayer';
import EquipmentNodeModel from 'containers/Network/Equipment/EquipmentNodeModel';
import MeterNodeModel from 'containers/Network/Meter/MeterNodeModel';
import TankNodeModel from 'containers/Network/Tank/TankNodeModel';
import WellNodeModel from 'containers/Network/Well/WellNodeModel';
import { NODE_TYPE } from 'utils/constants/network';
import { useForceUpdate } from 'utils/hooks';

const useStyles = makeStyles(theme => ({
  canvasWidget: {
    width: '100%',
    height: '100%',
    minHeight: '100%'
  }
}));

const CustomNodeDemo = ({ engine }) => {
  const classes = useStyles();
  const theme = useTheme();
  const forceUpdate = useForceUpdate();

	// 6) render the diagram!
	return (
    <CanvasLayer
      onDrop={event => {
        const { nodeType } = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));

        let node;
        switch (nodeType) {
          case NODE_TYPE.EQUIPMENT:
            node = new EquipmentNodeModel('equipment-dnd', theme.custom.palette.grey);
            break;
          case NODE_TYPE.METER:
            node = new MeterNodeModel('meter-dnd', theme.custom.palette.red);
            break;
          case NODE_TYPE.TANK:
            node = new TankNodeModel('tank-dnd', theme.custom.palette.blue);
            break;
          case NODE_TYPE.WELL:
            node = new WellNodeModel('well-dnd', theme.custom.palette.green);
            break;
          default:
            node = new EquipmentNodeModel('equipment-dnd', theme.custom.palette.grey);
        }
        const point = engine.getRelativeMousePoint(event);
        node.setPosition(point);
        engine
          .getModel()
          .addNode(node);
        forceUpdate();
      }}
      onDragOver={event => {
        event.preventDefault();
      }}>
      <CanvasWidget className={classes.canvasWidget} engine={engine} />
    </CanvasLayer>
  );
};

export default CustomNodeDemo;
