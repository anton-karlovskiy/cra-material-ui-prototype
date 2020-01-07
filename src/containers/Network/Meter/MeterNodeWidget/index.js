
import React from 'react';

import NodeWidgetWrapper from 'hoc/NodeWidgetWrapper';
import MeterIcon from 'components/Icons/SvgIcons/MeterIcon';

const MeterNodeWidget = ({ node, engine }) => {
	const { name, color, size } = node.getOptions();

	return (
		<NodeWidgetWrapper
			color={color}
			node={node}
			engine={engine}
			size={size}
			name={name}>
			<MeterIcon
				color={color}
				width={size.width}
				height={size.height} />
		</NodeWidgetWrapper>
	);
};

export default MeterNodeWidget;
