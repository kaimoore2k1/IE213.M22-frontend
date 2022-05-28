import { gql } from "@apollo/client";

export const BILL = gql`
mutation Bill($data: InputBill){
  createBill (data: $data) {
    numberPhone
  }
}
`;

export const deleteBillById = gql `
  mutation deleteBillById($id: String) {
    deleteBillById(_id: $id) {
      _id
    }
  }
`

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

export const getBillProducts = (id: string) => gql `
query {
  getBillProductById(_id:"${id}") {
    name
    price
    quantity
  }
}
`

export const GETALLBILLS = gql`
    query {
      getAllBills {
        _id
        firstName
        lastName
        address
        numberPhone
        total
        amount
        date
        paymentMethod
      }
    }`