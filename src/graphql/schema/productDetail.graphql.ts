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