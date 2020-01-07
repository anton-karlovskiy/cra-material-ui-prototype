
import { NodeModel, PortModelAlignment } from '@projectstorm/react-diagrams';

import EquipmentPortModel from 'containers/Network/Equipment/EquipmentPortModel';
import { NODE_TYPE, COLOR_SET } from 'utils/constants/network';

class EquipmentNodeModel extends NodeModel {
	constructor(name, color, size) {
		super({
			type: NODE_TYPE.EQUIPMENT,
			name: name || 'Untitled',
			color: color || COLOR_SET.DEFAULT_COLOR,
			size: size || {width: 35, height: 35}
		});
		const portOptions = {
			alignment: PortModelAlignment.BOTTOM,
			linkColorFromPort: color
		};
		this.addPort(new EquipmentPortModel(portOptions));
	}
}

export default EquipmentNodeModel;
