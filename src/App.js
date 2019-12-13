
import React from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import Layout from 'hoc/Layout';
import Hierarchy from 'components/Hierarchy';
import TankIcon from 'components/Icons/SvgIcons/TankIcon';
import MeterIcon from 'components/Icons/SvgIcons/MeterIcon';
import OilIcon from 'components/Icons/SvgIcons/OilIcon';
import WaterIcon from 'components/Icons/SvgIcons/WaterIcon';
import WellIcon from 'components/Icons/SvgIcons/WellIcon';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <Hierarchy />
      {/* TODO: use color from theme */}
      <TankIcon color='#387DF4' />
      <TankIcon color='#6C6' />
      <MeterIcon color='#4A4A4A' />
      <OilIcon color='#F66' />
      <WaterIcon color='#6C6' />
      <WellIcon color='#6C6' />
    </Layout>
  </ThemeProvider>
);

export default App;
