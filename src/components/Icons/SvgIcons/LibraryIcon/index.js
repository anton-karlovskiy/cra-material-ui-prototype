
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const LibraryIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 25} height={height || 24} viewBox={viewBox || '0 0 25 24'} color={color} {...rest}>
    <g fill='none' fillRule='evenodd' stroke={color} strokeLinecap='round' strokeLinejoin='round'>
      <path d='M23.506 2.865A2.365 2.365 0 0 0 21.14.5H2.87A2.365 2.365 0 0 0 .506 2.865v18.27A2.365 2.365 0 0 0 2.87 23.5h18.27a2.365 2.365 0 0 0 2.365-2.365V2.865z' />
      <path d='M7.495 6.004a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zM7.495 12.004a1.49 1.49 0 1 1-2.98.001 1.49 1.49 0 0 1 2.98 0zM7.495 18.005a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zM13.496 6.004a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zM13.496 12.004a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zM13.496 18.005a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zM19.496 6.004a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zM19.496 12.004a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zM19.496 18.005a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0z' />
    </g>
  </SvgIconWrapper>
);

export default LibraryIcon;
