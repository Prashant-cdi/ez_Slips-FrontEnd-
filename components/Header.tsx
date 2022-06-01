import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
const links = [
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
      <h1 className={styles.left_header_h1}>
        <Link href="/pages/index">
          <span className={styles.main_logo}>ezSlips</span>
        </Link>
      </h1>
    </div>
  );
}

function MiddleHeader({ links }) {

  // function handleClick(props) {
  //   console.log(props);
  // }

  return (
    <div className={styles.middle_header}>
      {links.map((val) => (
        <li key={val.text} id={val.text}>
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
        </li>
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

const Header = () => {
  return (
    <div className={styles.header}>

      <LeftHeader />
      <MiddleHeader links={links} />
      <RightHeader />
    </div>
  );
};

export default Header;
