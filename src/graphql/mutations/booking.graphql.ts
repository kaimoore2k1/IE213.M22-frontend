import { gql } from "@apollo/client";

export const BOOKING = gql`
mutation Booking($name: String, $number: String, $pet: String, $service: String, $time: String, $dateTime: String, $content: String){
  createBooking(name: $name, number: $number, pet: $pet, service: $service, time: $time, dateTime: $dateTime, content: $content) {
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

export const deleteBookingById = gql `
  mutation deleteBookingById($id: String!) {
    deleteBookingById(_id: $id) {
      name
    }
  }
`