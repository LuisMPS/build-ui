import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        'Roboto',
        'KoHo',
      ].join(','),
    },
  });
  return <ThemeProvider theme = {theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
