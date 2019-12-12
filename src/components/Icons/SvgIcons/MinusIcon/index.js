
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const MinusIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 13} height={height || 13} viewBox={viewBox || '0 0 13 13'} color={color} {...rest}>
    <g fill={color} fillRule='evenodd'>
      <path d='M13 6v1H0V6z' />
    </g>
  </SvgIconWrapper>
);

export default MinusIcon;
