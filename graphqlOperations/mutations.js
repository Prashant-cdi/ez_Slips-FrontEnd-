import { gql } from '@apollo/client'
export const SIGNUP_USER = gql`

mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      successMessage
    }
  }
`

export const SET_PASSWORD = gql` 

mutation SetPassword($setPasswordId: ID!, $password: String!) {
  setPassword(id: $setPasswordId, password: $password) {
    id
    token
    message
  }
}

`