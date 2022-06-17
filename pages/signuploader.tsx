import React,{FC} from 'react'
import { MainCommonFooter } from '../components/ContactForm'
import Header from '../components/Header'
import SignInForm from '../components/SignInForm'
import styles from "../styles/Signuploader.module.css"

const Signuploader:FC = () => {
  return (
    <div>
        <Header/>
            <div className={styles.signuploader}>
                <h1>Loading....</h1>
            </div>
        <MainCommonFooter/>
    </div>
  )
}

export default Signuploader