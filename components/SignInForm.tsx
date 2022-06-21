import React,{FC} from 'react'
import signin from '../pages/signin';
import styles from "../styles/SignInForm.module.css"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



export const Heading : FC<{text:string}> = ({text}) => {
return (
<h1>{text}</h1>
)
}

export interface Inputprops {
  placeholder:string,
  imgsrc:string,
  alt: string,
  type: string
  id: string,
  classname: string,
  handleChange: React.Dispatch<React.SetStateAction<string>>
}

export const Input:FC<Inputprops> = ({placeholder,imgsrc,alt,type, handleChange, id}) => {
  function handle(e:any){
    handleChange(e.target.value);
}  

return (
    <div className={styles.inputdiv}  >

        <input type={type} placeholder={placeholder} className={styles.inputs} onChange={ handle } id={id} required/>
        <span  style={{height:"24px", width:"24px"}} className={styles.inputdivimg}>
        
        <Image 
        src={imgsrc}
        alt={alt}
        height="16"
        width="16"
        
        // layout="fill"
        />

        </span>
    </div>
  )
}



export const Button:FC<{text:string}>= ({text}) => {

 
  return (
 
    <div>
      <div className={styles.buttondiv}>
    <button type="submit">{text}</button>
    </div>
    </div>
    
  )
}




const SignInForm:FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e:any) {
    e.preventDefault();
    console.log(email)
    console.log(password)
  }  

  return (

    <div className={styles.signinform} >

          <form onSubmit={handleSubmit}>

            <Heading text="Sign In"/>
            <hr />
            <p className={styles.p1}>Please enter your email and password</p>
            <Input placeholder="Email" imgsrc="/assets/images/mail_open.png" alt={"mail_open"} type="email" handleChange={setEmail} id="emailid" classname="signininputs"/> 
            <Input placeholder="Password" imgsrc="/assets/images/lock_closed.png" alt={"lock_closed"} type="password" handleChange={setPassword} id="passid" classname="signininputs"/> 
            <div className={styles.remember}>
              
              <input type="checkbox" name="" id="" /><span>Remember me on this device</span>
            
            </div>

            <Button text="Sign in"/>
            <div className={styles.forgotdiv}>
              <Link href="/forgotpassword"><a>Forgot password</a></Link>
            </div>
          </form>
        
            
    </div>
  )
}

export default SignInForm