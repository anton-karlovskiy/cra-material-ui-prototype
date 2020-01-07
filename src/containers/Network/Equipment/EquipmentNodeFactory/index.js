
import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

import EquipmentNodeWidget from 'containers/Network/Equipment/EquipmentNodeWidget';
import EquipmentNodeModel from 'containers/Network/Equipment/EquipmentNodeModel';
import { NODE_TYPE } from 'utils/constants/network';

class EquipmentNodeFactory extends AbstractReactFactory {
	constructor() {
		super(NODE_TYPE.EQUIPMENT);
	}

	generateReactWidget(event) {
		return (
			<EquipmentNodeWidget
				engine={this.engine}
				node={event.model} />
		);
	}

	generateModel(event) {
		return new EquipmentNodeModel();
	}
}

export default EquipmentNodeFactory;
