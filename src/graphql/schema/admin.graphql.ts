import { gql } from "@apollo/client";

export const getAdminByName = gql`
    query getAdminByName($username: String!){
    getAdminByName(username: $username){
        status
        success
        username
    }
}
`