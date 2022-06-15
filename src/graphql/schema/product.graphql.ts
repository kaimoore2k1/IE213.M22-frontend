import { gql } from "@apollo/client";

export const getAllProductsByCategory = (category: string) => gql`
    query {
      getAllProductsByCategory (categories:"${category}") {
        _id
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
      _id
      name
      price
      stock
      salePrice
      description
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

export const getRelatedProducts = (_id: string, category: string) => gql`
  query {
    getRelatedProducts (_id:"${_id}" , categories:"${category}") {
      _id
        name
        price
        stock
        salePrice
        description
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

`

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
