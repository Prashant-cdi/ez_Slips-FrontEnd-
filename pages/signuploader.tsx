import React,{FC} from 'react'
import { MainCommonFooter } from '../components/ContactForm'
import Header from '../components/Header'
import SignInForm from '../components/SignInForm'
import styles from "../styles/Signuploader.module.css"
import { Circles } from  'react-loader-spinner'


const Signuploader:FC = () => {
  return (
    <div>
        {/* <Header/> */}



        <Circles color="#00BFFF" height={80} width={80}/>
        {/* <MainCommonFooter/> */}
    </div>
  )
}

export default Signuploader