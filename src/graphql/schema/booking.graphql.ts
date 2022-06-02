import { gql } from "@apollo/client";

export const getAllBooking = gql`
  query {
    getAllBooking {
      _id
      name
      number
      pet
      service
      time
      dateTime
      content
    }
  }
`;
