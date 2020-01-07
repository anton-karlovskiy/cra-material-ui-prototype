
import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

import TankNodeWidget from 'containers/Network/Tank/TankNodeWidget';
import TankNodeModel from 'containers/Network/Tank/TankNodeModel';
import { NODE_TYPE } from 'utils/constants/network';

class TankNodeFactory extends AbstractReactFactory {
	constructor() {
		super(NODE_TYPE.TANK);
	}

	generateReactWidget(event) {
		return (
			<TankNodeWidget
				engine={this.engine}
				node={event.model} />
		);
	}

	generateModel(event) {
		return new TankNodeModel();
	}
}

export default TankNodeFactory;
