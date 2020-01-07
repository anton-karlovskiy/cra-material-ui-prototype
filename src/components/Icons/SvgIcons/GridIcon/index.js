
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const GridIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 24} height={height || 24} viewBox={viewBox || '0 0 24 24'} color={color} {...rest}>
    <g fill='none' fillRule='evenodd' stroke={color} strokeLinecap='round' strokeLinejoin='round'>
      <path d='M23.5 2.865A2.365 2.365 0 0 0 21.135.5H2.865A2.365 2.365 0 0 0 .5 2.865v18.27A2.365 2.365 0 0 0 2.865 23.5h18.27a2.365 2.365 0 0 0 2.365-2.365V2.865zM18.52 6.5h-7.014M18.52 12.5h-7.014M18.52 18.5h-7.014' />
      <path d='M7.49 6.004a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zM7.49 12.004a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zM7.49 18.005a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0z' />
    </g>
  </SvgIconWrapper>
);

export default GridIcon;
