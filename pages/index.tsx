import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header.tsx";
import Banner from "../components/Banner.tsx";
import Features from "../components/Features.tsx";

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
    </>
  );
}
