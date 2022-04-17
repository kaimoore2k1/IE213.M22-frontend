import { RouterInterface } from "../../router/type";
import { Spa, Hospital, Esthetic, Booking, Hotel } from "../Service";

const RouterService: RouterInterface[] = [
  {
    name: "CatTia",
    index: false,
    path: "cattia",
    children: [],
    public: true,
    element: () => <Esthetic />,
  },
  {
    name: "TrongGiu",
    index: false,
    path: "tronggiu",
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
    path: "benhvienthuy",
    public: true,
    element: () => <Hospital />,
  },
  {
    name: "SanPhamThuY",
    children: [],
    index: false,
    path: "sanphamthuy",
    public: true,
    element: () => <Hospital />,
  },
  {
    name: "ChiaSe",
    children: [],
    index: false,
    path: "chiase",
    public: true,
    element: () => <Booking />,
  },
  {
    name: "DatHen",
    index: false,
    path: "dathen",
    children: [],
    public: true,
    element: () => <Booking />,
  },
];

export default RouterService