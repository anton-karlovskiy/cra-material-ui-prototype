
import { DefaultPortModel } from '@projectstorm/react-diagrams';

import AdvancedLinkModel from '../AdvancedLinkModel';

class AdvancedPortModel extends DefaultPortModel {
	createLinkModel() {
		return new AdvancedLinkModel();
	}
}

export default AdvancedPortModel;
