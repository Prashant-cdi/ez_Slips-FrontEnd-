import React from "react";
import Image from "next/image";

function Left_banner() {
  return (
    <div className="left_banner">
      <div className="content">
        <h1 className="left_banner_h1">Salary Slip Lorem Ipsum</h1>
        <p className="left_banner_p">
          Upon completion, your information will be reviewed and a member of our
          client relations staff will contact you directly.
        </p>
        <br />
        <button className="left_banner_btn">Register</button>
      </div>
    </div>
  );
}

function Right_banner() {
  return (
    <div className="right_banner">
      <Image
        className="right_banner_img"
        src="/banner-img.png"
        alt="laptop_guy"
        width="530"
        height="684"
      />
    </div>
  );
}
const Banner = () => {
  return (
    <div className="banner_div">
      <Left_banner />
      <Right_banner />
    </div>
  );
};

export default Banner;
