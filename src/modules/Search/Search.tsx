import { useQuery } from "@apollo/client";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Category, ProductCategorySection2 } from "../../components/core";
import Loader from "../../components/core/Loader";
import { getAllProduct } from "../../graphql/schema/product.graphql";

const Search = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/");
  pathName.shift();
  const path = pathName.map((path) => {
    return path.split("-").join("");
  });
  const { loading, error, data } = useQuery(getAllProduct);
  console.log("data :>> ", data);
  // const [dataSource, setDataSource] = useState([]);

  // useEffect(() => {
  //   if (data) {
  //     setDataSource(
  //       data.getAllProducts.map((data: any) => {
  //         return { ...data };
  //       })
  //     );
  //   }
  // }, [data]);
  if (error) return <p>Error...</p>;
  // console.log(dataSource);

  return (
    <div className="store__layout" style={{ margin: "0 5rem" }}>
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
              productList={data.getAllProducts}
              sectionName="Product"
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Search;
