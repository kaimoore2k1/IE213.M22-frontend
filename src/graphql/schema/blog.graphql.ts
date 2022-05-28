import { gql } from "@apollo/client";

export const getAllBlogsAdmin =  gql`
    query {
        getAllBlogs  {
            _id
            title
            like
            share
            date
            image{
                url
            }
            comments{
                _id
            }
            description
            category
            author
            slug
            content
      }
    }
`;
export const getAllBlogsClient =  gql`
    query {
        getAllBlogs  {
            _id
            title
            like
            share
            date
            image{
                url
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
            image{
                url
            }
            date
            content
            description
            category
            author
            slug
        }
    }
`;
