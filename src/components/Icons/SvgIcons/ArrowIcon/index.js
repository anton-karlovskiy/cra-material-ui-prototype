
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const ArrowIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 8} height={height || 14} viewBox={viewBox || '0 0 8 14'} color={color} {...rest}>
    <path fill='none' fillRule='evenodd' stroke={color} d='M.635 14l6.32-6.32-6.32-6.32' />
  </SvgIconWrapper>
);

export default ArrowIcon;
