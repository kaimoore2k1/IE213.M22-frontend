import { gql } from "@apollo/client";

export const UpdateProductByName = gql`
mutation updateProductByName($name: String!, $data: ProductInput){
    updateProductByName(name:$name, data:$data) {
    name
  }
}
`

export const DeleteProductByName = gql`
mutation deleteProductByName($name: String!){
  deleteProductByName(name:$name) {
    name
  }
}
`

export const AddProductToCart = gql `
mutation addProductToCart($username: String!, $_id: String){
  addProductToCart(username:$username, _id:$_id) {
    username
  }
}
`