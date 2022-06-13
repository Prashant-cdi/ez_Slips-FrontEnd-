import React,{FC} from 'react'
import { MainCommonFooter } from '../components/ContactForm'
import Header from '../components/Header'
import SetPasswordForm from '../components/SetPasswordForm'
import SignInForm from '../components/SignInForm'


const Setpassword:FC = () => {
  return (
    <div>
        <Header />
        <SetPasswordForm />
        <MainCommonFooter />
    </div>
  )
}

export default Setpassword