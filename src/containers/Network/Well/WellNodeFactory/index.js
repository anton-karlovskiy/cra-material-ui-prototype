
import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

import WellNodeWidget from 'containers/Network/Well/WellNodeWidget';
import WellNodeModel from 'containers/Network/Well/WellNodeModel';

class WellNodeFactory extends AbstractReactFactory<WellNodeModel, DiagramEngine> {
	constructor(color, size) {
		super('well');
		this.color = color;
		this.size = size;
	}

	generateReactWidget(event): JSX.Element {
		return (
			<WellNodeWidget
				engine={this.engine}
				color={this.color}
				size={this.size} 
				node={event.model} />
		);
	}

	generateModel(event) {
		return new WellNodeModel();
	}
}

export default WellNodeFactory;
