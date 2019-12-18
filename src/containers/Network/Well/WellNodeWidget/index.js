
import React, { Component } from 'react';
import { PortModelAlignment, PortWidget } from '@projectstorm/react-diagrams';

import Port from 'containers/Network/Port';
import WellIcon from 'components/Icons/SvgIcons/WellIcon';

class WellNodeWidget extends Component {
	render() {
		const { node, engine } = this.props;
		const { /*name, */color, size } = node.getOptions();

		return (
			<div
				style={{
					position: 'relative',
					width: size.width,
					height: size.height
				}}>
        <WellIcon
					color={color}
					width={size.width}
					height={size.height} />
				<PortWidget
					style={{
						left: size.width / 2 - 8,
						top: size.height - 8,
						position: 'absolute'
					}}
					port={node.getPort(PortModelAlignment.BOTTOM)}
					engine={engine}>
          <Port />
				</PortWidget>
			</div>
		);
	}
}

export default WellNodeWidget;
