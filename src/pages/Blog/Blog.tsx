import { useQuery } from "@apollo/client";
import { ProductCategorySection } from "../../components/core";
import { getAllProductsByCategory } from "../../graphql/schema/product.graphql";
import { BlogCategory } from "./components";
import { blogList } from "./data";
const Blog = () => {
  return (
    <div>
      <BlogCategory
        blogList={blogList}
        categoryList={["pet blog", "dasdadasd", "awajkxv "]}
      />
    </div>
  );
};

export default Blog;
