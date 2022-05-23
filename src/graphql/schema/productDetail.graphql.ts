import { gql } from "@apollo/client";

export const getProductByName = (slug: string) => gql`
  
  query {
    getProductByName (slugName:"${slug}") {
      name
      price
      stock
      salePrice
      description
      content
      rating
      variant {
        size
        color
      }
      images {
        url
        title
      }
      comments {
        _id
        rating
        }
      categories
      _id
    }
  }
`;

export const createComment = gql`
    mutation createComment($idProduct: String, $idBlog: String, $content: String!,$rating: Float,$user:String!){ 
    createComment(user: $user,
      idProduct: $idProduct,
      idBlog: $idBlog,
      content: $content,
      rating: $rating){
      _id
      idBlog
      idProduct
      content
      rating
    }
}`;
export const getComments = (productID: string) => gql`
    query{
      getCommentsByProductID(productID: "${productID}"){
        
      _id
      content
      rating
      user
      date
    }
}`;