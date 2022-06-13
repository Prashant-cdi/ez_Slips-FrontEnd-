import React,{FC} from 'react'
import stylessignup from "../styles/SignUpForm.module.css"
import { Button, Heading, Input } from './SignInForm'
import styles from "../styles/SignInForm.module.css"
import Link from 'next/link';

const SignUpForm = () => {
  return (
    <div className={styles.signinform}>
      <Heading text="Sign Up" />
      <Input placeholder="Name" imgsrc="/assets/images/coolicon.png" alt={"coolicon"} type="text"/>
      <Input placeholder="Organisation Name" imgsrc="/assets/images/organisation.png" alt={"coolicon"} type="text"/>
      <Input placeholder="Email" imgsrc="/assets/images/email.png" alt={"coolicon"} type="text"/>
      <Input placeholder="Contact Number" imgsrc="/assets/images/contact.png" alt={"coolicon"} type="text"/>
      <p className={styles.para}>By registering you agree to our <Link href="/privacypolicy" ><span className={styles.link}>privacy policy</span></Link> and all <Link href="/terms" ><span className={styles.link}>terms and conditions</span></Link></p>

      <Button text="Register"/>

      <p className={stylessignup.lastpara}>
        <span className={stylessignup.lastpara1st}>Already have an Account</span> 
        <span className={styles.link}>Sign In</span>
      </p>
    </div>
  )
}

export default SignUpForm