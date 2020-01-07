
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import EquipmentIcon from 'components/Icons/SvgIcons/EquipmentIcon';
import MeterIcon from 'components/Icons/SvgIcons/MeterIcon';
import TankIcon from 'components/Icons/SvgIcons/TankIcon';
import WellIcon from 'components/Icons/SvgIcons/WellIcon';
import { NODE_TYPE } from 'utils/constants/network';

const useStyles = makeStyles(theme => ({
  root: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		borderBottom: `1px solid #f2f8f9`,
		padding: theme.spacing(0, .5),
		margin: theme.spacing(1, 0),
		minHeight: theme.spacing(4.5)
	},
	icon: {
		marginRight: theme.spacing(14/8)
	}
}));

const TrayItemWidget = ({ model, name }) => {
	const classes = useStyles();
	
	const size = {
		width: 16,
		height: 16
	};

	const { nodeType, color } = model;

	let icon;
	switch (nodeType) {
		case NODE_TYPE.EQUIPMENT:
			icon = <EquipmentIcon color={color} width={size.width} height={size.height} />;
			break;
		case NODE_TYPE.METER:
			icon = <MeterIcon color={color} width={size.width} height={size.height} />;
			break;
		case NODE_TYPE.TANK:
			icon = <TankIcon color={color} width={size.width} height={size.height} />;
			break;
		case NODE_TYPE.WELL:
			icon = <WellIcon color={color} width={size.width} height={size.height} />;
			break;
		default:
			icon = <EquipmentIcon color={color} width={size.width} height={size.height} />;
	}

	return (
		<div
			className={classes.root}
			draggable={true}
			onDragStart={event => {
				event.dataTransfer.setData('storm-diagram-node', JSON.stringify(model));
			}}>
			<div className={classes.icon}>{icon}</div>
			<Typography color='secondary'>
			{name}
			</Typography>
		</div>
	);
}

export default TrayItemWidget;
