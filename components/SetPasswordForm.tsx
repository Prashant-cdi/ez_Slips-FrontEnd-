import React from 'react'
import styles from '../styles/SetPasswordForm.module.css';
import { Button, Heading, Input } from './SignInForm'
import SignInForm from './SignInForm';
import Setpassword from '../pages/setpassword';
import { SET_PASSWORD } from "../graphqlOperations/mutations";
import { useState } from 'react';
import { useMutation } from '@apollo/client';


const SetPasswordForm = () => {
  
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState(""); 
  const [msg, setMsg]= useState(""); 

  const [setPassword, {data, error, loading}]= useMutation(SET_PASSWORD)

  function handleSubmit(e:any) {

    e.preventDefault();
    console.log("handleSubmit has run")

    if(password1 != password2){
      setMsg ("Passwords do not match");
    }
    else{
      setMsg("")

      setPassword({
        variables:{
          setPasswordId: "62ac70aa569c4e3f25319126",
          password : password1
        }
      })

      if(loading) return (<h1>loading</h1>)

      if(error) return <h1>error</h1>

      if(data) {console.log(data)}
      

    }
  }

  return (  
    
    <div className={styles.setpassword}>
      <form onSubmit={handleSubmit}>

        <h1 >Set Password</h1>
        <hr />
        <p>Email Verified Sucessfully Please Set a password</p>
        <Input placeholder="Enter Password" imgsrc="/assets/images/lock_closed.png" alt="lock_closed" type="password" handleChange={setPassword1} />
        <Input placeholder="Confirm Password" imgsrc="/assets/images/lock_closed.png" alt="lock_closed" type="password" handleChange={setPassword2} />
        <p className={styles.smallpara}>(The password must be at least 8 characters including one uppercase, one lowercase, one number and a special character)</p>
        <Button text="Save" />
        {msg}
        {data && <h4>{data.setPassword.message}</h4>}
      </form>
    </div>
  )
}

export default SetPasswordForm