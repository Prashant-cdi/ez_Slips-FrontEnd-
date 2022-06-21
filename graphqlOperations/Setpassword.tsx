 import { gql } from '@apollo/client'
 export const SET_PASSWORD = gql` 

mutation SetPassword($setPasswordId: ID!, $password: String!) {
  setPassword(id: $setPasswordId, password: $password) {
    id
    token
    message
  }
}

`