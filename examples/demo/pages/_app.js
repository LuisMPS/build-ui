import {useEffect} from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    // Important to avoid duplicate styles.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

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
