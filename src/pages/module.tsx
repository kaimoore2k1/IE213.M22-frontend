import { RouterInterface } from "../router/type";
import Home from "./Home/Home";
import Store from "./Store/Store";
import Detail from "../pages/DetailProduct/Detail";
import Service from "./Service/Service";
import Intro from "./Introduce/Intro";
import Blog from "./Blog/Blog";
import { RouterService } from "../modules/Service";
import ServiceLayout from '../pages/Service/ServiceLayout'
import Pay from "./Payment/Pay";
import BlogDetail from "./BlogDetail/BlogDetail";

import LoginLogout from "../modules/Login-Logout/LoginLogout";

const RouterLayout: RouterInterface[] = [
  {
    name: "Homepage",
    path: "",
    index: true,
    public: true,
    children: [],
    element: () => <Home />,
  },
  {
    name: "ThuCung",
    index: false,
    path: "thu-cung",
    public: true,
    element: () => <Store />,
    children: [
      {
        name: "Thucung",
        index: false,
        path: "",
        children: [],
        public: true,
        element: () => <Detail />,
      },
      {
        name: "ChoCanh",
        index: false,
        path: "cho-canh",
        children: [],
        public: true,
        element: () => <Detail />,
      },
      {
        name: "MeoCanh",
        index: false,
        path: "meo-canh",
        children: [],
        public: true,
        element: () => <Detail />,
      },
      {
        name: "ThuKieng",
        index: false,
        path: "thu-kieng",
        children: [],
        public: true,
        element: () => <Detail />,
      },
      {
        name: "Hamster",
        index: false,
        path: "hamster",
        children: [],
        public: true,
        element: () => <Detail />,
      },
      {
        name: "ThuCungKhac",
        children: [],
        index: false,
        path: "thu-cung-khac",
        public: true,
        element: () => <Detail />,
      },
    ],
  },
  {
    name: "ThucAnThuCung",
    index: false,
    path: "thuc-an-thu-cung",
    public: true,
    element: () => <Store />,
    children: [
      {
        name: "ThucAnThuCung",
        children: [],
        index: false,
        path: "",
        public: true,
        element: () => <Detail />,
      },
      {
        name: "ThucAnChoCho",
        children: [],
        index: false,
        path: "ta-cho",
        public: true,
        element: () => <Detail />,
      },
      {
        name: "ThucAnChoMeo",
        children: [],
        index: false,
        path: "ta-meo",
        public: true,
        element: () => <Detail />,
      },
      {
        name: "ThucAnKhac",
        index: false,
        path: "ta-khac",
        children: [],
        public: true,
        element: () => <Detail />,
      },
    ],
  },
  {
    name: "VatDungThuCung",
    index: false,
    children: [],
    path: "vat-dung-thu-cung",
    public: true,
    element: () => <Store />,
  },
  {
    name: "PhuKienThuCung",
    index: false,
    path: "phu-kien-thu-cung",
    children: [],
    public: true,
    element: () => <Store />,
  },
  {
    name: "DoChoiThuCung",
    index: false,
    path: "do-choi-thu-cung",
    children: [],
    public: true,
    element: () => <Store />,
  },
  {
    name: "SanPhamThuY",
    index: false,
    path: "san-pham-thu-y",
    children: [],
    public: true,
    element: () => <Store />,
  },
  {
    name: "DichVu",
    index: false,
    path: "dich-vu",
    public: true,
    element: () => <ServiceLayout />,
    children: [
      {
        name: "Dichvu",
        index: false,
        path: "",
        children: [],
        public: true,
        element: () => <Service />,
      },
    ],
  },
  {
    name: "DichVu",
    index: false,
    path: "dich-vu",
    public: true,
    element: () => <ServiceLayout />,
    children: [...RouterService],
  },
  {
    name: "TapChi",
    index: false,
    path: "tap-chi",
    children: [],
    public: true,
    element: () => <Blog />,
  },
  {
    name: "GioiThieu",
    index: false,
    path: "gioi-thieu",
    children: [],
    public: true,
    element: () => <Intro />,
  },
  {
    name: "GioHang",
    path: "gio-hang",
    index: false,
    public: true,
    children: [],
    element: () => <Pay />,
  },
  {
    name: "login",
    path: "login",
    index: false,
    public: true,
    children: [],
    element: () => <LoginLogout />,
  },
  {
    name: "SanPham",
    path: "/:slug",
    index: false,
    public: true,
    children: [],
    element: () => <Detail />,
  },
  {
    name: "TapChi",
    index: false,
    path: "tap-chi/:blogName",
    children: [],
    public: true,
    element: () => <BlogDetail />,
  },

];

export default RouterLayout;

