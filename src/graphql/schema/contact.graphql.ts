import { gql } from "@apollo/client";

export const getAllContact = gql`
  query {
    getAllContact {
      _id
      name
      mail
      content
    }
  }
`;
