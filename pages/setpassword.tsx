import React,{FC} from 'react'
import { MainCommonFooter } from '../components/ContactForm'
import Header from '../components/Header'
import SetPasswordfooter from '../components/SetPasswordfooter'
import SetPasswordForm from '../components/SetPasswordForm'
import SignInForm from '../components/SignInForm'


const Setpassword:FC = () => {
  return (
<>
        <Header />
  
        <SetPasswordForm />
        
       <SetPasswordfooter />
</>
  
  )
}

export default Setpassword