
import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

class EquipmentPortModel extends PortModel {
	constructor(alignment: PortModelAlignment) {
		super({
			type: 'equipment',
			name: alignment,
			alignment: alignment
		});
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel();
	}
}

export default EquipmentPortModel;
