
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const SearchIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 17} height={height || 17} viewBox={viewBox || '0 0 18 17'} color={color} {...rest}>
    <g fill='none' fillRule='evenodd' stroke={color} strokeLinecap='round' strokeLinejoin='round'>
      <path d='M11.766 6.236A5.56 5.56 0 1 1 .647 6.235a5.56 5.56 0 0 1 11.12 0zM10.137 10.165l6.647 6.648' />
    </g>
  </SvgIconWrapper>
);

export default SearchIcon;
