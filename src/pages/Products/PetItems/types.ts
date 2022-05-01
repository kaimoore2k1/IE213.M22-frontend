import { gql } from "@apollo/client";

export const getAllProductsByCategory = gql`
  query {
    getAllProductsByCategory(category: "vatdungthucung") {
      name
      price
      image{
        url
        title
      }
      evaluate
      description
    }
  }
`;