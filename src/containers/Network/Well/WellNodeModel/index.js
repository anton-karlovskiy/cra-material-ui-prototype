
import { NodeModel, PortModelAlignment } from '@projectstorm/react-diagrams';

import WellPortModel from 'containers/Network/Well/WellPortModel';
import { NODE_TYPE, COLOR_SET } from 'utils/constants/network';

class WellNodeModel extends NodeModel {
	constructor(name, color, size) {
		super({
			type: NODE_TYPE.WELL,
			name: name || 'Untitled',
			color: color || COLOR_SET.DEFAULT_COLOR,
			size: size || {width: 35, height: 35}
		});
		const portOptions = {
			alignment: PortModelAlignment.BOTTOM,
			linkColorFromPort: color
		};
		this.addPort(new WellPortModel(portOptions));
	}
}

export default WellNodeModel;
