
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ClockIcon = props => (
  <SvgIcon {...props}>
    {/* TODO: color is not controlled */}
    <g fill='none' fillRule='evenodd' stroke='#FFF' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5'>
      <path d='M12.629 9.33h-3.96V3.364' />
      <path d='M16.501 9A7.502 7.502 0 1 1 1.498 9a7.502 7.502 0 0 1 15.003 0z' />
    </g>
  </SvgIcon>
);

export default ClockIcon;
