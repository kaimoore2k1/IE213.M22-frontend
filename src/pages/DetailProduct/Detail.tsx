// import DetailModule from "../../modules/Detail/Detail_Module";
import ProductDetail from "../../components/core/ProductDetail";
import "../../sass/DetailProduct/Detail.scss";
import { useParams } from "react-router-dom";
import Content404 from "../NotFound/Content404";
import toSlug from "../../assets/toSlug";
import { product } from "./../../components/core/type";
import { useQuery } from "@apollo/client";
import { getProductByName } from "../../graphql/schema/productDetail.graphql";
import Loader from "../../components/core/Loader";

const exampleComment = [
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
];

export default function Detail() {
  const slug: string = useParams().productName ?? "";

  const { loading, error, data } = useQuery(getProductByName(slug));
  console.log(loading);
  console.log(error);
  console.log(data);

  if (error) return <Content404 />;
  return (
    <div className="detail">
      {loading ? (
        <Loader />
      ) : !!data.getProductByName ? (
        <>
          <ProductDetail comments={[]} product={data.getProductByName} />
        </>
      ) : (
        <Content404 />
      )}
    </div>
  );
}
