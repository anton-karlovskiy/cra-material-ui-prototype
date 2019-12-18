
import React from 'react';
import { DefaultLinkFactory } from '@projectstorm/react-diagrams';

import AdvancedLinkModel from 'containers/Network/AdvancedLinkModel';
import AdvancedLinkSegment from 'containers/Network/AdvancedLinkSegment';

class AdvancedLinkFactory extends DefaultLinkFactory {
	constructor() {
		super('advanced');
	}

	generateModel(): AdvancedLinkModel {
		return new AdvancedLinkModel();
	}

	generateLinkSegment(model: AdvancedLinkModel, selected: boolean, path: string) {
		return (
			<g>
				<AdvancedLinkSegment model={model} path={path} />
			</g>
		);
	}
}

export default AdvancedLinkFactory;
