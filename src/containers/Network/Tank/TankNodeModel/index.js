
import { NodeModel, PortModelAlignment } from '@projectstorm/react-diagrams';

import TankPortModel from 'containers/Network/Tank/TankPortModel';
import { NODE_TYPE, COLOR_SET } from 'utils/constants/network';

class TankNodeModel extends NodeModel {
	constructor(name, color, size) {
		super({
			type: NODE_TYPE.TANK,
			name: name || 'Untitled',
			color: color || COLOR_SET.DEFAULT_COLOR,
			size: size || {width: 35, height: 35}
		});
		const portOptions = {
			alignment: PortModelAlignment.BOTTOM,
			linkColorFromPort: color
		};
		this.addPort(new TankPortModel(portOptions));
	}
}

export default TankNodeModel;
