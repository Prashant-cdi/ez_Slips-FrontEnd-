import React from 'react'
import { MainCommonFooter } from '../components/ContactForm'
import Header from '../components/Header'

import SignUpForm from '../components/SignUpForm'

const signup = () => {
  return (
    <div>
        <Header />
        <SignUpForm />
        <MainCommonFooter/>
    </div>
  )
}

export default signup