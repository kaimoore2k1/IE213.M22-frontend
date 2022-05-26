import { gql } from "@apollo/client";

export const getAllUsers = gql`
    query {
        getAllUsers {
            username
            firstName
            lastName
            city
            country
            numberPhone
            email
            dateCreate
            productsBooked
        }
    }
`

export const getUserByUsername = (username: string | null) => gql`
    query{
        getUserByUsernamed(username: ${username}){
            username
            firstName
            lastName
            city
            country
            numberPhone
            email
            dateCreate
            productsBooked
            
        }
    }
`

export const createUser = gql`
    mutation createOrUpdateUser($username: String!, $data: UserInput){
    createOrUpdateUser(username:$username, data: $data) {
        username
    }
}
`