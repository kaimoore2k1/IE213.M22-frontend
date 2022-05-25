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
        comments{
          rating
        }
      }
    }
`;

export const getAllProduct = gql`
  query {
    getAllProducts {
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
      comments {
        rating
      }
    }
  }
`;

export const getAllProductBySearch = (value: string) => gql`
  query {
    getAllProductBySearch(valueSearch: "${value}") {
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
      comments {
        rating
      }
    }
  }
`;
