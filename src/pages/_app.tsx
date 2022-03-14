import '../../styles/globals.scss';
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from '../utils/muiTheme.js';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      </>
  );
}

export default MyApp
