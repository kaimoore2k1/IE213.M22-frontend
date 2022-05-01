import { gql } from "@apollo/client";

export const getAllProductsByCategory = (a:string) => gql`
  query {
    getAllProductsByCategory(category: "${a}") {
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