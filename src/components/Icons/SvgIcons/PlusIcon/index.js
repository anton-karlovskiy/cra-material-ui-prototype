
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const PlusIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 13} height={height || 13} viewBox={viewBox || '0 0 13 13'} color={color} {...rest}>
    <g fill={color} fillRule='evenodd'>
      <path d='M6 0h1v13H6z' />
      <path d='M13 6v1H0V6z' />
    </g>
  </SvgIconWrapper>
);

export default PlusIcon;
