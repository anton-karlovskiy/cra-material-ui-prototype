
import React from 'react';
import createEngine, {
  DefaultNodeModel,
  DiagramModel,
  PortModelAlignment
} from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { useTheme } from '@material-ui/core/styles';

// import the custom models
// equipment
import EquipmentNodeModel from 'containers/Network/Equipment/EquipmentNodeModel';
import EquipmentNodeFactory from 'containers/Network/Equipment/EquipmentNodeFactory';
import EquipmentPortModel from 'containers/Network/Equipment/EquipmentPortModel';
// tank
import TankNodeModel from 'containers/Network/Tank/TankNodeModel';
import TankNodeFactory from 'containers/Network/Tank/TankNodeFactory';
// well
import WellNodeModel from 'containers/Network/Well/WellNodeModel';
import WellNodeFactory from 'containers/Network/Well/WellNodeFactory';
// meter
import MeterNodeModel from 'containers/Network/Meter/MeterNodeModel';
import MeterNodeFactory from 'containers/Network/Meter/MeterNodeFactory';
import SimplePortFactory from 'containers/Network/SimplePortFactory';
import AdvancedLinkFactory from 'containers/Network/AdvancedLinkFactory';
import AdvancedPortModel from 'containers/Network/AdvancedPortModel';

const CustomNodeDemo = props => {
	const theme = useTheme();

  //1) setup the diagram engine
	const engine = createEngine();

	// register some other factories as well
	engine
		.getPortFactories()
		.registerFactory(new SimplePortFactory('equipment', config => new EquipmentPortModel(PortModelAlignment.BOTTOM)));
	engine.getLinkFactories().registerFactory(new AdvancedLinkFactory());
	engine.getNodeFactories().registerFactory(new EquipmentNodeFactory());
	engine.getNodeFactories().registerFactory(new TankNodeFactory());
	engine.getNodeFactories().registerFactory(new WellNodeFactory());
	engine.getNodeFactories().registerFactory(new MeterNodeFactory());

	//2) setup the diagram model
	const model = new DiagramModel();

	//3-A) create a default node
	const node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
	const port1 = node1.addPort(new AdvancedPortModel(false, 'out', 'Out'));
	node1.setPosition(100, 200);

	//3-B) create our new custom node
	const equipment = new EquipmentNodeModel('equipment', theme.custom.palette.grey, {width: 30, height: 30});
	equipment.setPosition(250, 108);

	const node3 = new DefaultNodeModel('Node 3', 'red');
	const port3 = node3.addPort(new AdvancedPortModel(false, 'in', 'In'));
	node3.setPosition(500, 100);

	//3-C) link the 2 nodes together
	const link1 = port1.link(equipment.getPort(PortModelAlignment.BOTTOM));
	const link2 = port3.link(equipment.getPort(PortModelAlignment.BOTTOM));

	const node4 = new DefaultNodeModel('Node 4', 'rgb(0,192,255)');
	const port4 = node4.addPort(new AdvancedPortModel(false, 'out', 'Out'));
	node4.setPosition(200, 10);

	const link3 = port4.link(equipment.getPort(PortModelAlignment.BOTTOM));

	const node5 = new DefaultNodeModel('Node 5', 'mediumpurple');
	const port5 = node5.addPort(new AdvancedPortModel(false, 'in', 'In'));
	node5.setPosition(400, 300);

	const link4 = port5.link(equipment.getPort(PortModelAlignment.BOTTOM));

	const waterTank = new TankNodeModel('water-tank', theme.custom.palette.blue, {width: 34, height: 34});
	waterTank.setPosition(10, 500);
	const oilTank = new TankNodeModel('oil-tank', theme.custom.palette.green, {width: 34, height: 34});
	oilTank.setPosition(110, 500);
	const well = new WellNodeModel('well', theme.custom.palette.green, {width: 32, height: 32});
	well.setPosition(210, 500);
	const oilMeter = new MeterNodeModel('oil-meter', theme.custom.palette.green, {width: 30, height: 30});
	oilMeter.setPosition(310, 500);
	const gasMeter = new MeterNodeModel('gas-meter', theme.custom.palette.red, {width: 30, height: 30});
	gasMeter.setPosition(410, 500);

	//4) add the models to the root graph
	model.addAll(
		equipment,
		waterTank,
		oilTank,
		well,
		oilMeter,
		gasMeter,
		link1,
		link2,
		link3,
		link4,
		node1,
		node3,
		node4,
		node5
	);

	//5) load model into engine
	engine.setModel(model);

	//6) render the diagram!
	return (
    <CanvasWidget {...props} engine={engine} />
	);
};

export default CustomNodeDemo;
