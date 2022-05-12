export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateCreate: string;
  productsBooked: [string];
}
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

export const userData: UserData[] = [
  {
    id: 1,
    firstName: "Kai",
    lastName: "Moore",
    email: "haohao12012001@gmail.com",
    dateCreate: "05/05/2022",
    productsBooked: ["Chó Husky, Thức ăn cho chó"],
  },
  {
    id: 2,
    firstName: "Nguyễn",
    lastName: "Định",
    email: "senshopdottech@gmail.com",
    dateCreate: "05/05/2022",
    productsBooked: ["Chó Husky, Thức ăn cho chó"],
  },
  {
    id: 3,
    firstName: "Trần",
    lastName: "Đăng",
    email: "senshopdottech@gmail.com",
    dateCreate: "05/05/2022",
    productsBooked: ["Chó Husky, Thức ăn cho chó"],
  },
  {
    id: 4,
    firstName: "Phạm",
    lastName: "Chiến",
    email: "senshopdottech@gmail.com",
    dateCreate: "05/05/2022",
    productsBooked: ["Chó Husky, Thức ăn cho chó"],
  }
];