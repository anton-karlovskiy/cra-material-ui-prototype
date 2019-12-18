
import { NodeModel, NodeModelGenerics, PortModelAlignment } from '@projectstorm/react-diagrams';

import EquipmentPortModel from 'containers/Network/Equipment/EquipmentPortModel';

export interface EquipmentNodeModelGenerics {
	PORT: EquipmentPortModel;
}

class EquipmentNodeModel extends NodeModel<NodeModelGenerics & EquipmentNodeModelGenerics> {
	constructor(name: string, color: string, size) {
		super({
			type: 'equipment',
			name: name || 'Untitled',
			color: color || 'rgb(0,192,255)', // TODO: set default color
			size: size || {width: 30, height: 30}
		});
		this.addPort(new EquipmentPortModel(PortModelAlignment.BOTTOM));
	}
}

export default EquipmentNodeModel;
