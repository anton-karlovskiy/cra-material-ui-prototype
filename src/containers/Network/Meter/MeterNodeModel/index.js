
import { NodeModel, NodeModelGenerics, PortModelAlignment } from '@projectstorm/react-diagrams';

import MeterPortModel from 'containers/Network/Meter/MeterPortModel';

export interface MeterNodeModelGenerics {
	PORT: MeterPortModel;
}

class MeterNodeModel extends NodeModel<NodeModelGenerics & MeterNodeModelGenerics> {
	constructor(name: string, color: string, size) {
		super({
			type: 'meter',
			name: name || 'Untitled',
			color: color || 'rgb(0,192,255)', // TODO: set default color
			size: size || {width: 30, height: 30}
		});
		this.addPort(new MeterPortModel(PortModelAlignment.BOTTOM));
	}
}

export default MeterNodeModel;
