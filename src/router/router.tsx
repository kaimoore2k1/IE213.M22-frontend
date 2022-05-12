import { RouterInterface } from "./type";
import Layout from "../components/Layout/Layout";
import NotFound from "../pages/NotFound/NotFound";
import RouterLayout from "../pages/module";
import AdminLayout from "../components/Layout/AdminLayout";
import AdminLoginForm from "../components/core/AdminLoginForm";
import RouterAdminLayout from "../modules/Admin/module";

const RouterView: RouterInterface[] = [
  {
    path: "/",
    public: true,
    name: "Layout",
    element: () => <Layout />,
    children: [...RouterLayout],
  },
  {
    path: "*",
    public: true,
    name: "NotFound",
    children: [],
    element: () => <NotFound />,
  },
  {
    name: "Admin",
    path: "admin",
    index: false,
    public: true,
    children: [],
    element: () => <AdminLoginForm />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    index: true,
    public: true,
    children: [...RouterAdminLayout],
    element: () => <AdminLayout />,
  }
];

export default RouterView;
