import { gql } from "@apollo/client";

export const BILL = gql`
mutation Bill($data: InputBill){
  createBill (data: $data) {
    numberPhone
  }
}
`;

export const LASTEDBILL = gql`
    query {
        getTheLastedBill {
        numberPhone
        date
        total
        paymentMethod
        _id
        }
    }
`