import { useState, useEffect } from "react";
import ProductCategoryButtons from "./ProductCategoryButtons";
import ProductCard from "./ProductCard";
import "../../sass/Blog/ProductCategorySection.scss";
import { productCategorySectionProps } from "./type";
import { Row, Col } from "antd";
import { categoryTranslate } from "../../assets/categoryTranslate";
const ProductCategorySection = ({
  productList,
  categoryList,
  sectionName,
}: productCategorySectionProps) => {
  const categoryDBName = categoryList.map(
    (category) => categoryTranslate(category)?.dbName ?? ""
  );

  const [page, setPage] = useState<number>(0);
  const [products, setProducts] = useState(productList);
  const [productPerPage, setProductPerPage] = useState<number>(4);
  const [currentCategory, setCurrentCategory] = useState<any>(null);

  useEffect(() => {

    setProducts(
      productList.filter((item) =>
        currentCategory == null
          ? true
          : item.categories.includes(categoryDBName[currentCategory])
      )
    );
  }, [productPerPage, currentCategory, page]);

  useEffect(() => {
    setPage(0);
  }, [currentCategory]);

  const updateCategory = (e: any, index: number) => {
    if (currentCategory === index) setCurrentCategory(null);
    else setCurrentCategory(index);
  };

  const handleNextPage = () => {
    setPage((page) => {
      const maxPage = Math.ceil(products.length / productPerPage) - 1;
      if (page >= maxPage) return maxPage;

      return page + 1;
    });
  };

  const handlePreviousPage = () => {
    setPage((page) => (page - 1 < 0 ? 0 : page - 1));
  };

  return (
    <div className="product-category-section">
      <div className="section__top">
        <div className="section-name">{sectionName}</div>
        <div className="page">
          <button
            type="button"
            className="pre-page-button page-button"
            onClick={handlePreviousPage}
          >
            {" "}
            &lt; Trang trước{" "}
          </button>
          <div>
            <input
              className="page-number"
              min="1"
              max={`${products.length / productPerPage}`}
              type="number"
              defaultValue={1}
              value={page + 1}
            />
            <span>/ {Math.ceil(products.length / productPerPage)}</span>
          </div>
          <button
            type="button"
            className="next-page-button page-button"
            onClick={handleNextPage}
          >
            {" "}
            Trang sau &gt;
          </button>
        </div>
      </div>
      <div className="section__bottom">
        <Row gutter={16}>
          <Col className="target" xl={4} lg={4} md={24} sm={24} xs={24}>
            <div className="product-category-buttons">
              {categoryList.map((item, index) => {
                return (
                  <button
                    className={`product-category ${
                      index === currentCategory ? "active" : ""
                    }`}
                    type="button"
                    key={index}
                    onClick={(e) => updateCategory(e, index)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </Col>

          {products
            .slice(page * productPerPage, (page + 1) * productPerPage)
            .map((item) => {
              return (
                <Col key={item._id} xl={5} lg={5} md={6} sm={12} xs={24}>
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
