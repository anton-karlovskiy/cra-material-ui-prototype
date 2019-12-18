
import { NodeModel, NodeModelGenerics, PortModelAlignment } from '@projectstorm/react-diagrams';

import TankPortModel from 'containers/Network/Tank/TankPortModel';

export interface TankNodeModelGenerics {
	PORT: TankPortModel;
}

class TankNodeModel extends NodeModel<NodeModelGenerics & TankNodeModelGenerics> {
	constructor(name: string, color: string, size) {
		super({
			type: 'tank',
			name: name || 'Untitled',
			color: color || 'rgb(0,192,255)', // TODO: set default color
			size: size || {width: 30, height: 30}
		});
		this.addPort(new TankPortModel(PortModelAlignment.BOTTOM));
	}
}

export default TankNodeModel;
