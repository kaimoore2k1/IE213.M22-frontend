import { gql } from "@apollo/client";

export const getAccount = (username: string) => gql`

    query{
        getAccountByName(username: ${username}){
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

