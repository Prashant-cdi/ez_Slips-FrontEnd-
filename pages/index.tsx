import styles from "../styles/Home.module.css";
import Header from '../components/Header';
import Banner from "../components/Banner";
import Features from "../components/Features";
import Head from "next/head"
import Security from "../components/Security";
import ImageDiv from "../components/ImageDiv";
import Setup from "../components/Setup";
// import { Html } from "next/document";


export default function Home() {
  return (
    <>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
      </Head>


        <div className="header">
          <Header />
        </div>
        <Banner />
        <Features />
        <Security />
        <ImageDiv />
        <Setup/>
        
  
  
    </>
  );
}
