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
export const createUser = gql`
    mutation createOrUpdateUser($username: String!, $data: UserInput){
    createOrUpdateUser(username:$username, data: $data) {
        username
    }
}
`

export const deleteUser = gql`
    mutation deleteUser($username: String!){
    deleteUser(username:$username) {
        username
    }
}
`