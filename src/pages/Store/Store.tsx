import React from "react";
import { Row, Col } from "antd";
import { useLocation } from "react-router-dom";
import { Category, ProductCategorySection } from "../../components/core";
import { useQuery } from "@apollo/client";
import { getAllProductsByCategory } from "../../graphql/schema/product.graphql";

function Store() {
  const location = useLocation();
  const pathName = location.pathname.split("/");
  pathName.shift()
  console.log(pathName)
  const { loading, error, data } = useQuery(
    getAllProductsByCategory(pathName)
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="store__layout">
      <Row>
        <Col
          span={7}
          className="store__layout--sidebar"
          xs={0}
          sm={0}
          md={0}
          lg={7}
          xl={7}
        >
          <Category />
        </Col>
        <Col
          span={17}
          className="store__layout--content"
          xs={24}
          sm={24}
          md={24}
          lg={17}
          xl={17}
        >
          <ProductCategorySection
            productList={data.getAllProductsByCategory}
            categoryList={[]}
            sectionName=""
          />
        </Col>
      </Row>
    </div>
  );
}

export default Store;
