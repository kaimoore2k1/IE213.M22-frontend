import { gql } from "@apollo/client";

export const getAllProductsByCategory = (category: [string]) => gql`
  query {
    getAllProductsByCategory (categories:"${category}") {
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
    }
  }
`;