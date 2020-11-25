import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.scss";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
