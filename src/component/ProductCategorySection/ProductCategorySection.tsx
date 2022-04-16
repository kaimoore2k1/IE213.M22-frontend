import { useState, useEffect } from "react";
import ProductCategoryButtons from "./ProductCategoryButtons";
import ProductCard, { product } from "../ProductCard/ProductCard";
import "./ProductCategorySection.scss";
import { Row, Col, Button } from "antd";

export interface productCategorySectionProps {
  productList: product[];
  categoryList: string[];
  sectionName: string;
}
const ProductCategorySection = ({
  productList,
  categoryList,
  sectionName,
}: productCategorySectionProps) => {
  const [page, setPage] = useState<number>(0);
  const [productPerPage, setProductPerPage] = useState<number>(4);
  const [currentCategory, setCurrentCategory] = useState<number>(0);

  const updateCategory = (index: number) => {
    setCurrentCategory(index);
  };
  useEffect(() => {}, [page]);
  return (
    <div className="product-category-section">
      <div className="section__top">
        <div className="section-name">{sectionName}</div>
        <div className="page">
          <button
            type="button"
            className="pre-page-button page-button"
            onClick={() => setPage(page - 1 < 0 ? 0 : page - 1)}
          >
            {" "}
            &lt; Trang trước{" "}
          </button>
          <div>
            <span className="page-number">{page +1}/{Math.ceil(productList.length / productPerPage)}</span>
          </div>
          <button
            type="button"
            className="next-page-button page-button"
            onClick={() =>
              setPage(
                page + 1 >= Math.ceil(productList.length / productPerPage)
                  ? Math.ceil(productList.length / productPerPage) - 1
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
          <Col span={4}>
            <ProductCategoryButtons
              currentCategory={currentCategory}
              updateCategory={updateCategory}
              CategoryList={categoryList}
            />
          </Col>

          {productList
            .filter((product) =>
              product.category.some(
                (category) => category === categoryList[currentCategory]
              )
            )
            .slice(page * productPerPage, (page + 1) * productPerPage)
            .map((item) => {
              return (
                <Col key={item.id} span={5}>
                  <ProductCard product={item} />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default ProductCategorySection;
