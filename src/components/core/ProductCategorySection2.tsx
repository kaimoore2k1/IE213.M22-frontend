import { useState } from "react";
import ProductCard from "./ProductCard";
import "../../sass/Blog/ProductCategorySection2.scss";
import { product } from "./type";
import { Row, Col, Pagination,Button } from "antd";

interface Props {
  productList: product[];
  sectionName: string;
  productsPerPage?: number
}

const ProductCategorySection2 = ({ productList, sectionName,productsPerPage }: Props) => {
  const [page, setPage] = useState<number>(0);
  const [productPerPage, setProductPerPage] = useState<number>(productsPerPage??8);
  function handlPageChange(page: number, pageSize: number) {
    setPage(page - 1);
  }

  return (
    <div className="product-category-section-2">
      <div className="section__top">
        <div className="section-name">{sectionName}</div>
        <div className="page">
          {/* <button
            type="button"
            className="prev-page-button page-button"
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
            Trang sau &gt;
          </button> */}
          <Pagination
            defaultCurrent={page + 1}
            total={productList.length}
            defaultPageSize={8}
            simple
            responsive
            itemRender={(page, type, originalElement) => (
              <Button
                className={`${type}-page-button page-button`}
              >
                 {(type=='next')&&'Trang sau'}
                 {(type=='prev')&&'Trang trước'}
              </Button>
            )}
            onChange={handlPageChange}
          />
        </div>
      </div>
      <div className="section__bottom">
        <Row gutter={[16,16]}>
          {productList
            .slice(page * productPerPage, (page + 1) * productPerPage)
            .map((item) => {
              return (
                <Col key={item._id} xl={6} lg={6} md={12} sm={12} xs={24}>
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
