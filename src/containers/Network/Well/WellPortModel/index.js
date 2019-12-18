
import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

class WellPortModel extends PortModel {
	constructor(alignment: PortModelAlignment) {
		super({
			type: 'well',
			name: alignment,
			alignment: alignment
		});
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel();
	}
}

export default WellPortModel;
