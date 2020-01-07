
import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

import MeterNodeWidget from 'containers/Network/Meter/MeterNodeWidget';
import MeterNodeModel from 'containers/Network/Meter/MeterNodeModel';
import { NODE_TYPE } from 'utils/constants/network';

class MeterNodeFactory extends AbstractReactFactory {
	constructor() {
		super(NODE_TYPE.METER);
	}

	generateReactWidget(event) {
		return (
			<MeterNodeWidget
				engine={this.engine}
				node={event.model} />
		);
	}

	generateModel(event) {
		return new MeterNodeModel();
	}
}

export default MeterNodeFactory;
