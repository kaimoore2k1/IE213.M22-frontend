import { gql } from "@apollo/client";

export const getAllProductsByCategory = (category: string[]) => gql`
    query {
      getAllProductsByCategory (categories:[${category.map(cate => "\"" + cate + "\"")}]) {
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