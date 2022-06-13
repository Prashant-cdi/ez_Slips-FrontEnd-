import React from 'react'
import styles from '../styles/SetPasswordForm.module.css';
import { Button, Heading, Input } from './SignInForm'
import SignInForm from './SignInForm';
const SetPasswordForm = () => {
  return (
    <div className={styles.setpassword}>
        <h1 >Set Password</h1>
        <hr />
        <p>Email Verified Sucessfully Please Set a password</p>
        <Input placeholder="Enter Password" imgsrc="/assets/images/lock_closed.png" alt="lock_closed" type="password"/>
        <Input placeholder="Confirm Password" imgsrc="/assets/images/lock_closed.png" alt="lock_closed" type="password"/>
        <p className={styles.smallpara}>(The password must be at least 8 characters including one uppercase, one lowercase, one number and a special character)</p>
        <Button text="Save" />
    </div>
  )
}

export default SetPasswordForm