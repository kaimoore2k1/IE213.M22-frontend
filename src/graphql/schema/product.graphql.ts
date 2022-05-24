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
