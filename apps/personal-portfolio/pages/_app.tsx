import { Preloader } from '@abhishek/core-components';
import { persistor, store } from '@abhishek/store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { Lato } from 'next/font/google';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  registerDebugBearRUM,
  registerGTM,
  registerHotjar,
  registerMicrosoftClarity,
  registerVercelAnalytics,
} from '../utils/tracking.utils';
import './styles-light.scss';
import './styles.scss';

const font = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    AOS.init();

    registerHotjar();
  }, []);

  useEffect(() => {
    // Page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setTimeout(() => setLoading(false), 250);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, [Router]);

  return (
    <Provider {...{ store }}>
      <PersistGate loading={<Preloader />} {...{ persistor }}>
        <ThemeProvider
          {...{
            defaultTheme: 'dark',
          }}
        >
          <Head>
            <title>Abhishek Panthee - Personal Portfolio</title>
            <meta name="title" content="Abhishek Panthee" />
            <meta
              name="description"
              content="Hard-working developer with a flair for creating elegant solutions to complex problems. "
            />
            <SpeedInsights/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://abhishekpanthee.com.np/" />
            <meta property="og:title" content="Abhishek Panthee" />
            <meta
              property="og:description"
              content="Hard-working developer with a flair for creating elegant solutions to complex problems."
            />
            <meta
              property="og:image"
              content="https://www.abhishekpanthee.com.np/assets/3d-headshot.jpg"
            />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content="https://twitter.com/AbhishekPanthee"
            />
            <meta property="twitter:title" content="Abhishek Panthee" />
            <meta
              property="twitter:description"
              content="Hard-working developer with a flair for creating elegant solutions to complex problems."
            />
            <meta
              property="twitter:image"
              content="https://www.abhishekpanthee.com.np/assets/3d-headshot.jpg"
            />

            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/iconoir/6.9.0/css/iconoir.min.css"
            />
            {registerDebugBearRUM()}
            {registerMicrosoftClarity()}
          </Head>
          {registerGTM()}
          <AnimatePresence mode="wait" initial={false}>
            <main className={font.className}>
              {loading ? <Preloader /> : <Component {...pageProps} />}
              {registerVercelAnalytics()}
            </main>
          </AnimatePresence>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default CustomApp;
