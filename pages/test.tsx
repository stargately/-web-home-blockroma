import type {NextPage} from 'next'
import Head from "next/head";
import {SiteNav} from "../src/site-nav";
import {useEffect} from "react";
import {SiteFooter} from "../src/site-footer";

const Test: NextPage = () => {
  useEffect(() => {
    document.querySelector('body')?.classList.add('loaded');
  }, [])
  return (
    <>
    <Head>
      <title>adsfasdfsadf</title>
    </Head>


    <SiteNav/>
      <section className="has-divider">
        <div className="container">
          test
        </div>
      </section>


      <SiteFooter/>
    </>
)
  ;
}

export default Test;
