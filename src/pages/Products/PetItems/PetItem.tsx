import { useQuery } from "@apollo/client";
import React from "react";
import { Row, Col } from "antd";
import { Category } from "../../../components/core";
import { getAllProductsByCategory } from "./types";
import { ProductCategorySection } from "../../../components/core";

function PetItem() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const { loading, error, data } = useQuery(getAllProductsByCategory("vatdungthucung"));
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="store__layout">
      <Row>
        <Col span={7} className="store__layout--sidebar">
          <Category />
        </Col>
        <Col span={17} className="store__layout--content">
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

export default PetItem;
