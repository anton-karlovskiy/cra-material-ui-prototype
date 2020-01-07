
import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import ZoomButtonWrapper from 'hoc/ZoomButtonWrapper';
import OvalIcon from 'components/Icons/SvgIcons/OvalIcon';

const ZoomFitButton = props => {
  const theme = useTheme();

  return (
    <ZoomButtonWrapper {...props}>
      <OvalIcon color={theme.palette.primary.main} />
    </ZoomButtonWrapper>
  );
};

export default ZoomFitButton;
