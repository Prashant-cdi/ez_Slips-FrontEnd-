import { gql } from '@apollo/client'

export const SIGNIN = gql`
mutation Login($input: LoginInput!) {
  login(input: $input) {
    id
    name
    organizationName
    email
    contactNumber
    token
    message
  }
}
`;