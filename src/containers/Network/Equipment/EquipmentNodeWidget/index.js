
import React from 'react';

import NodeWidgetWrapper from 'hoc/NodeWidgetWrapper';
import EquipmentIcon from 'components/Icons/SvgIcons/EquipmentIcon';

const EquipmentNodeWidget = ({ node, engine }) => {
	const { name, color, size } = node.getOptions();

	return (
		<NodeWidgetWrapper
			color={color}
			node={node}
			engine={engine}
			size={size}
			name={name}>
			<EquipmentIcon
				color={color}
				width={size.width}
				height={size.height} />
		</NodeWidgetWrapper>
	);
};

export default EquipmentNodeWidget;
