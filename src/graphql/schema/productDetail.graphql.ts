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

