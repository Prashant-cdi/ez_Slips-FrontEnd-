import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";


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
        <Link href="/pages/index">
          <span className={styles.main_logo}>ezSlips</span>
        </Link>
      </div>
    </div>
  );
}

function MiddleHeader({ links }) {
  
  return (
    <div className={styles.middle_header}>
      {links.map((val) => (
        <div key={val.text} id={val.text} className={styles.middleheaderlink} >
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
<>
   <div className="flex">
      <div className={styles.1stmodalchild modalchilds}>
        <h1>Product</h1>
        <p>A single platform to accept payments, protect revenue, and control your finances</p>
      </div>
      <div className={styles.2ndmodalchild modalchilds}></div">
      <div className={styles.3rdmodalchild modalchilds}></div">
   </div>
</>
 ) 
}
const Header = () => {
  return (
    <>
    <div className={styles.header}>

      <LeftHeader />
      <MiddleHeader links={links} />
      <RightHeader />
      
    </div>
    <Modal />
    </>
  );
};

export default Header;
