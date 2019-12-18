
import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

import TankNodeWidget from 'containers/Network/Tank/TankNodeWidget';
import TankNodeModel from 'containers/Network/Tank/TankNodeModel';

class TankNodeFactory extends AbstractReactFactory<TankNodeModel, DiagramEngine> {
	constructor(color, size) {
		super('tank');
		this.color = color;
		this.size = size;
	}

	generateReactWidget(event): JSX.Element {
		return (
			<TankNodeWidget
				engine={this.engine}
				color={this.color}
				size={this.size} 
				node={event.model} />
		);
	}

	generateModel(event) {
		return new TankNodeModel();
	}
}

export default TankNodeFactory;
