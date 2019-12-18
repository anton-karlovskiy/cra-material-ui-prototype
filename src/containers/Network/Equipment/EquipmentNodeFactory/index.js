
import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

import EquipmentNodeWidget from 'containers/Network/Equipment/EquipmentNodeWidget';
import EquipmentNodeModel from 'containers/Network/Equipment/EquipmentNodeModel';

class EquipmentNodeFactory extends AbstractReactFactory<EquipmentNodeModel, DiagramEngine> {
	constructor(color, size) {
		super('equipment');
		this.color = color;
		this.size = size;
	}

	generateReactWidget(event): JSX.Element {
		return (
			<EquipmentNodeWidget
				engine={this.engine}
				color={this.color}
				size={this.size}
				node={event.model} />
		);
	}

	generateModel(event) {
		return new EquipmentNodeModel();
	}
}

export default EquipmentNodeFactory;
