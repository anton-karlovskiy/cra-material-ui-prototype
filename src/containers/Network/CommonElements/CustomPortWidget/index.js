
import React from 'react';
import { PortModelAlignment, PortWidget } from '@projectstorm/react-diagrams';

import Port from './Port';

const CustomPortWidget = ({ className, node, engine, size }) => (
  <PortWidget
    className={className}
    port={node.getPort(PortModelAlignment.BOTTOM)}
    engine={engine}>
    <Port size={size} />
  </PortWidget>
);

export default CustomPortWidget;
