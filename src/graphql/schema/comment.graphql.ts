import { gql } from "@apollo/client";

export const getCommentsByProductID = (productID: string) => gql`
    query{
      getCommentsByProductID(productID: "${productID}"){
        _id
        content
        rating
        user
        date
        idProduct
        idBlog
    }
}`;
export const getCommentsByBlogID = (blogID: string) => gql`
query{
  getCommentsByBlogID(blogID: "${blogID}"){
      _id
        content
        rating
        user
        date
        idProduct
        idBlog
}
}
`
