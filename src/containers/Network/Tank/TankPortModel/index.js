
import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

class TankPortModel extends PortModel {
	constructor(alignment: PortModelAlignment) {
		super({
			type: 'tank',
			name: alignment,
			alignment: alignment
		});
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel();
	}
}

export default TankPortModel;
