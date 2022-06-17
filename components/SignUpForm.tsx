import React, { FC, useEffect } from "react";
import stylessignup from "../styles/SignUpForm.module.css";
import { Button, Heading, Input } from "./SignInForm";
import styles from "../styles/SignInForm.module.css";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../graphqlOperations/mutations";
import signup from '../pages/signup';


const SignUpForm = () => {
  
  const [name, setname] = useState("");
  const [organisation, setorganisation] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [Contact, setContact] = useState<string>("");

  const [signUp, { data, loading, error }] = useMutation(SIGNUP_USER);


  if (loading) return <h1>Loading</h1>;


  function handleSubmit(e:any){
   
    e.preventDefault();


    console.log("handlesubmit is run");
    let formdata = {
      name: name,
      organization_name: organisation,
      email: email,
      contact_number: Contact,
    };

    signUp({
      variables: {
        input: formdata
      }
    })

    if (error) {
      console.log(error);
    }

    if (data) { 
      console.log(data);
      alert(data.signUp.successMessage);

    }

    if (loading) {
      console.log("loading")
    }

    console.log("handlesubmit is run-------------last line");
  }

  return (
    <>
    
    {/* {data && <h1 style={{"textAlign": "center"}}>{data.signUp.successMessage}</h1>} */}
    <div className={styles.signinform}>
      <form action="" onSubmit={handleSubmit}>

    
      <Heading text="Sign Up" />
      
      <Input
        placeholder="Name"
        imgsrc="/assets/images/coolicon.png"
        alt={"coolicon"}
        type="text"
        handleChange={setname}
      />

      <Input
        placeholder="Organisation Name"
        imgsrc="/assets/images/organisation.png"
        alt={"coolicon"}
        type="text"
        handleChange={setorganisation}
        />

      <Input
        placeholder="Email"
        imgsrc="/assets/images/email.png"
        alt={"coolicon"}
        type="email"
        handleChange={setemail}
        />
        
      <Input
        placeholder="Contact Number"
        imgsrc="/assets/images/contact.png"
        alt={"coolicon"}
        type="number"
        handleChange={setContact}
        />
        
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


      <Button text="Register" />

      </form>

      <p className={stylessignup.lastpara}>
        <span className={stylessignup.lastpara1st}>
          Already have an Account
        </span>
        <span className={styles.link}>Sign In</span>
      </p>
    </div>
    </>
  );
};

export default SignUpForm;
