import { gql } from "@apollo/client";

export const getAllContact = gql`
  query {
    getAllContact {
      name
      mail
      content
    }
  }
`;
