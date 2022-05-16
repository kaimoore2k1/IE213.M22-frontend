import { gql } from "@apollo/client";

export const getAllBlogs = () => gql`
    query {
        getAllBlogs  {
            _id
            title
            like
            share
            date
            image{
                url
                title
            }
            comments{
                _id
            }
            description
            category
            author
            slug
      }
    }
`;
export const getHotBlogs = () => gql`
    query {
        getHotBlogs {
            _id
            title
            like
            share
            date
            image{
                url
                title
            }
            comments{
                _id
            }
            description
            category
            author
            slug
      }
    }
`;
export const getBlogBySlug = (slug: string) => gql`
    query {
        getBlogBySlug (slug:"${slug}") {
            _id
            title
            like
            share
            date
            image{
                url
                title
            }
            content
            description
            category
            author
            slug
        }
    }
`;