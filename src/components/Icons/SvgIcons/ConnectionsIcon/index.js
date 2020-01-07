
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const ConnectionsIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 24} height={height || 24} viewBox={viewBox || '0 0 24 24'} color={color} {...rest}>
    <g fill='none' fillRule='evenodd' stroke={color} strokeLinecap='round' strokeLinejoin='round'>
      <path d='M5.442 20.972c0 1.34-1.08 2.425-2.41 2.425a2.418 2.418 0 0 1-2.413-2.425 2.418 2.418 0 0 1 2.412-2.425 2.419 2.419 0 0 1 2.411 2.425zM13.923 20.972c0 1.34-1.08 2.425-2.411 2.425A2.418 2.418 0 0 1 9.1 20.972a2.418 2.418 0 0 1 2.412-2.425 2.419 2.419 0 0 1 2.41 2.425zM22.57 20.972c0 1.34-1.08 2.425-2.41 2.425a2.418 2.418 0 0 1-2.413-2.425 2.419 2.419 0 0 1 2.412-2.425 2.419 2.419 0 0 1 2.411 2.425zM11.51 5.506v13.041' />
      <path d='M4.623 19.154l6.888-8.247 7.174 8.15M13.923 3.082a2.419 2.419 0 0 1-2.411 2.425A2.418 2.418 0 0 1 9.1 3.082 2.418 2.418 0 0 1 11.512.657a2.419 2.419 0 0 1 2.41 2.425z' />
    </g>
  </SvgIconWrapper>
);

export default ConnectionsIcon;
