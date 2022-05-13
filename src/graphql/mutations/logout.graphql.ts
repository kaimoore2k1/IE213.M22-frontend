import { gql } from "@apollo/client";

export const LOGOUT = gql`
mutation logout($username: String!){
    logout(username: $username){
      status
      success
    }
}

`