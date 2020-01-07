
import { NodeModel, PortModelAlignment } from '@projectstorm/react-diagrams';

import MeterPortModel from 'containers/Network/Meter/MeterPortModel';
import { NODE_TYPE, COLOR_SET } from 'utils/constants/network';

class MeterNodeModel extends NodeModel {
	constructor(name, color, size) {
		super({
			type: NODE_TYPE.METER,
			name: name || 'Untitled',
			color: color || COLOR_SET.DEFAULT_COLOR,
			size: size || {width: 35, height: 35}
		});
		const portOptions = {
			alignment: PortModelAlignment.BOTTOM,
			linkColorFromPort: color
		};
		this.addPort(new MeterPortModel(portOptions));
	}
}

export default MeterNodeModel;
