import React from "react";
import "./sass/App.scss";
import Contact from "./modules/Home/Contact";
import ProductCategorySection from "./component/ProductCategorySection/ProductCategorySection";
import { Col, Row } from "antd";
import BlogCard from "./component/BlogCard/BlogCard";
import BlogSideCardList from "./component/BlogSideCardList/BlogSideCardList";
import BlogCategory from "./component/BlogCategory/BlogCategory";

import "antd/dist/antd.min.css";

const exampleProduct = {
  productName: "Example Product",
  description: "lorem ipsum dolor sit amet, consectetur adip",
  rating: 4,
  ratingCount: 20,
  price: 10000,
  salePrice: 2000,
  productVariant: {
    size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "green"],
  },
  image: {
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    title: "hello world",
  },
  category: ["pet"],
  id: 1,
};
const exampleSmallBlogCard = {
  title: "Cách để thú cưng sớm quen ngôi nhà mới abcd efgh",
  likeCount: 12,
  commentCount: 3,
  shareCount: 2,
  image: {
    url: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "hello world",
  },
  id: 1,
  author: "John Smith",
  date: new Date(),
};
const exampleLargeBlogCard = {
  title: "Cách để thú cưng sớm quen ngôi nhà mới abcd efgh",
  likeCount: 12,
  commentCount: 3,
  shareCount: 2,
  description:
    "lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip lorem",
  category: "pet blog",
  image: {
    url: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "hello world",
  },
  id: 1,
  author: "John Smith",
  date: new Date(),
};
const blogList = [exampleLargeBlogCard,exampleLargeBlogCard,exampleLargeBlogCard,exampleLargeBlogCard,exampleLargeBlogCard,exampleLargeBlogCard,exampleLargeBlogCard]
const productList = [
  { ...exampleProduct, id: 1 },
  { ...exampleProduct, id: 2 },
  { ...exampleProduct, id: 3 },
  { ...exampleProduct, id: 4 },
];
const categoryList = ["pet", "clothes", "food"];
const sectionName = "product-category-section";
function App() {
  return (
    <div className="App">
      <ProductCategorySection
        productList={productList}
        categoryList={categoryList}
        sectionName={sectionName}
      />
      <BlogCategory blogList={blogList} categoryList={["pet blog","dasdadasd","awajkxv "]} />
    </div>
    
  );
}

export default App;
