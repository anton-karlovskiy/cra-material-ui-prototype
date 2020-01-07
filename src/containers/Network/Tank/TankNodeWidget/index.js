
import React from 'react';

import NodeWidgetWrapper from 'hoc/NodeWidgetWrapper';
import TankIcon from 'components/Icons/SvgIcons/TankIcon';

const TankNodeWidget = ({ node, engine }) => {
	const { name, color, size } = node.getOptions();

	return (
		<NodeWidgetWrapper
			color={color}
			node={node}
			engine={engine}
			size={size}
			name={name}>
			<TankIcon
				color={color}
				width={size.width}
				height={size.height} />
		</NodeWidgetWrapper>
	);
};

export default TankNodeWidget;
