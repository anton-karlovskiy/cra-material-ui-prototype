
import * as React from 'react';
import styled from '@emotion/styled';

import { CustomDefaultLabelModel } from '../CustomDefaultLabelModel';

export interface CustomDefaultLabelWidgetProps {
	model: CustomDefaultLabelModel;
}

namespace S {
	export const Label = styled.div`
		background: rgba(0, 0, 0, 0.8);
		border-radius: 5px;
		color: white;
		font-size: 12px;
		padding: 4px 8px;
		font-family: sans-serif;
		user-select: none;
	`;
}

export class CustomDefaultLabelWidget extends React.Component<CustomDefaultLabelWidgetProps> {
	render() {
		return <S.Label>{this.props.model.getOptions().label}</S.Label>;
	}
}
