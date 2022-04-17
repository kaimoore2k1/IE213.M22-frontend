import { RouterInterface } from "../router/type";
import Home from "./Home/Home";
import Store from "./Store/Store"

import Intro from "./Introduce/Intro";
import Blog from "./Blog/Blog";
import {RouterService} from "../modules/Service"

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
    path: "thucung",
    public: true,
    element: () => <Store />,
    children: [
      {
        name: "ChoCanh",
        index: false,
        path: "chocanh",
        children: [],
        public: true,
        element: () => <Store />,
      },
      {
        name: "MeoCanh",
        index: false,
        path: "meocanh",
        children: [],
        public: true,
        element: () => <Store />,
      },
      {
        name: "ThuKieng",
        index: false,
        path: "thukieng",
        children: [],
        public: true,
        element: () => <Store />,
      },
      {
        name: "Hamster",
        index: false,
        path: "hamster",
        children: [],
        public: true,
        element: () => <Store />,
      },
      {
        name: "ThuCungKhac",
        children: [],
        index: false,
        path: "thucungkhac",
        public: true,
        element: () => <Store />,
      },
    ],
  },
  {
    name: "ThucAnThuCung",
    index: false,
    path: "thucanthucung",
    public: true,
    element: () => <Store />,
    children: [
      {
        name: "ThucAnChoCho",
        children: [],
        index: false,
        path: "ta_cho",
        public: true,
        element: () => <Store />,
      },
      {
        name: "ThucAnChoMeo",
        children: [],
        index: false,
        path: "ta_meo",
        public: true,
        element: () => <Store />,
      },
      {
        name: "ThucAnKhac",
        index: false,
        path: "ta_khac",
        children: [],
        public: true,
        element: () => <Store />,
      },
    ],
  },
  {
    name: "VatDungThuCung",
    index: false,
    children: [],
    path: "vatdungthucung",
    public: true,
    element: () => <Store />,
  },
  {
    name: "PhuKienThuCung",
    index: false,
    path: "phukienthucung",
    children: [],
    public: true,
    element: () => <Store />,
  },
  {
    name: "DoChoiThuCung",
    index: false,
    path: "dochoithucung",
    children: [],
    public: true,
    element: () => <Store />,
  },
  {
    name: "DichVu",
    index: false,
    path: "dichvu",
    public: true,
    element: () => <Store />,
    children: [...RouterService],
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
];

export default RouterLayout;
