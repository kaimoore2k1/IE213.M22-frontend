import React from "react";
import { Slider, Service, Contact, Reviews } from "../../modules/Home";
import { ProductCategorySection } from "../../components/core";
/* import {
  productList,
  categoryList,
  sectionName,
} from "../Blog/data"; */

import { useQuery } from "@apollo/client";
import { getAllProductsByCategory } from "../../graphql/schema/product.graphql";

function Home() {
  const { loading, error, data } = useQuery(
    getAllProductsByCategory(["vatdungthucung"])
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <>
      <Slider />
      <Service />
      <ProductCategorySection
        productList={data.getAllProductsByCategory}
        categoryList={["pet", "clothes", "food"]}
        sectionName="product-category-section"
      />
      <ProductCategorySection
        productList={data.getAllProductsByCategory}
        categoryList={["pet", "clothes", "food"]}
        sectionName="product-category-section"
      />
      <Reviews />
      <Contact />
    </>
  );
}

export default Home;
