import React from "react";
import Image from "next/image";
import styles from "../styles/Banner.module.css"

function Left_banner() {
  return (
    <div className={styles.left_banner}>
      <div className={styles.content}>
        <h1 className={styles.left_banner_h1}>Salary Slip Lorem Ipsum</h1>
        <p className={styles.left_banner_p}>
          Upon completion, your information will be reviewed and a member of our
          client relations staff will contact you directly.
        </p>
        <br />
        <button className={styles.left_banner_btn}>Register</button>
      </div>
    </div>
  );
}

function Right_banner() {
  return (
    <div className={styles.right_banner}>
      <Image
        className={styles.right_banner_img}
        src="/assets/images/banner-img.png"
        alt="laptop_guy"
        width="530"
        height="684"
      />
    </div>
  );
}
const Banner = () => {
  return (
    <div className={styles.banner_div}>
      <Left_banner />
      <Right_banner />
    </div>
  );
};

export default Banner;
