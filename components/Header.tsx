import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useState, useEffect } from 'react'


 
interface Modalcontent {

  "1stdiv_heading":string;
  "1stdiv_para" :string;
  "2nddiv_main_heading":string;

  "2nddiv_first_smallheading":string;
  "2nddiv_upper_para":string;
  "2nddiv_second_smallheading": string;
  "2nddiv_lower_para": string;

  "3rddiv_main_heading" : string;
  "3rddiv_first_smallheading":  string;
  "3rddiv_second_smallheading":  string;
  "3rddiv_lower_para":  string;
  "3rddiv_upper_para": string;
}

const modalcontent: Modalcontent[] = [
 
  { 
    "1stdiv_heading": "Product",
    "1stdiv_para" :"A single platform to accept payments, protect revenue, and control your finances.",
    "2nddiv_main_heading" : "For Business",

    "2nddiv_first_smallheading": "Teams",
    "2nddiv_upper_para": "A single platform to accept payments, protect revenue, and control your finances.",
    "2nddiv_second_smallheading": "Enhancements",
    "2nddiv_lower_para": "A single platform to accept payments, protect revenue, and control your finances.",

    "3rddiv_main_heading" : "For Individual",
    "3rddiv_first_smallheading": "Online",
    "3rddiv_upper_para": "A single platform to accept payments, protect revenue, and control your finances.",
    "3rddiv_second_smallheading": "Authentication",
    "3rddiv_lower_para": "A single platform to accept payments, protect revenue, and control your finances.",
  },

  { 
    "1stdiv_heading": "About",
    "1stdiv_para" :"A single platform to accept payments, protect revenue, and control your finances.",
    "2nddiv_main_heading" : "For Business",

    "2nddiv_first_smallheading": "Teams",
    "2nddiv_upper_para": "A single platform to accept payments, protect revenue, and control your finances.",
    "2nddiv_second_smallheading": "Enhancements",
    "2nddiv_lower_para": "A single platform to accept payments, protect revenue, and control your finances.",

    "3rddiv_main_heading" : "For Individual",
    "3rddiv_first_smallheading": "Online",
    "3rddiv_upper_para": "A single platform to accept payments, protect revenue, and control your finances.",
    "3rddiv_second_smallheading": "Authentication",
    "3rddiv_lower_para": "A single platform to accept payments, protect revenue, and control your finances.",
  },

  { 
    "1stdiv_heading": "Contact",
    "1stdiv_para" :"A single platform to accept payments, protect revenue, and control your finances.",
    "2nddiv_main_heading" : "For Business",

    "2nddiv_first_smallheading": "Teams",
    "2nddiv_upper_para": "A single platform to accept payments, protect revenue, and control your finances.",
    "2nddiv_second_smallheading": "Enhancements",
    "2nddiv_lower_para": "A single platform to accept payments, protect revenue, and control your finances.",

    "3rddiv_main_heading" : "For Individual",
    "3rddiv_first_smallheading": "Online",
    "3rddiv_upper_para": "A single platform to accept payments, protect revenue, and control your finances.",
    "3rddiv_second_smallheading": "Authentication",
    "3rddiv_lower_para": "A single platform to accept payments, protect revenue, and control your finances.",
  },

  { 
    "1stdiv_heading": "Policy",
    "1stdiv_para" :"A single platform to accept payments, protect revenue, and control your finances.",
    "2nddiv_main_heading" : "For Business",

    "2nddiv_first_smallheading": "Teams",
    "2nddiv_upper_para": "A single platform to accept payments, protect revenue, and control your finances.",
    "2nddiv_second_smallheading": "Enhancements",
    "2nddiv_lower_para": "A single platform to accept payments, protect revenue, and control your finances.",

    "3rddiv_main_heading" : "For Individual",
    "3rddiv_first_smallheading": "Online",
    "3rddiv_upper_para": "A single platform to accept payments, protect revenue, and control your finances.",
    "3rddiv_second_smallheading": "Authentication",
    "3rddiv_lower_para": "A single platform to accept payments, protect revenue, and control your finances.",
  },

  { 
    "1stdiv_heading": "Pricing",
    "1stdiv_para" :"A single platform to accept payments, protect revenue, and control your finances.",
    "2nddiv_main_heading" : "For Business",

    "2nddiv_first_smallheading": "Teams",
    "2nddiv_upper_para": "A single platform to accept payments, protect revenue, and control your finances.",
    "2nddiv_second_smallheading": "Enhancements",
    "2nddiv_lower_para": "A single platform to accept payments, protect revenue, and control your finances.",

    "3rddiv_main_heading" : "For Individual",
    "3rddiv_first_smallheading": "Online",
    "3rddiv_upper_para": "A single platform to accept payments, protect revenue, and control your finances.",
    "3rddiv_second_smallheading": "Authentication",
    "3rddiv_lower_para": "A single platform to accept payments, protect revenue, and control your finances.",
  }

]


interface Links {
  text: string;
  href: string;
}

const links: Links[] = [
  {
    text: "Product",
    href: "/pages/products",
  },
  {
    text: "About",
    href: "/pages/products",
  },
  {
    text: "Contact",
    href: "/pages/contact",
  },
  {
    text: "Policy",
    href: "/pages/policy",
  },
  {
    text: "Pricing",
    href: "/pages/pricing",
  },
];

function LeftHeader() {
  return (
    <div className={styles.left_header}>
      <div className={styles.left_header_h1}>
        <Link href="/">
          <span className={styles.main_logo}>ezSlips</span>
        </Link>
      </div>
    </div>
  );
}




function MiddleHeader({ links })  {
   
  return(

    <div className={styles.middle_header}>
      {links.map((val) => (
        <div key={val.text} id={val.text} className={styles.middleheaderlink} 
        >
      
          <Link href={val.href}>
            <>
              <h3>{val.text}</h3>

              <span className={styles.down_arrow}>

                <Image
                  src="/assets/images/down-arrow.png"
                  alt="down arrow"
                  height="20"
                  width="20"
                  />
              </span>

            </>
          </Link>
        </div>
      ))}

      </div>
  );
}

function RightHeader() {
  return (
    <div className={styles.right_header}>
      <li>
        <Link href="/pages/signin">Sign In</Link>
      </li>
      <span className={styles.spanbutton}>
        <Link href="/pages/signup">
          <button>Sign Up</button>
        </Link>
      </span>
    </div>
  );
}

function Modal() {

 return(

   <div className={`flex ${styles.modal}`} id="modal">
      <div className={`${styles.firstmodalchild} ${styles.modalchilds}`}>
        <div className={styles.name}>{modalcontent[0]["1stdiv_heading"]}</div>
        <p >{modalcontent[0]["1stdiv_para"]}</p>
      </div>
      
      <div className={`${styles.secondmodalchild} ${styles.modalchilds}`}>
      
        <h2>{modalcontent[0]["2nddiv_main_heading"]}</h2>
        <h3>{modalcontent[0]["2nddiv_first_smallheading"]}</h3>
        <p className={styles.samepara}>{modalcontent[0]["2nddiv_upper_para"]}</p>
        <hr className={styles.hruler} />
        <h3>{modalcontent[0]["2nddiv_second_smallheading"]}</h3>
        <p className={styles.samepara}>{modalcontent[0]["2nddiv_lower_para"]}</p>

      </div>

      <div className={`${styles.thirdrdmodalchild} ${styles.modalchilds}`}>
      <h2>{modalcontent[0]["3rddiv_main_heading"]}</h2>
        <h3>{modalcontent[0]["3rddiv_first_smallheading"]}</h3>
        <p className={styles.samepara}>{modalcontent[0]["3rddiv_upper_para"]}</p>
        <hr className={styles.hruler}/>
        <h3>{modalcontent[0]["3rddiv_second_smallheading"]}</h3>
        <p className={styles.samepara}>{modalcontent[0]["3rddiv_lower_para"]}</p>
      </div>

     
   </div>
 ) 
}

const Header = () => {


  return (
    <>

<div className={styles.header}>

  <LeftHeader />
  <MiddleHeader links={links}  />
  <RightHeader />
  
</div>


{/* <Modal /> */}
</>
  );
};

export default Header;
