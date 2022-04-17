import { RouterInterface } from "./type";
import Layout from "../components/Layout/Layout";
import NotFound from "../pages/NotFound";
import RouterLayout from "../pages/module"

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
];

export default RouterView;
