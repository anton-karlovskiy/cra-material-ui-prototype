
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const CalendarIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 12} height={height || 12} viewBox={viewBox || '0 0 12 12'} color={color} {...rest}>
    <path fill={color} fillRule='nonzero' stroke={color} strokeWidth='.5' d='M9.61 1.833h-.833V1h-.555v.833H3.778V1h-.556v.833H2.39A1.39 1.39 0 0 0 1 3.223V9.61A1.39 1.39 0 0 0 2.39 11h7.22A1.39 1.39 0 0 0 11 9.611V3.222a1.39 1.39 0 0 0-1.39-1.389zm.834 7.778c0 .459-.374.833-.833.833H2.389a.834.834 0 0 1-.833-.833v-5h8.888v5zm0-5.555H1.556v-.834c0-.46.373-.833.833-.833h.834v.555h.555v-.555h4.444v.555h.555V2.39h.834c.46 0 .833.373.833.833v.834z' />
  </SvgIconWrapper>
);

export default CalendarIcon;
