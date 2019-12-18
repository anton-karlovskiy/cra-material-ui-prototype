
import React from 'react';
import createEngine, {
	DiagramModel,
	DefaultNodeModel,
	DefaultPortModel
} from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';

import AdvancedLinkFactory from 'containers/Network/AdvancedLinkFactory';
import AdvancedPortModel from 'containers/Network/AdvancedPortModel';

const CustomAnimatedLinkDemo = props => {
  //1) setup the diagram engine
	const engine = createEngine();
	engine.getLinkFactories().registerFactory(new AdvancedLinkFactory());

	// create some nodes
	const node1 = new DefaultNodeModel('Source', 'rgb(0,192,255)');
	let port1 = node1.addPort(new AdvancedPortModel(false, 'out-1', 'Out thick'));
	let port2 = node1.addPort(new DefaultPortModel(false, 'out-2', 'Out default'));
	node1.setPosition(100, 100);

	const node2 = new DefaultNodeModel('Target', 'rgb(192,255,0)');
	const port3 = node2.addPort(new AdvancedPortModel(true, 'in-1', 'In thick'));
	const port4 = node2.addPort(new DefaultPortModel(true, 'in-2', 'In default'));
	node2.setPosition(300, 100);

	const node3 = new DefaultNodeModel('Source', 'rgb(0,192,255)');
	node3.addPort(new AdvancedPortModel(false, 'out-1', 'Out thick'));
	node3.addPort(new DefaultPortModel(false, 'out-2', 'Out default'));
	node3.setPosition(100, 200);

	const node4 = new DefaultNodeModel('Target', 'rgb(192,255,0)');
	node4.addPort(new AdvancedPortModel(true, 'in-1', 'In thick'));
	node4.addPort(new DefaultPortModel(true, 'in-2', 'In default'));
	node4.setPosition(300, 200);

	const model = new DiagramModel();

	model.addAll(port1.link(port3), port2.link(port4));

	// add everything else
	model.addAll(node1, node2, node3, node4);

	// load model into engine
  engine.setModel(model);
  
  return (
    <CanvasWidget {...props} engine={engine} />
  );
};

export default CustomAnimatedLinkDemo;
