import { gql } from "@apollo/client";

export const LOGIN_ADMIN = gql`
mutation LoginAdmin($username: String!, $password: String!){
    adminLogin(username: $username, password: $password){
      status
      success
      message
      data{
        username
        password
      }
      accessToken
    }
  }
  `