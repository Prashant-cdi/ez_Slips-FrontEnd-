import React, { FC, useEffect } from "react";
import stylessignup from "../styles/SignUpForm.module.css";
import { Button, Heading, Input } from "./SignInForm";
import styles from "../styles/SignUpForm.module.css";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../graphqlOperations/Signupuser";
import signup from "../pages/signup";
import Signuploader from "../pages/signUpLoader/[token]";
// import SignUp from '@user/resolver/signUpResolver';

const SignUpForm = () => {
  const [name, setname] = useState("");
  const [organisation, setorganisation] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [Contact, setContact] = useState<string>("");

  const [signUp, { data, loading, error }] = useMutation(SIGNUP_USER);

  var formData: object = {};

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = {
      name: name,
      organizationName: organisation,
      email: email,
      contactNumber: Contact,
    }

    const result =  await signUp({
      variables: {
        input: formData,
      },
    });

    if (result) {
      console.log(data)
      console.log(result);
      alert(data.SignUp.message);
    }

  }

 
  return (
    <>
      {/* {data && <h1 style={{"textAlign": "center"}}>{data.signUp.successMessage}</h1>} */}

      <div className={styles.signupform}>
        <form onSubmit={handleSubmit}>
          <Heading text="Sign Up" />

          <hr />
          <div className={styles.inputs}>
            <Input
              placeholder="Name"
              imgsrc="/assets/images/coolicon.png"
              alt={"coolicon"}
              type="text"
              handleChange={setname}
              id="signupname"
              classname={styles.signupinputs}
            />
          </div>

          <div className={styles.inputs}>
            <Input
              placeholder="Organisation Name"
              imgsrc="/assets/images/organisation.png"
              alt={"coolicon"}
              type="text"
              handleChange={setorganisation}
              id="signuporganisation"
              classname="signupinputs"
            />
          </div>

          <div className={styles.inputs}>
            <Input
              placeholder="Email"
              imgsrc="/assets/images/email.png"
              alt={"coolicon"}
              type="email"
              handleChange={setemail}
              id="signupemail"
              classname="signupinputs"
            />
          </div>

          <div className={styles.inputs}>
            <Input
              placeholder="Contact Number"
              imgsrc="/assets/images/contact.png"
              alt={"coolicon"}
              type="number"
              handleChange={setContact}
              id="signupContact"
              classname="signupinputs"
            />
          </div>
          <p className={styles.para}>
            By registering you agree to our{" "}
            <Link href="/privacypolicy">
              <span className={styles.link}>privacy policy</span>
            </Link>{" "}
            and all{" "}
            <Link href="/terms">
              <span className={styles.link}>terms and conditions</span>
            </Link>
          </p>

          <input type="submit" className={styles.register} />
        </form>

        <div className={stylessignup.lastpara}>
          <span className={stylessignup.lastpara1st}>
            Already have an Account
          </span>
          <span className={styles.signinlink}>Sign In</span>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
