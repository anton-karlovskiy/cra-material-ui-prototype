
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const PlusIcon = props => (
  <SvgIcon {...props}>
    <path d='M6 0h1v13H6z' />
    <path d='M13 6v1H0V6z' />
  </SvgIcon>
);

export default PlusIcon;
