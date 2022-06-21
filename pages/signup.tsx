import React from 'react'
import { MainCommonFooter } from '../components/ContactForm'
import Header from '../components/Header'
import SignupFooter from "../components/SignupFooter"

import SignUpForm from '../components/SignUpForm'

const signup = () => {
  return (
    <div>
        <Header />
        <SignUpForm />
        <SignupFooter />
    </div>
  )
}

export default signup