
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const PropertiesIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 24} height={height || 24} viewBox={viewBox || '0 0 24 24'} color={color} {...rest}>
    <g fill='none' fillRule='evenodd' stroke={color} strokeLinecap='round' strokeLinejoin='round'>
      <path d='M23.5 2.883A2.383 2.383 0 0 0 21.117.5H2.883A2.383 2.383 0 0 0 .5 2.883v18.233A2.383 2.383 0 0 0 2.883 23.5h18.234a2.383 2.383 0 0 0 2.383-2.384V2.883z' />
      <path d='M8.561 7.243a2.064 2.064 0 1 1-4.128 0 2.064 2.064 0 0 1 4.128 0zM14.157 15.998a2.064 2.064 0 1 1-4.128 0 2.064 2.064 0 0 1 4.128 0zM17.48 11.81v7.723M17.48 4.43v3.25M19.544 9.745a2.064 2.064 0 1 1-4.128 0 2.064 2.064 0 0 1 4.128 0zM6.497 9.308v10.225M6.497 4.43v.749M12.093 18.063v1.47M12.093 4.43v9.504' />
    </g>
  </SvgIconWrapper>
);

export default PropertiesIcon;
