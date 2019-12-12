
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const ClockIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 18} height={height || 18} viewBox={viewBox || '0 0 18 18'} color={color} {...rest}>
    <g fill='none' fillRule='evenodd' stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5'>
      <path d='M12.629 9.33h-3.96V3.364' />
      <path d='M16.501 9A7.502 7.502 0 1 1 1.498 9a7.502 7.502 0 0 1 15.003 0z' />
    </g>
  </SvgIconWrapper>
);

export default ClockIcon;
