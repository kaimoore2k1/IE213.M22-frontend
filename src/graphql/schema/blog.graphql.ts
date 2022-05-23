import { gql } from "@apollo/client";

export const getAllBlogs = gql `
    query {
        getAllBlogs {
            title
            date
            author
            category
            description
            content
        }
    }
`