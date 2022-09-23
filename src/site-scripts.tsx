import Script from "next/script";
import React from "react";
import {Gtag} from "./gtag";

export const SiteScripts: React.FC = () => {
  return (
    <>
      <Script strategy="beforeInteractive" type="text/javascript" src="assets/js/jquery.min.js"></Script>
      <Script strategy="beforeInteractive" type="text/javascript" src="assets/js/popper.min.js"></Script>
      <Script strategy="beforeInteractive" type="text/javascript" src="assets/js/prism.js"></Script>

      <Script strategy="beforeInteractive" type="text/javascript" src="assets/js/jquery.fancybox.min.js"></Script>
      <Script strategy="beforeInteractive" type="text/javascript" src="assets/js/jquery.countdown.min.js"></Script>
      <Script strategy="beforeInteractive" type="text/javascript" src="assets/js/jquery.smartWizard.min.js"></Script>


      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/bootstrap.js"></Script>

      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/aos.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/clipboard.min.js"></Script>

      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/flatpickr.min.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/flickity.pkgd.min.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/ion.rangeSlider.min.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/isotope.pkgd.min.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/jarallax.min.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/jarallax-video.min.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/jarallax-element.min.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/plyr.polyfilled.min.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/scrollMonitor.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/smooth-scroll.polyfills.min.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/svg-injector.umd.production.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/twitterFetcher_min.js"></Script>
      <Script strategy="afterInteractive" type="text/javascript" src="assets/js/typed.min.js"></Script>

      <Script strategy="lazyOnload" type="text/javascript" src="assets/js/theme.js"></Script>

      <Gtag/>
    </>
  );
}
