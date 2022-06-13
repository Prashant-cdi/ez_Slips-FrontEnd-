import React,{FC} from 'react'
import { MainCommonFooter } from '../components/ContactForm'
import Header from '../components/Header'
import SignInForm from '../components/SignInForm'

const signin:FC = () => {
  return (
    <div>
        <Header/>
        <SignInForm/>
        <MainCommonFooter/>
    </div>
  )
}

export default signin