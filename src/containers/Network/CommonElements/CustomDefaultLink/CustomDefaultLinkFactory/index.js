
import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

import CustomDefaultLinkModel from '../CustomDefaultLinkModel';
import CustomDefaultLinkWidget from '../CustomDefaultLinkWidget';

const Keyframes = keyframes`
  from {
    stroke-dashoffset: 24;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const selected = css`
  stroke-dasharray: 10, 2;
  animation: ${Keyframes} 1s linear infinite;
`;

const Path = styled.path`
  ${p => p.selected && selected};
  fill: none;
  pointer-events: all;
`;

class CustomDefaultLinkFactory extends AbstractReactFactory {
	constructor(type = 'custom-default') {
		super(type);
	}

	generateReactWidget(event) {
		return <CustomDefaultLinkWidget link={event.model} diagramEngine={this.engine} />;
	}

	generateModel(event) {
		return new CustomDefaultLinkModel();
	}

	generateLinkSegment(model, selected, path) {
		return (
      <Path
				selected={selected}
				stroke={selected ? model.getOptions().selectedColor : model.getOptions().color}
				strokeWidth={model.getOptions().width}
				d={path} />
		);
	}
}

export default CustomDefaultLinkFactory;
