import { gql } from "@apollo/client";

export const CONTACT = gql`
  mutation Contact($name: String, $mail: String, $content: String) {
    createContact(name: $name, mail: $mail, content: $content) {
      name
      mail
      content
    }
  }
`;

export const deleteContactById = gql`
  mutation deleteContactById($id: String) {
    deleteContactById(_id: $id) {
      name
    }
  }
`;

