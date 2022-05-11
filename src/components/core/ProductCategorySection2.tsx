import { useState } from "react";
import ProductCard from "./ProductCard";
import "../../sass/Blog/ProductCategorySection2.scss";
import { product } from "./type";
import { Row, Col } from "antd";

interface Props{
    productList: product[];
    sectionName: string;
}

const ProductCategorySection2 = ({
  productList,
  sectionName,
}: Props) => {
  const [page, setPage] = useState<number>(0);
  const [productPerPage, setProductPerPage] = useState<number>(8);


  return (
    <div className="product-category-section-2">
      <div className="section__top">
        <div className="section-name">{sectionName}</div>
        <div className="page">
          <button
            type="button"
            className="pre-page-button page-button"
            onClick={() => setPage((page) => (page - 1 < 0 ? 0 : page - 1))}
          >
            {" "}
            &lt; Trang trước{" "}
          </button>
          <div>
            <input
              className="page-number"
              min="1"
              max={`${productList.length / productPerPage}`}
              type="number"
              defaultValue={1}
              value={page + 1}
            />
            <span>/ {Math.ceil(productList.length / productPerPage)}</span>
          </div>
          <button
            type="button"
            className="next-page-button page-button"
            onClick={() =>
              setPage((page) =>
                page + 1 > Math.floor(productList.length / productPerPage)
                  ? Math.floor(productList.length / productPerPage)
                  : page + 1
              )
            }
          >
            {" "}
            Trang sau &gt;
          </button>
        </div>
      </div>
      <div className="section__bottom">
        <Row gutter={16}>
          {productList
            .slice(page * productPerPage, (page + 1) * productPerPage)
            .map((item) => {
              return (
                <Col key={item._id} xl={6} lg={6} md={6} sm={12} xs={24}>
                  <ProductCard product={item} />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default ProductCategorySection2;
