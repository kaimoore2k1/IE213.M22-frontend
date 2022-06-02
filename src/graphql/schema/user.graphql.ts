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
            productsBooked {
                ID_Product
            }
        }
    }
`

export const getUserByUsername = (username: string) => gql`
    query{
        getUserByUsername(username:"${username}"){
            username
            firstName
            lastName
            city
            country
            numberPhone
            email
            dateCreate
            address
        }
    }
`
export const getProductBooked = (username: string) => gql`
query {
  getProductBooked(username:"${username}"){
    ID_Product
    price
    images{
      url
      title
    }
    quantity
    name
  }
}
`

export const createUser = gql`
    mutation createOrUpdateUser($username: String!, $data: UserInput){
    createOrUpdateUser(username:$username, data: $data) {
        username
        email
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

export const UpdateProductCart = gql`
    mutation updateProductCart($username: String, $data: [BookedProductInput]) {
        updateProductCart(username: $username, data: $data) {
            username
        }
    }
`

export const ClearProductCart = gql`
    mutation clearProductCart($username: String!) {
        clearProductCart(username: $username) {
            username
        }
    }
`

export const updateUser = gql`
    mutation updateUser($username: String!, $data: UserInput){
        updateUser(username:$username, data: $data) {
            username
            email
        }
    }
`