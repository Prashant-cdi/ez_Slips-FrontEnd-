import { gql } from '@apollo/client'
export const FORGOT_PASSWORD = gql` 
mutation ForgetPassword($email: String!) {
    forgetPassword(email: $email) {
      id
      email
      message
    }
  }
`