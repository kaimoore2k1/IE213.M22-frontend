// import DetailModule from "../../modules/Detail/Detail_Module";
import ProductDetail from "../../components/core/ProductDetail";
import "../../sass/DetailProduct/Detail.scss";
import { useParams } from "react-router-dom";
import Content404 from "../NotFound/Content404";
import { useQuery } from "@apollo/client";
import { getProductByName } from "../../graphql/schema/product.graphql";
import Loader from "../../components/core/Loader";



export default function Detail() {
  const slug: string = useParams().productName ?? "";
  console.log('slug :>> ', slug);
  
  const { loading, error, data } = useQuery(getProductByName(slug));



  if (error) return <Content404 />;
  return (
    <div className="detail">
      {loading ? (
        <Loader />
      ) : !!data.getProductByName ? (
        <>
          <ProductDetail product={data.getProductByName} />
        </>
      ) : (
        <Content404 />
      )}
    </div>
  );
}
