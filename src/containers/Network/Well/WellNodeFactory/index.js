
import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

import WellNodeWidget from 'containers/Network/Well/WellNodeWidget';
import WellNodeModel from 'containers/Network/Well/WellNodeModel';
import { NODE_TYPE } from 'utils/constants/network';

class WellNodeFactory extends AbstractReactFactory {
	constructor() {
		super(NODE_TYPE.WELL);
	}

	generateReactWidget(event) {
		return (
			<WellNodeWidget
				engine={this.engine}
				node={event.model} />
		);
	}

	generateModel(event) {
		return new WellNodeModel();
	}
}

export default WellNodeFactory;
