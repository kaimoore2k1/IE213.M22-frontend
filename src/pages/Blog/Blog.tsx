import { ProductCategorySection } from "../../components/core";
import { BlogCategory } from "./components";
import {
  blogList,
  productList,
  categoryList,
  sectionName,
} from "./data";
const Blog = () => {
  return (
    <div>
      <ProductCategorySection
        productList={productList}
        categoryList={categoryList}
        sectionName={sectionName}
      />
      <BlogCategory
        blogList={blogList}
        categoryList={["pet blog", "dasdadasd", "awajkxv "]}
      />
    </div>
  );
};

export default Blog;
