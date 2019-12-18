
import React from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import Layout from 'hoc/Layout';
import Network from 'containers/Network';

// TODO: component list
// import Hierarchy from 'components/Hierarchy';
// import TankIcon from 'components/Icons/SvgIcons/TankIcon';
// import EquipmentIcon from 'components/Icons/SvgIcons/EquipmentIcon';
// import OilIcon from 'components/Icons/SvgIcons/OilIcon';
// import WaterIcon from 'components/Icons/SvgIcons/WaterIcon';
// import WellIcon from 'components/Icons/SvgIcons/WellIcon';
// TODO: use color from theme
// <TankIcon color='#387DF4' />
// <Hierarchy />
// <TankIcon color='#6C6' />
// <EquipmentIcon color='#4A4A4A' />
// <OilIcon color='#F66' />
// <WaterIcon color='#6C6' />
// <WellIcon color='#6C6' />

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <Network />
    </Layout>
  </ThemeProvider>
);

export default App;
