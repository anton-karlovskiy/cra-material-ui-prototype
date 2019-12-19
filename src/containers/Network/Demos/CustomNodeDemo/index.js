
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
		.registerFactory(new SimplePortFactory('equipment', config => new EquipmentPortModel(PortModelAlignment.TOP)));
	engine.getLinkFactories().registerFactory(new AdvancedLinkFactory());
	engine.getNodeFactories().registerFactory(new EquipmentNodeFactory());
	engine.getNodeFactories().registerFactory(new TankNodeFactory());
	engine.getNodeFactories().registerFactory(new WellNodeFactory());
	engine.getNodeFactories().registerFactory(new MeterNodeFactory());

	//2) setup the diagram model
	const model = new DiagramModel();

	//3) Instantiate nodes

	// Group 1
	const gasMeter1 = new MeterNodeModel('gas-meter-1', theme.custom.palette.red, {width: 35, height: 35});
	gasMeter1.setPosition(150, 200);
	const well1 = new WellNodeModel('well-1', theme.custom.palette.green, {width: 35, height: 35});
	well1.setPosition(150, 300);
	const gasMeter2 = new MeterNodeModel('gas-meter-2', theme.custom.palette.red, {width: 35, height: 35});
	gasMeter2.setPosition(150, 400);

	const groupOneNodes = [
		gasMeter1, 
		well1, 
		gasMeter2
	]

	// Group 2
	const equipment1 = new EquipmentNodeModel('equipment-1', theme.custom.palette.grey, {width: 35, height: 35});
	equipment1.setPosition(590, 200);
	const oilTank1 = new TankNodeModel('oil-tank-1', theme.custom.palette.green, {width: 35, height: 35});
	oilTank1.setPosition(380, 350);
	const oilTank2 = new TankNodeModel('oil-tank-2', theme.custom.palette.green, {width: 35, height: 35});
	oilTank2.setPosition(480, 400);
	const oilTank3 = new TankNodeModel('oil-tank-3', theme.custom.palette.green, {width: 35, height: 35});
	oilTank3.setPosition(580, 450);
	const waterTank1 = new TankNodeModel('water-tank-1', theme.custom.palette.blue, {width: 35, height: 35});
	waterTank1.setPosition(680, 370);
	const waterTank2 = new TankNodeModel('water-tank-2', theme.custom.palette.blue, {width: 35, height: 35});
	waterTank2.setPosition(780, 390);
	const gasMeter3 = new MeterNodeModel('gas-meter-3', theme.custom.palette.red, {width: 35, height: 35});
	gasMeter3.setPosition(940, 100);
	const gasMeter4 = new MeterNodeModel('gas-meter-4', theme.custom.palette.red, {width: 35, height: 35});
	gasMeter4.setPosition(980, 220);
	const gasMeter5 = new MeterNodeModel('gas-meter-5', theme.custom.palette.red, {width: 35, height: 35});
	gasMeter5.setPosition(960, 330);
	const oilMeter1 = new MeterNodeModel('oil-meter', theme.custom.palette.green, {width: 35, height: 35});
	oilMeter1.setPosition(960, 410);

	const groupTwoNodes = [
		equipment1, 
		oilTank1, 
		oilTank2, 
		oilTank3, 
		waterTank1, 
		waterTank2, 
		gasMeter3, 
		gasMeter4, 
		gasMeter5, 
		oilMeter1
	];
	
	// Group 3
	const equipment2 = new EquipmentNodeModel('equipment-2', theme.custom.palette.grey, {width: 35, height: 35});
	equipment2.setPosition(590, 550);
	const gasMeter6 = new MeterNodeModel('gas-meter-6', theme.custom.palette.red, {width: 35, height: 35});
	gasMeter6.setPosition(590, 680);
	const gasMeter7 = new MeterNodeModel('gas-meter-7', theme.custom.palette.red, {width: 35, height: 35});
	gasMeter7.setPosition(750, 500);
	const gasMeter8 = new MeterNodeModel('gas-meter-8', theme.custom.palette.red, {width: 35, height: 35});
	gasMeter8.setPosition(720, 580);
	const well2 = new WellNodeModel('well-2', theme.custom.palette.green, {width: 35, height: 35});
	well2.setPosition(720, 685);

	const groupThreeNodes = [
		equipment2,
		gasMeter6,
		gasMeter7,
		gasMeter8,
		well2
	];

	// Group 4
	const equipment3 = new EquipmentNodeModel('equipment-3', theme.custom.palette.grey, {width: 35, height: 35});
	equipment3.setPosition(1100, 480);
	const oilTank4 = new TankNodeModel('oil-tank-4', theme.custom.palette.green, {width: 35, height: 35});
	oilTank4.setPosition(900, 690);
	const oilTank5 = new TankNodeModel('oil-tank-5', theme.custom.palette.green, {width: 35, height: 35});
	oilTank5.setPosition(1000, 710);
	const oilTank6 = new TankNodeModel('oil-tank-6', theme.custom.palette.green, {width: 35, height: 35});
	oilTank6.setPosition(1100, 730);
	const waterTank3 = new TankNodeModel('water-tank-3', theme.custom.palette.blue, {width: 35, height: 35});
	waterTank3.setPosition(1200, 700);
	const waterTank4 = new TankNodeModel('water-tank-4', theme.custom.palette.blue, {width: 35, height: 35});
	waterTank4.setPosition(1300, 680);
	const gasMeter9 = new MeterNodeModel('gas-meter-9', theme.custom.palette.red, {width: 35, height: 35});
	gasMeter9.setPosition(1300, 380);
	const gasMeter10 = new MeterNodeModel('gas-meter-10', theme.custom.palette.red, {width: 35, height: 35});
	gasMeter10.setPosition(1300, 470);
	const oilMeter2 = new MeterNodeModel('oil-meter-2', theme.custom.palette.green, {width: 35, height: 35});
	oilMeter2.setPosition(1310, 560);

	const groupFourNodes = [
		equipment3,
		oilTank4,
		oilTank5,
		oilTank6,
		waterTank3,
		waterTank4,
		gasMeter9,
		gasMeter10,
		oilMeter2
	];

	// const link4 = port5.link(equipment.getPort(PortModelAlignment.BOTTOM));

	//4) add the models to the root graph
	model.addAll(
		...groupOneNodes,
		...groupTwoNodes,
		...groupThreeNodes,
		...groupFourNodes
	);

	//5) load model into engine
	engine.setModel(model);

	//6) render the diagram!
	return (
    <CanvasWidget {...props} engine={engine} />
	);
};

export default CustomNodeDemo;
