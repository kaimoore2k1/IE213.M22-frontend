// import DetailModule from "../../modules/Detail/Detail_Module";
import ProductDetail from "../../components/core/ProductDetail";
import "../../sass/DetailProduct/Detail.scss";
import { useParams } from "react-router-dom";
import toSlug from "../../assets/toSlug";
const exampleData = [
  {
    name: "example product",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    price: 20000,
    rating: 4,
    salePrice: 10000,
    productVariant: {
      size: ["Lớn", "Nhỏ"],
      color: ["Đen", "Đỏ"],
    },
    image: [
      { url: "https://via.placeholder.com/150/24f355" },
      { url: "https://via.placeholder.com/150/24f355" },
      { url: "https://via.placeholder.com/150/24f355" },
      { url: "https://via.placeholder.com/150/24f355" },
    ],
    category: ["Chó", "lợn"],
    content: "lorem ipsum dolor sit amet, consectetur adip",
    id: 1,
    stock: 2,
    comment: [
      {
        id: 1,
        content: "lorem ipsum dolor sit amet",
        rating: 3,
        author: {
          id: 1,
          name: "holi duch",
          avatar: { url: "https://via.placeholder.com/150/24f355" },
        },
      },
    ],
  },
];
export default function Detail() {
  const slug = useParams().slug ?? false;
  const data = exampleData.find(({ name }) => toSlug(name) == slug);

  return (
    <div className="detail">
      {data ? (
        <>
          <ProductDetail product={data} />
          <div className="related_products"></div>
        </>
      ) : (
        <h1>Sản phẩm này không tồn tại</h1>
      )}
    </div>
  );
}
