import { RouterInterface } from "../../router/type";
import {lazy} from "react"
const Spa= lazy(() => import("../Service/Spa"));
const Hotel = lazy(() => import("../Service/Hotel"));
const Hospital = lazy(() => import("../Service/Hospital"));
const Esthetic = lazy(() => import("../Service/Esthetic"));
const Booking = lazy(() => import("../Service/Booking"));

const RouterService: RouterInterface[] = [
  {
    name: "CatTia",
    index: false,
    path: "cat-tia",
    children: [],
    public: true,
    element: () => <Esthetic />,
  },
  {
    name: "TrongGiu",
    index: false,
    path: "trong-giu",
    children: [],
    public: true,
    element: () => <Hotel />,
  },
  {
    name: "Spa",
    index: false,
    path: "spa",
    children: [],
    public: true,
    element: () => <Spa />,
  },
  {
    name: "BenhVien",
    index: false,
    children: [],
    path: "benh-vien-thu-y",
    public: true,
    element: () => <Hospital />,
  },
  {
    name: "DatHen",
    index: false,
    path: "dat-hen",
    children: [],
    public: true,
    element: () => <Booking />,
  },
];

export default RouterService