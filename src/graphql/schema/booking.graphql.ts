import { gql } from "@apollo/client";

export const getAllBooking = gql`
  query {
    getAllBooking {
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
