import "./sass/App.scss";
import ProductCategorySection from "./component/ProductCategorySection/ProductCategorySection";
import "antd/dist/antd.min.css";
import BlogDetail from "./page/BlogDetail/BlogDetail";
const exampleProduct = {
  productName: "Example Product",
  description: "lorem ipsum dolor sit amet, consectetur adip",
  rating: 4,
  ratingCount: 20,
  price: 10000,
  salePrice: 2000,

  image: {
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    title: "hello world",
  },
  category: ["pet"],
  id: 1,
};

const productList = [
  { ...exampleProduct, id: 1 },
  { ...exampleProduct, id: 2 },
  { ...exampleProduct, id: 3 },
  { ...exampleProduct, id: 4 },
  { ...exampleProduct, id: 5 },
  { ...exampleProduct, id: 6 },
  { ...exampleProduct, id: 7 },
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

      <BlogDetail />
    </div>
  );
}

export default App;
