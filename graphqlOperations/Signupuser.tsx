import { gql } from '@apollo/client'

export const SIGNUP_USER = gql`

mutation Mutation($input: SignUpInput!) {
  signUp(input: $input) {
    id
    name
    organizationName
    email
    contactNumber
    message
  }
}
`
