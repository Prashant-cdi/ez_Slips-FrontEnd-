import React,{FC} from 'react'
import signin from '../pages/signin';
import styles from "../styles/SignInForm.module.css"
import Image from 'next/image';
import Link from 'next/link';



export const Heading : FC<{text:string}> = ({text}) => {
return (
<h1>{text}</h1>
)
}

export interface Inputprops {
  [index:string] :string,
}

export const Input:FC<Inputprops> = ({placeholder,imgsrc,alt,type}) => {
  return (
    <div className={styles.inputdiv}  >
        <input type={type} name="" id="" placeholder={placeholder} className={styles.inputs}/>
        <span className={styles.inputimg} style={{height:"24px", width:"24px"}}><Image 
        src={imgsrc}
        alt={alt}
        layout="fill"
        />
        </span>
    </div>
  )
}



export const Button:FC<{text:string}>= ({text}) => {
  return (
    <div><div className={styles.buttondiv}>
    <button type="submit" >{text}</button>
  </div></div>
  )
}




const SignInForm:FC = () => {
  return (

    <div className={styles.signinform} >
            <Heading text="Sign In"/>
            <p>Please enter your email and password</p>
            <Input placeholder="Email" imgsrc="/assets/images/mail_open.png" alt={"mail_open"} type="text"/>
            <Input placeholder="Password" imgsrc="/assets/images/lock_closed.png" alt={"lock_closed"} type="password"/>
            <div className={styles.remember}>
              
              <input type="checkbox" name="" id="" /><span>Remember me on this device</span>
            
            </div>

            <Button text="Sign in"/>
            <div className={styles.forgotdiv}>
              <Link href="/forgotpassword"><a>Forgot password</a></Link>
            </div>
        
            
    </div>
  )
}

export default SignInForm