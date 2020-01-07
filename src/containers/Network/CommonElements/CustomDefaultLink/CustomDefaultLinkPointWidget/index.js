
import React, { Component } from 'react';
import styled from '@emotion/styled';

const PointTop = styled.circle`
  pointer-events: all;
`;

class CustomDefaultLinkPointWidget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false
		};
	}

	render() {
		const { point } = this.props;
		return (
			<g>
				<circle
					cx={point.getPosition().x}
					cy={point.getPosition().y}
					r={5}
					fill={this.state.selected || this.props.point.isSelected() ? this.props.colorSelected : this.props.color} />
        <PointTop
					className="point"
					onMouseLeave={() => {
						this.setState({ selected: false });
					}}
					onMouseEnter={() => {
						this.setState({ selected: true });
					}}
					data-id={point.getID()}
					data-linkid={point.getLink().getID()}
					cx={point.getPosition().x}
					cy={point.getPosition().y}
					r={15}
					opacity={0.0} />
			</g>
		);
	}
}

export default CustomDefaultLinkPointWidget;
