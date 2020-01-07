
import { DefaultLinkModel } from '@projectstorm/react-diagrams';
import { LINK_TYPE } from 'utils/constants/network';

class AdvancedLinkModel extends DefaultLinkModel {
	constructor(options = {}) {
		super({
			type: LINK_TYPE.ADVANCED,
			width: options.width || 3,
			color: options.color || 'gray',
			selectedColor: options.selectedColor || 'rgb(0,192,255)',
			curvyness: 50,
			...options
		});
	}
}

export default AdvancedLinkModel;
