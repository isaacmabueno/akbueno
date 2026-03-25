import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#fa9d3e',
    },
    info: {
      main: '#2ea3f2',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Prata', 'Georgia', 'serif'].join(','),
      fontWeight: 500,
    },
    h2: { fontFamily: ['Prata', 'Georgia', 'serif'].join(','), fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 700,
          textTransform: 'none',
          transition: 'all 0.25s ease',
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#ffffff',
            color: '#333333',
          },
        },
        outlinedPrimary: {
          '&:hover': {
            backgroundColor: '#333333',
            color: '#ffffff',
            borderColor: '#333333',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        // root: { boxShadow: '6px 6px 9px rgba(0,0,0,0.12)' },
      },
    },
  },
})

export default theme
