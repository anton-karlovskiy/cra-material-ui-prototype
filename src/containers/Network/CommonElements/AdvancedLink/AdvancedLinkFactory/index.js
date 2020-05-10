
import React from 'react';
import { DefaultLinkFactory } from '@projectstorm/react-diagrams';

import AdvancedLinkModel from '../AdvancedLinkModel';
import AdvancedLinkWidget from '../AdvancedLinkWidget';
import { LINK_TYPE } from 'utils/constants/network';

class AdvancedLinkFactory extends DefaultLinkFactory {
	constructor() {
		super(LINK_TYPE.ADVANCED);
	}

	generateReactWidget(event) {
		return <AdvancedLinkWidget link={event.model} diagramEngine={this.engine} />;
	}

	generateModel() {
		return new AdvancedLinkModel();
	}
}

export default AdvancedLinkFactory;
