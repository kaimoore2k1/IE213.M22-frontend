import { ReactChild, ReactFragment, ReactPortal } from "react";

export const userColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: "7%",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Date Create",
    dataIndex: "dateCreate",
    key: "dateCreate",
  },
  {
    title: "Carts",
    dataIndex: "productsBooked",
    key: "productsBooked",
    render: (text: any) => <p>{text[0]?text.map((txt:any) => {
      return txt.ID_Product + ', '
    }):"Cart Empty"}</p>,
  },
];

export const billColumn = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: "7%",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Phone Number",
    dataIndex: "numberPhone",
    key: "numberPhone",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Payment Method",
    dataIndex: "paymentMethod",
    key: "paymentMethod",
    filters: [
      {
        text: 'Transfer',
        value: 'transfer',
      },
      {
        text: 'Direct',
        value: 'direct',
      },
    ],
    onFilter: (value: string | number | boolean, record: any) => record.paymentMethod.indexOf(value) === 0
  }
]

export const productBillColumn = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: "7%",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Total",
    dataIndex: "totalProduct",
    key: "totalProduct",
    render: (title: any, record: any) => (
      <span>
        {record.price * record.quantity}
      </span>
    ),
  }
]

export interface BlogData {
  id: number;
  title: string;
  date: string;
  author: string;
  categories: string;
  description: string;
}

export const blogColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: "7%",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "Categories",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

export const productColumn: any = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: "7%",
  },
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a: { price: number }, b: { price: number }) => a.price - b.price,
    key: "price",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    sorter: (a: { stock: number }, b: { stock: number }) => a.stock - b.stock,
    key: "stock",
  },
  {
    title: "Categories",
    dataIndex: "categories",
    key: "categories",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

export const bookingColumn: any = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: "7%",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Pet",
    dataIndex: "pet",
    key: "pet",
  },
  {
    title: "Service",
    dataIndex: "service",
    key: "service",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "DateTime",
    dataIndex: "dateTime",
    key: "dateTime",
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
  },
];

export const contactColumn = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: "7%",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "mail",
    key: "mail",
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
  },
];
export const commentColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: "7%",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
  }
];
