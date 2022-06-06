import React from 'react'
import styles from "../styles/Footer.module.css";
import Link from 'next/link';

export function Leftfooter() {
  return(
    <span className={styles.footerLogo}>eZSlips</span>
  )
}

export function Middlefooter() {
return(
<div className={styles.middlefooter}>
<div className={styles.footerlink}>Product</div>
    <div className={styles.footerlink}>Contact</div>
    <div className={styles.footerlink}>About</div>
    <div className={styles.footerlink}>Pricing</div>
    <div className={styles.footerlink}>Policy</div>
</div>
)
}

function Rightfooter() {
  return(
  <div className={styles.rightfooter}>
   <p>A single platform to accept payments, protect revenue, and control your finances.</p>
  </div>
  )
}

function Rightfooter2() {
  return(
  <div className={styles.rightfooter2}>
   <p>A single platform to accept payments, protect revenue, and control your finances.</p>
  </div>
  )
}

export function Middlefooter2() {
  return (
    <div className={styles.footerbuttondiv}>
     <li>
        <Link href="/pages/signin"><span className={styles.signinlink}>Sign In</span></Link>
      </li>
      <span className={styles.spanbutton}>
        <Link href="/pages/signup">
          <button>Sign Up</button>
        </Link>
      </span>
    </div>
  )
}

const Footer = () => {
  return (
    <div className={styles.mainfooter}>
    <div className={styles.footer}>
      <Leftfooter />
      <Middlefooter />
      <Rightfooter/ >
    </div>
    <div className={styles.footer2nd}>
      <Middlefooter2 />
      <Rightfooter2 />
    </div>
    </div>

  )
}

export default Footer