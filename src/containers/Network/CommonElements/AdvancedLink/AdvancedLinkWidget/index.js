
import React from 'react';
import { LinkWidget } from '@projectstorm/react-diagrams-core';
// ray test touch <
// import { DefaultLinkWidget } from '@projectstorm/react-diagrams';
import CustomDefaultLinkWidget from 'containers/Network/CommonElements/CustomDefaultLink/CustomDefaultLinkWidget';
// ray test touch >

const CustomLinkArrowWidget = ({ point, previousPoint, color }) => {
	const angle =
		90 +
		(Math.atan2(
			point.getPosition().y - previousPoint.getPosition().y,
			point.getPosition().x - previousPoint.getPosition().x
		) *
			180) /
			Math.PI;

	const deltaX = Math.abs(point.getPosition().x - previousPoint.getPosition().x);
	const deltaY = Math.abs(point.getPosition().y - previousPoint.getPosition().y);
	const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

	return (
		<g transform={`translate(${point.getPosition().x}, ${point.getPosition().y})`}>
			<g style={{transform: `rotate(${angle}deg)` }}>
        <g transform={`translate(0, ${distance / 2 - 20})`}>
					<polygon
						points='0,10 4,30 -4,30'
						fill={color}
						onMouseLeave={() => {
							this.setState({selected: false});
						}}
						onMouseEnter={() => {
							this.setState({selected: true});
						}}
						data-id={point.getID()}
						data-linkid={point.getLink().getID()}>
          </polygon>
				</g>
			</g>
		</g>
	);
};

// ray test touch <
// class AdvancedLinkWidget extends DefaultLinkWidget {
class AdvancedLinkWidget extends CustomDefaultLinkWidget {
// ray test touch > CustomDefaultLinkWidget
	generateArrow(point, previousPoint) {
		return (
			<CustomLinkArrowWidget
				key={point.getID()}
				point={point}
				previousPoint={previousPoint}
				colorSelected={this.props.link.getOptions().selectedColor}
				color={this.props.link.getOptions().color} />
		);
	}

	render() {
		// ensure id is present for all points on the path
		const points = this.props.link.getPoints();
		let paths = [];
		this.refPaths = [];

		// draw the multiple anchors and complex line instead
		for (let j = 0; j < points.length - 1; j++) {
			paths.push(
				this.generateLink(
					LinkWidget.generateLinePath(points[j], points[j + 1]), {
						'data-linkid': this.props.link.getID(),
						'data-point': j,
						onMouseDown: event => {
							// MEMO: block middle pointing
							// ray test touch <
							console.log('[AdvancedLinkWidget render generateLink generateLinePath onMouseDown] event => ', event);
							// this.addPointToLink(event, j + 1);
							// ray test touch >
						}
					},
					j
				)
			);
		}

		// render the circles
		for (let i = 1; i < points.length - 1; i++) {
			paths.push(this.generatePoint(points[i]));
		}

		if (this.props.link.getTargetPort() !== null) {
			paths.push(this.generateArrow(points[points.length - 1], points[points.length - 2]));
		} else {
			paths.push(this.generatePoint(points[points.length - 1]));
		}

		return <g data-default-link-test={this.props.link.getOptions().testName}>{paths}</g>;
	}
}

export default AdvancedLinkWidget;
