import { gql } from '@apollo/client'

export const USER_VERIFY = gql`
query UserVerification($verificationId: String!) {
    userVerification(verificationId: $verificationId) {
      id
      message
    }
  }
`;