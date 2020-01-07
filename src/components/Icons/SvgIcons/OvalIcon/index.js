
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const OvalIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 24} height={height || 24} viewBox={viewBox || '0 0 24 24'} color={color} {...rest}>
    <g fill='#FFF' fillRule='evenodd' stroke={color} strokeWidth='2' transform='translate(1 1)'>
      <circle cx='11' cy='11' r='11' />
      <circle cx='11' cy='11' r='1' transform='matrix(1 0 0 -1 0 22)' />
    </g>
  </SvgIconWrapper>
);

export default OvalIcon;
