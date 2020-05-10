
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33d8c7',
      main: '#00cfba',
      dark: '#009082',
      contrastText: '#fff'
    },
    secondary: {
      light: '#7088b7',
      main: '#4d6ba5',
      dark: '#354a73',
      contrastText: '#fff'
    },
    error: {
      light: '#ff3333',
      main: '#ff0000',
      dark: '#b20000',
      contrastText: '#fff'
    },
    background: {
      default: '#f5f6f8'
    },
    text: {
      primary: '#2f2f2f',
      secondary: '#fff'
    }
  },
  overrides: {
    MuiButton: {
      // TODO: small, large
      // https://material-ui.com/customization/globals/
      // https://material-ui.com/api/button/
      root: {
        minWidth: 96,
        minHeight: 40
      }
    }
  },
  typography: {
    htmlFontSize: 10,
    button: {
      fontSize: '1.2rem',
      letterSpacing: '-0.33px'
    },
    h3: {
      fontSize: '2.4rem',
      letterSpacing: '-0.67px'
    },
    h4: {
      fontSize: '1.8rem',
      letterSpacing: '-0.5px'
    },
    h5: {
      fontSize: '1.4rem',
      letterSpacing: '-0.39px',
    },
    h6: {
      fontSize: '1.2rem',
      letterSpacing: '-0.33px'
    },
    subtitle1: {
      fontSize: '1rem',
      letterSpacing: '-0.28px',
      fontWeight: 700
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '-0.28px'
    },
    subtitle2: {
      fontSize: '.8rem',
      letterSpacing: '-0.22px',
      fontWeight: 700
    },
    body2: {
      fontSize: '.8rem',
      letterSpacing: '-0.22px'
    }
  },
  custom: {
    palette: {
      blueGrey: '#424f62',
      // network color schema
      grey: '#4A4A4A', // equipment
      red: '#F66', // gas
      green: '#6C6', // oil
      blue: '#387DF4', // water
      darkBlue: '#34528b'
    },
    layout: {
      openedDrawerWidth: 272,
      closedDrawerWidth: 64,
      upperSubToolbarHeight: 80,
      lowerSubToolbarHeight: 64,
      networkPopperWidth: 280
    }
  }
});

export default theme;
