
import React from 'react';

import NodeWidgetWrapper from 'hoc/NodeWidgetWrapper';
import WellIcon from 'components/Icons/SvgIcons/WellIcon';

const WellNodeWidget = ({ node, engine }) => {
	const { name, color, size } = node.getOptions();

	return (
		<NodeWidgetWrapper
			color={color}
			node={node}
			engine={engine}
			size={size}
			name={name}>
			<WellIcon
				color={color}
				width={size.width}
				height={size.height} />
		</NodeWidgetWrapper>
	);
};

export default WellNodeWidget;
