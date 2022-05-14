import React from "react";
import { Row, Col } from "antd";
import { useLocation } from "react-router-dom";
import { Category, ProductCategorySection2 } from "../../components/core";
import { useQuery } from "@apollo/client";
import { getAllProductsByCategory } from "../../graphql/schema/product.graphql";
import Loader from '../../components/core/Loader'
import "../../sass/Store/Store.scss";
import { categoryTranslate } from "../../assets/categoryTranslate";

function Store() {
  const location = useLocation();
  const pathName = location.pathname.split("/");
  pathName.shift();
  const path = pathName.map(path => {
    return path.split('-').join('')
  })
  const { loading, error, data } = useQuery(getAllProductsByCategory(path[path.length-1]));
  console.log('path :>> ', path);
  if (error) return <p>Error...</p>;
  return (
    <div className="store__layout">
      <Row gutter={32}>
        <Col
          span={5}
          className="store__layout--sidebar"
          xs={0}
          sm={0}
          md={0}
          lg={5}
          xl={5}
        >
          <Category />
        </Col>
        <Col
          className="store__layout--content"
          xs={24}
          sm={24}
          md={24}
          lg={19}
          xl={19}
        >
          {loading ? (
            <Loader />
          ) : (
            <ProductCategorySection2
              productList={data.getAllProductsByCategory}
              sectionName={categoryTranslate(path[path.length-1])?.name??''}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Store;
