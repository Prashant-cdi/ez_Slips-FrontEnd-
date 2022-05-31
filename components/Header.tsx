import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
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
    <div className="left_header">
      <h1 className="left_header_h1">
        <Link href="/pages/index">
          <span className="main_logo">ezSlips</span>
        </Link>
      </h1>
    </div>
  );
}

function MiddleHeader({ links }) {
  return (
    <div className="middle_header">
      {links.map((val) => (
        <li key={val.text}>
          <Link href={val.href}>
            <>
              <h3>{val.text}</h3>

              <Image
                src="/down-arrow.png"
                alt="down arrow"
                height="20"
                width="20"
                className="down_arrow"
              />
            </>
          </Link>
        </li>
      ))}
    </div>
  );
}

function RightHeader() {
  return (
    <div className="right_header">
      <li>
        <Link href="/pages/signin">Sign In</Link>
      </li>
      <span className="spanbutton">
        <Link href="/pages/signup">
          <button>Sign Up</button>
        </Link>
      </span>
    </div>
  );
}

const Header = () => {
  return (
    <>
      <LeftHeader />
      <MiddleHeader links={links} />
      <RightHeader />
    </>
  );
};

export default Header;
