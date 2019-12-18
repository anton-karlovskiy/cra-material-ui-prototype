
import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

class MeterPortModel extends PortModel {
	constructor(alignment: PortModelAlignment) {
		super({
			type: 'meter',
			name: alignment,
			alignment: alignment
		});
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel();
	}
}

export default MeterPortModel;
