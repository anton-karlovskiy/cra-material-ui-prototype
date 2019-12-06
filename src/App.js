
import React from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import Layout from 'hoc/Layout';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      App
    </Layout>
  </ThemeProvider>
);

export default App;
