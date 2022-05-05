import { useQuery } from "@apollo/client";
import { ProductCategorySection } from "../../components/core";
import { getAllProductsByCategory } from "../../graphql/schema/product.graphql";
import  BlogCategory  from "./components/BlogCategory";
import { blogList } from "./data";
const Blog = () => {
  return (
      <BlogCategory
        blogList={blogList}
        categoryList={["pet blog", "dasdadasd", "awajkxv "]}
      />
  );
};

export default Blog;
