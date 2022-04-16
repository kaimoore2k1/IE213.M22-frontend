import Blog from "../pages/Blog";
import Homepage from "../pages/Homepage";
import Intro from "../pages/Intro";
import NotFound from "../pages/NotFound";
import Pet from "../pages/Pet";
import Service from "../pages/Service";
import Shop from "../pages/Shop";
import {RouterInterface} from "./type"
import Layout from "../components/Layout/Layout";

const RouterView: RouterInterface[] = [
  {
    path: "/",
    public: true,
    name: "Layout",
    element: () => <Layout />,
    children: [
      {
        name: "Homepage",
        path: "",
        index: true,
        public: true,
        children: [],
        element: () => <Homepage />,
      },
      {
        name: "ThuCung",
        index: false,
        path: "thucung",
        public: true,
        element: () => <Pet />,
        children: [
          {
            name: "ChoCanh",
            index: false,
            path: "chocanh",
            children: [],
            public: true,
            element: () => <Pet />,
          },
          {
            name: "MeoCanh",
            index: false,
            path: "meocanh",
            children: [],
            public: true,
            element: () => <Pet />,
          },
          {
            name: "ThuKieng",
            index: false,
            path: "thukieng",
            children: [],
            public: true,
            element: () => <Pet />,
          },
          {
            name: "Hamster",
            index: false,
            path: "hamster",
            children: [],
            public: true,
            element: () => <Pet />,
          },
          {
            name: "ThuCungKhac",
            children: [],
            index: false,
            path: "thucungkhac",
            public: true,
            element: () => <Pet />,
          },
        ],
      },
      {
        name: "ThucAnThuCung",
        index: false,
        path: "thucanthucung",
        public: true,
        element: () => <Shop />,
        children: [
          {
            name: "ThucAnChoCho",
            children: [],
            index: false,
            path: "ta_cho",
            public: true,
            element: () => <Shop />,
          },
          {
            name: "ThucAnChoMeo",
            children: [],
            index: false,
            path: "ta_meo",
            public: true,
            element: () => <Shop />,
          },
          {
            name: "ThucAnKhac",
            index: false,
            path: "ta_khac",
            children: [],
            public: true,
            element: () => <Shop />,
          },
        ],
      },
      {
        name: "VatDungThuCung",
        index: false,
        children: [],
        path: "vatdungthucung",
        public: true,
        element: () => <Shop />,
      },
      {
        name: "PhuKienThuCung",
        index: false,
        path: "phukienthucung",
        children: [],
        public: true,
        element: () => <Shop />,
      },
      {
        name: "DoChoiThuCung",
        index: false,
        path: "dochoithucung",
        children: [],
        public: true,
        element: () => <Shop />,
      },
      {
        name: "DichVu",
        index: false,
        path: "dichvu",
        public: true,
        element: () => <Service />,
        children: [
          {
            name: "CatTia",
            index: false,
            path: "cattia",
            children: [],
            public: true,
            element: () => <Service />,
          },
          {
            name: "TrongGiu",
            index: false,
            path: "tronggiu",
            children: [],
            public: true,
            element: () => <Shop />,
          },
          {
            name: "Spa",
            index: false,
            path: "spa",
            children: [],
            public: true,
            element: () => <Shop />,
          },
          {
            name: "BenhVien",
            index: false,
            children: [],
            path: "benhvienthuy",
            public: true,
            element: () => <Shop />,
          },
          {
            name: "SanPhamThuY",
            children: [],
            index: false,
            path: "sanphamthuy",
            public: true,
            element: () => <Shop />,
          },
          {
            name: "ChiaSe",
            children: [],
            index: false,
            path: "chiase",
            public: true,
            element: () => <Shop />,
          },
          {
            name: "DatHen",
            index: false,
            path: "dathen",
            children: [],
            public: true,
            element: () => <Shop />,
          },
        ],
      },
      {
        name: "TapChi",
        index: false,
        path: "tapchi",
        children: [],
        public: true,
        element: () => <Blog />,
      },
      {
        name: "GioiThieu",
        index: false,
        path: "gioithieu",
        children: [],
        public: true,
        element: () => <Intro />,
      },
    ],
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
