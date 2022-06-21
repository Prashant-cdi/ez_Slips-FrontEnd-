import { gql } from '@apollo/client'

export const SIGNUP_USER = gql`

mutation Mutation($input: SignUpInput!) {
  signUp(input: $input) {
    name
    organizationName
    email
    contactNumber
    message
  }
}
`
