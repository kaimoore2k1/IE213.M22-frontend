import { RouterInterface } from "../router/type";
import { lazy } from "react";
import { RouterService } from "../modules/Service";
import Search from "../modules/Search/Search";
import SearchValue from "../modules/Search/SearchValue";
const Home = lazy(() => import("./Home/Home"));
const Store = lazy(() => import("./Store/Store"));
const Detail = lazy(() => import("../pages/DetailProduct/Detail"));
const Service = lazy(() => import("./Service/Service"));
const Intro = lazy(() => import("./Introduce/Intro"));
const Blog = lazy(() => import("./Blog/Blog"));
const ServiceLayout = lazy(() => import("../pages/Service/ServiceLayout"));
const Pay = lazy(() => import("./Payment/Pay"));
const BlogDetail = lazy(() => import("./BlogDetail/BlogDetail"));
const LoginRegister = lazy(
  () => import("../modules/Login-Logout/LoginRegister")
);
const Profile = lazy(() => import("../pages/Profile/Profile"));

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
    element: () => <LoginRegister />,
  },
  {
    name: "SanPham",
    path: "/:productName",
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
  {
    name: "Profile",
    path: "/profile",
    index: false,
    public: true,
    children: [],
    element: () => <Profile />,
  },
  {
    name: "Search",
    path: "/search",
    index: false,
    public: true,
    children: [],
    element: () => <Search />,
  },
  {
    name: "Search",
    path: "/search/:valueSearch",
    index: false,
    public: true,
    children: [],
    element: () => <SearchValue />,
  },
];

export default RouterLayout;
