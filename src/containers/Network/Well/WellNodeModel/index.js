
import { NodeModel, NodeModelGenerics, PortModelAlignment } from '@projectstorm/react-diagrams';

import WellPortModel from 'containers/Network/Well/WellPortModel';

export interface WellNodeModelGenerics {
	PORT: WellPortModel;
}

class WellNodeModel extends NodeModel<NodeModelGenerics & WellNodeModelGenerics> {
	constructor(name: string, color: string, size) {
		super({
			type: 'well',
			name: name || 'Untitled',
			color: color || 'rgb(0,192,255)', // TODO: set default color
			size: size || {width: 30, height: 30}
		});
		this.addPort(new WellPortModel(PortModelAlignment.BOTTOM));
	}
}

export default WellNodeModel;
