
import React from 'react';
import { DefaultLinkFactory } from '@projectstorm/react-diagrams';

import AdvancedLinkModel from '../AdvancedLinkModel';
// TODO: just use default segment for now
// import AdvancedLinkSegmentWidget from '../AdvancedLinkSegmentWidget';
import AdvancedLinkWidget from '../AdvancedLinkWidget';
import { LINK_TYPE } from 'utils/constants/network';

class AdvancedLinkFactory extends DefaultLinkFactory {
	constructor() {
		super(LINK_TYPE.ADVANCED);
	}

	generateReactWidget(event) {
		return <AdvancedLinkWidget link={event.model} diagramEngine={this.engine} />;
	}

	generateModel() {
		return new AdvancedLinkModel();
	}

	// TODO: just use default segment for now
	// generateLinkSegment(model, selected, path) {
	// 	return (
	// 		<g>
	// 			<AdvancedLinkSegmentWidget model={model} path={path} />
	// 		</g>
	// 	);
	// }
}

export default AdvancedLinkFactory;
