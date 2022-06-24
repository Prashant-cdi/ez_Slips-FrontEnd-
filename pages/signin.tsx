import React,{FC} from 'react'
import { MainCommonFooter } from '../components/ContactForm'
import Header from '../components/Header'
import SetPasswordfooter from '../components/SetPasswordfooter'
import SignInForm from '../components/SignInForm'

const signin:FC = () => {


// console.log("----------> i am herre----------->");
// console.log("----------> i am herre----------->");
// console.log(document.cookie);
// console.log("----------> i am herre----------->");
// console.log("----------> i am herre----------->");
  // console.log(document.cookie);
  return (
    <div>
        <Header/>
        <SignInForm/>
        <SetPasswordfooter />
    </div>
  )
}

export default signin