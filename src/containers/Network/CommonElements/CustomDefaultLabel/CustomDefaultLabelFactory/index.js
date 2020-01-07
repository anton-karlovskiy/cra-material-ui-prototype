
import * as React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

import { CustomDefaultLabelModel } from '../CustomDefaultLabelModel';
import { CustomDefaultLabelWidget } from '../CustomDefaultLabelWidget';

/**
 * @author Dylan Vorster
 */
export class CustomDefaultLabelFactory extends AbstractReactFactory<CustomDefaultLabelModel, DiagramEngine> {
	constructor() {
		super('custom-default');
	}

	generateReactWidget(event): JSX.Element {
		return <CustomDefaultLabelWidget model={event.model} />;
	}

	generateModel(event): CustomDefaultLabelModel {
		return new CustomDefaultLabelModel();
	}
}
