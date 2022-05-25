import { RouterInterface } from "../../router/type";
import { AdminUser, AdminProduct, AdminBlog } from "../Admin";
import AdminBooking from "./AdminBooking";
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
    name: "AdminComment",
    path: "comments",
    index: true,
    public: true,
    children: [],
    element: () => <AdminComment />,
  },
];

export default RouterAdminLayout;
