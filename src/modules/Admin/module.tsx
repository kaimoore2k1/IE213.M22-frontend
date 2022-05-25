import { RouterInterface } from "../../router/type";
import { AdminUser, AdminProduct, AdminBlog } from "../Admin";
import AdminBooking from "./AdminBooking";
import AdminContact from "./AdminContact";
import AdminComment from "./AdminComment";

const RouterAdminLayout: RouterInterface[] = [
  {
    name: "AdminUser",
    path: "users",
    index: true,
    public: true,
    children: [],
    element: () => <AdminUser />,
  },
  {
    name: "AdminProduct",
    path: "products",
    index: true,
    public: true,
    children: [],
    element: () => <AdminProduct />,
  },
  {
    name: "AdminBlog",
    path: "blogs",
    index: true,
    public: true,
    children: [],
    element: () => <AdminBlog />,
  },
  {
    name: "AdminBooking",
    path: "bookings",
    index: true,
    public: true,
    children: [],
    element: () => <AdminBooking />,
  },
  {
    name: "AdminContact",
    path: "contacts",
    index: true,
    public: true,
    children: [],
    element: () => <AdminContact />,
  },
  {
    name: "AdminComment",
    path: "comments",
    index: true,
    public: true,
    children: [],
    element: () => <AdminComment />,
  },
];

export default RouterAdminLayout;
