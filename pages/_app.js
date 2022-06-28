import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href={'favicon.ico'} />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />

        <meta name='author' content='Kent Ezra Betita' />
        <meta name='title' content='Kent Ezra Betita' />
        <meta
          name='description'
          content='Kent Ezra Betita is a self learning software and web developer through research and development.'
        />
        <meta
          name='keywords'
          content='kent ezra betita, full stack web developer, computer science student, caraga state university, full time, freelance, web developer, Web Animations, Machine Learning, AI, Security, Penetration Testing, Docker, Kubernetes, Blockchain, Cryptocurrency'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Kent Ezra Betita' />
        <meta
          property='og:description'
          content='Kent Ezra Betita is a self learning software and web developer through research and development.'
        />
        <meta property='og:site_name' content='Kent Ezra Betita' />
        <meta property='og:url' content='https://kentezrabetita.github.io' />
        <meta name='twitter:title' content='Kent Ezra A. Betita' />
        <meta
          name='twitter:description'
          content='Kent Ezra Betita is a self learning software and web developer through research and development.'
        />
      </Head>
      <ThemeProvider enableSystem={false} attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
