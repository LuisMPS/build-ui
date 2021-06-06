import React, {useEffect} from 'react';
import Head from 'next/head';
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

  return <React.Fragment>
      <Head>
        <meta 
          name="viewport" 
          content="viewport-fit=cover" 
        />
      </Head>
      <ThemeProvider theme = {theme}>
        <Component {...pageProps} />
      </ThemeProvider>
  </React.Fragment>
}

export default MyApp
