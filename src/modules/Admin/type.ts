export const userColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: '7%'
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
  },
];

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
    width: '7%'
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
  }
]


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


export const commentColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: '7%'
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
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
    title: "ID Product",
    dataIndex: "idProduct",
    key: "idProduct",
  },
  {
    title: "ID Blog",
    dataIndex: "idBlog",
    key: "idBlog",
  }
]