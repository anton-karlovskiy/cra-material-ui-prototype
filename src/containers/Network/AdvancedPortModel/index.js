
import { DefaultPortModel } from '@projectstorm/react-diagrams';

import AdvancedLinkModel from 'containers/Network/AdvancedLinkModel';

class AdvancedPortModel extends DefaultPortModel {
	createLinkModel(): AdvancedLinkModel | null {
		return new AdvancedLinkModel();
	}
}

export default AdvancedPortModel;
