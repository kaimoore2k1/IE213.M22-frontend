import { gql } from "@apollo/client";

export const UpdateProductByName = gql`
mutation updateProductByName($name: String!, $data: ProductInput){
    updateProductByName(name:$name, data:$data) {
    name
  }
}
`