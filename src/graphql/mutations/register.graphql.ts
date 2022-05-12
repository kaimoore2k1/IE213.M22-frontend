import { gql } from "@apollo/client";

export const REGISTER = gql`
mutation Register($username: String!, $password: String!, $email: String!){
  register(username: $username, password: $password, email: $email){
    data{
      username
      password
    }
    status
    success
    message
  }
}
`;

