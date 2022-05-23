import { gql } from "@apollo/client";

export const getAllProductsByCategory = (category: string) => gql`
    query {
      getAllProductsByCategory (categories:"${category}") {
        name
        price
        stock
        salePrice
        description
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
      }
    }
`;

export const getAllProduct = gql`
    query {
      getAllProducts {
        name
        price
        stock
        categories
        description
        salePrice
        variant {
          size
          color
        }
        content
        slugName
      }
  }
`