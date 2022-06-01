import styles from "../styles/Home.module.css";
import Header from '../components/Header';
import Banner from "../components/Banner";
import Features from "../components/Features";
import Head from "next/head"
import Security from "../components/Security";
import WhyImageDiv from "../components/WhyImageDiv";
import Setup from "../components/Setup";
import Thanks from "../components/Thanks"
// import { Html, Head, Main, NextScript } from 'next/document'



export default function document() {
  
  return (
    <>
      {/* <Html> */}
        
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
       
      </Head>


        
        <Header />
        <Banner />
        <Features />
        <Security />
        <WhyImageDiv />
        <Setup/>
        <Thanks />
        {/* <Footer /> */}

        
  
  
      {/* </Html> */}
    </>
  );
}
