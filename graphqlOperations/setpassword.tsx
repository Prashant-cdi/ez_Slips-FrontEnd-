 import { gql } from '@apollo/client'
 export const SET_PASSWORD = gql` 

mutation SetPassword($input: SetPasswordInput!) {
  setPassword(input: $input) {
    id
    name
    organizationName
    email
    contactNumber
    token
    message
  }
}

`