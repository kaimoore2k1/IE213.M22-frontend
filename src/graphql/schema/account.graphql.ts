import { gql } from "@apollo/client";

export const getAccountByName = (username: string) => gql`

    query{
        getAccountByName(username: "${username}"){
            username
            password
        }
    }
`

export const updateAccountInfo = gql`
    mutation updateAccountInfo($username: String!, $data: AccountInput){
        updateAccountInfo(username: $username, data: $data){
            username
        }
    }
`
export const deleteAccount = gql`
    mutation deleteAccount($username: String!){
        deleteAccount(username: $username){
            username
        }
    }
`

export const deleteAccountFromFrontend = gql`
    mutation deleteAccountFromFrontend($username: String!, $password: String!){
        deleteAccountFromFrontend(username: $username, password: $password){
            username
        }
    }
`
