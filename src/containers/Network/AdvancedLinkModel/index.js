
import { DefaultLinkModel } from '@projectstorm/react-diagrams';

class AdvancedLinkModel extends DefaultLinkModel {
	constructor() {
		super({
			type: 'advanced',
			width: 5
		});
	}
}

export default AdvancedLinkModel;
