
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const TemplatesIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 24} height={height || 21} viewBox={viewBox || '0 0 24 21'} color={color} {...rest}>
    <g fill='none' fillRule='evenodd' stroke={color} strokeLinecap='round' strokeLinejoin='round'>
      <path d='M21.614 19.521H2.395L.65 7.471h22.71zM7.277 4.106S6.605 2.529 6.17 2.529H3.335a.78.78 0 0 0-.79.769v2.308M7.667 11.447h7.8' />
      <path d='M21.213 7.47H5.838l-.473-2.95 14.612-3.166z' />
    </g>
  </SvgIconWrapper>
);

export default TemplatesIcon;
