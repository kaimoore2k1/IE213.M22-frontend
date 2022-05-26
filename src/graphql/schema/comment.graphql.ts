import { gql } from "@apollo/client";
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

export const getAllComments = gql`
  query{
    getAllComments{
        _id
        content
        rating
        user
        date
        idProduct
        idBlog
    }
  }
`;


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
}`;


export const updateComment = gql`
  mutation updateComment($_id:String!, $content: String!,$rating: Float,$user:String!){ 
  updateComment(_id:$_id,content:$content,user:$user,rating:$rating){
    _id
  }
}
`
export const deleteComment = gql`
  mutation deleteComment($_id:String!){
  deleteComment(_id:$_id){
    _id
  }
}
`
