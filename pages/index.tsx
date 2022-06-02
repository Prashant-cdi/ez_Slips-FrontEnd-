import styles from "../styles/Home.module.css";
import Header from '../components/Header';
import Banner from "../components/Banner";
import Features from "../components/Features";
import Head from "next/head"
import Security from "../components/Security";
import WhyImageDiv from "../components/WhyImageDiv";
import Setup from "../components/Setup";
import Thanks from "../components/Thanks"
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";




export default function document() {
  
  return (
    <>

        <Header />
        <Banner />
        <Features />
        <Security />
        <WhyImageDiv />
        <Setup/>
        <Thanks />
        <Footer />
        <Copyright/>   
    </>
  );
}
