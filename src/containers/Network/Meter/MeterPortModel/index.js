
import { PortModel } from '@projectstorm/react-diagrams';

import AdvancedLinkModel from 'containers/Network/CommonElements/AdvancedLink/AdvancedLinkModel';
import { NODE_TYPE, COLOR_SET } from 'utils/constants/network';

class MeterPortModel extends PortModel {
	constructor(options = {}) {
		super({
			type: NODE_TYPE.METER,
			name: options.alignment,
			alignment: options.alignment
		});
		this.linkColorFromPort = options.linkColorFromPort;
	}

	createLinkModel() {
		const options = {
			width: 2,
			color: this.linkColorFromPort,
			curvyness: 0,
			selectedColor: COLOR_SET.DEFAULT_COLOR
		};
		return new AdvancedLinkModel(options);
	}
}

export default MeterPortModel;
