
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

// TODO: color #4A4A4A
const MeterIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 30} height={height || 30} viewBox={viewBox || '0 0 30 30'} color={color} {...rest}>
    <g fill={color} fillRule='nonzero'>
      <path d='M7.5 5c.75 0 1.25-.5 1.25-1.25S9.25 2.5 10 2.5h3.75C14.5 2.5 15 2 15 1.25S14.5 0 13.75 0H10C7.875 0 6.25 1.625 6.25 3.75 6.25 4.5 6.75 5 7.5 5M28.75 17.5H25V10c.75 0 1.25-.5 1.25-1.25V5c0-.75-.5-1.25-1.25-1.25H15c-.75 0-1.25.5-1.25 1.25v3.75c0 .75.5 1.25 1.25 1.25v7.5h-3.75V8.75c0-.75-.5-1.25-1.25-1.25H5c-.75 0-1.25.5-1.25 1.25v8.75h-2.5C.5 17.5 0 18 0 18.75v10C0 29.5.5 30 1.25 30h27.5c.75 0 1.25-.5 1.25-1.25v-10c0-.75-.5-1.25-1.25-1.25zM6.25 10h2.5v7.5h-2.5V10zm5 15h-5C5.5 25 5 24.5 5 23.75s.5-1.25 1.25-1.25h5c.75 0 1.25.5 1.25 1.25S12 25 11.25 25zm11.25-6.25v8.75h-5V10h5v8.75zm5 8.75H25V20h2.5v7.5z' />
    </g>
  </SvgIconWrapper>
);

export default MeterIcon;
