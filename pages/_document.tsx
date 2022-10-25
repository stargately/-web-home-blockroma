import {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
  const meta = {
    siteName: "Blockroma",
    title: "Blockroma - Blockroma is a tool for inspecting and analyzing EVM based blockchains. React blockchain explorer for Ethereum Networks.",
    description: "Blockroma - Blockroma is a tool for inspecting and analyzing EVM based blockchains. React blockchain explorer for Ethereum Networks.",
    faviconSvg: "https://tp-misc.b-cdn.net/blockroma-logo.svg",
  };

  return (
    <Html lang={"en"}>
      <Head>
        <meta name="description"
              content={meta.description}/>
        <meta name="theme-color" content="var(--primary)"/>
        <link rel="apple-touch-icon" href={meta.faviconSvg}/>
        <link rel="icon" type="image/png" sizes="any" href={meta.faviconSvg}/>

        <meta property="og:title" content={meta.title}/>
        <meta property="og:description"
              content={meta.description}/>
        <meta property="og:image" content={meta.faviconSvg}/>
        <meta property="og:site_name" content={meta.siteName} key="ogsitename" />
        <meta property="og:title" content={meta.title} key="ogtitle" />

        <meta property="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content="@stargately" key="twhandle" />

        <meta charSet="utf-8"/>
        <link
          href="assets/css/loaders/loader-typing.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="assets/css/theme-saas.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          rel="preload"
          as="font"
          href="assets/fonts/Inter-UI-upright.var.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="assets/fonts/Inter-UI.var.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />

      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
