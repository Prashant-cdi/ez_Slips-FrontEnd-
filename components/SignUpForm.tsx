import React,{FC} from 'react'
import stylessignup from "../styles/SignUpForm.module.css"
import { Button, Heading, Input } from './SignInForm'
import styles from "../styles/SignInForm.module.css"
import Link from 'next/link';
import { useState } from 'react';

import { useQuery, gql, useMutation } from "@apollo/client"



const SignUpForm = () => {
  const [name, setname] = useState("");
  const [organisation, setorganisation] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [Contact, setContact] = useState<string>("");

   function handleClick () {

     console.log(name )
     console.log(organisation )
     console.log(email )
     console.log(Contact )

     
    const CREATE_USER_MUTATION = gql`
      mutation CreateUser($input) {
        createUser(input: $input) {
          name, 
          id
        }
      } 
    
    `
   }
  return (
    <div className={styles.signinform}>
      <Heading text="Sign Up" />
      <Input placeholder="Name" imgsrc="/assets/images/coolicon.png" alt={"coolicon"} type="text" handleChange={setname}/>
      <Input placeholder="Organisation Name" imgsrc="/assets/images/organisation.png" alt={"coolicon"} type="text" handleChange={setorganisation}/>
      <Input placeholder="Email" imgsrc="/assets/images/email.png" alt={"coolicon"} type="text" handleChange={setemail}/>
      <Input placeholder="Contact Number" imgsrc="/assets/images/contact.png" alt={"coolicon"} type="number" handleChange={setContact}/>
      <p className={styles.para}>By registering you agree to our <Link href="/privacypolicy" ><span className={styles.link}>privacy policy</span></Link> and all <Link href="/terms" ><span className={styles.link}>terms and conditions</span></Link></p>

      <Button text="Register" handleClick={handleClick} />

      <p className={stylessignup.lastpara}>
        <span className={stylessignup.lastpara1st}>Already have an Account</span> 
        <span className={styles.link}>Sign In</span>
      </p>
    </div>
  )
}

export default SignUpForm