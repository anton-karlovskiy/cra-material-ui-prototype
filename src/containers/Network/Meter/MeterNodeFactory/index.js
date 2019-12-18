
import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

import MeterNodeWidget from 'containers/Network/Meter/MeterNodeWidget';
import MeterNodeModel from 'containers/Network/Meter/MeterNodeModel';

class MeterNodeFactory extends AbstractReactFactory<MeterNodeModel, DiagramEngine> {
	constructor(color, size) {
		super('meter');
		this.color = color;
		this.size = size;
	}

	generateReactWidget(event): JSX.Element {
		return (
			<MeterNodeWidget
				engine={this.engine}
				color={this.color}
				size={this.size} 
				node={event.model} />
		);
	}

	generateModel(event) {
		return new MeterNodeModel();
	}
}

export default MeterNodeFactory;
