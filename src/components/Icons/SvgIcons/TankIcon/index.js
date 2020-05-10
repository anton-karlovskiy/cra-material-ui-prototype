
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const TankIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 32} height={height || 32} viewBox={viewBox || '0 0 32 32'} color={color} {...rest}>
    <path fill={color} fillRule='evenodd' d='M18.79 19.6v8.857h1.789V19.6h9.842v8.857H33a1 1 0 0 1 1 1V31a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1.543a1 1 0 0 1 1-1h1.684V19.6H18.79zm0-13.286V17.83H2.683V6.314H18.79zm5.235-1.771c1.556 0 2.817 1.214 2.817 2.713V8.97h1.58a2 2 0 0 1 2 2v6.858h-9.843V10.97a2 2 0 0 1 2-2h2.385V7.256c0-.464-.362-.846-.829-.899l-.11-.006h-5.189l-.047-1.808zM15.247 1a3.543 3.543 0 0 1 3.537 3.348l.005.195H2.684A3.543 3.543 0 0 1 6.227 1h9.02z' />
  </SvgIconWrapper>
);

export default TankIcon;
