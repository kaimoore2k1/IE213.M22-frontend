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
import Loader from "../../components/core/Loader";

function Home() {
  const pet = useQuery(
    getAllProductsByCategory("thucung")
  );
  const food = useQuery(
    getAllProductsByCategory("thucanthucung")
  )
  return (
    <>
      <Slider />
      <Service />
      {pet.loading ? (
        <Loader />
      ) : (
        <ProductCategorySection
          productList={pet.data.getAllProductsByCategory}
          categoryList={["Chó cảnh", "Mèo cảnh", "Thú cưng khác"]}
          sectionName="Thú cưng"
        />
      )}

      {food.loading ? (
        <Loader />
      ) : (
        <ProductCategorySection
          productList={food.data.getAllProductsByCategory}
          categoryList={["Thức ăn cho chó", "Thức ăn cho mèo", "Thức ăn khác"]}
          sectionName="Thức ăn cho thú cưng"
        />
      )}
      <Reviews />
      <Contact />
    </>
  );
}

export default Home;
