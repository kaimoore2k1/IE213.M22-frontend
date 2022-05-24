import { gql } from "@apollo/client";

export const CHANGE_PASSWORD = gql`
    mutation ChangePassword($username: String!, $password: String!, $newPassword: String!){
  changePassword(
    username: $username, 
    password: $password, 
    newPassword: $newPassword){
      status
      success
      message
      data{
        username
      }
  	}

}
`