import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
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
export const UPDATE_COMMENT = gql`
mutation updateComment($_id:String!, $content: String!,$rating: Float,$user:String!){ 
updateComment(_id:$_id,content:$content,user:$user,rating:$rating){
  _id
}
}
`
export const DELETE_COMMENT = gql`
mutation deleteComment($_id:String!){
deleteComment(_id:$_id){
  _id
}
}
`