
import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import { NODE_TYPE } from 'utils/constants/network';
import TrayItemWidget from './TrayItemWidget';

const LibraryPanel = () => {
  const theme = useTheme();

  return (
    <div>
      <TrayItemWidget model={{nodeType: NODE_TYPE.EQUIPMENT, color: theme.custom.palette.grey}} name='Equipment' />
      <TrayItemWidget model={{nodeType: NODE_TYPE.METER, color: theme.custom.palette.red}} name='Meter' />
      <TrayItemWidget model={{nodeType: NODE_TYPE.TANK, color: theme.custom.palette.blue}} name='Tank' />
      <TrayItemWidget model={{nodeType: NODE_TYPE.WELL, color: theme.custom.palette.green}} name='Well' />
    </div>
  );
};

export default LibraryPanel;
