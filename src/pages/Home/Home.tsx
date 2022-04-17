import React from "react";
import { Slider, Service, Contact, Reviews } from "../../modules/Home";
import { ProductCategorySection } from "../../components/core";
import {
  productList,
  categoryList,
  sectionName,
} from "../Blog/data";

function Home() {
  return (
    <>
      <Slider />
      <Service />
      <ProductCategorySection
        productList={productList}
        categoryList={categoryList}
        sectionName={sectionName}
      />
      <ProductCategorySection
        productList={productList}
        categoryList={categoryList}
        sectionName={sectionName}
      />
      <Reviews />
      <Contact />
    </>
  );
}

export default Home;
