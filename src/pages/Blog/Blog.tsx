import { useQuery } from "@apollo/client";
import { ProductCategorySection } from "../../components/core";
import { getAllProductsByCategory } from "../../graphql/schema/product.graphql";
import { BlogCategory } from "./components";
import { blogList } from "./data";
const Blog = () => {
  const { loading, error, data } = useQuery(
    getAllProductsByCategory(["vatdungthucung"])
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div>
      <BlogCategory
        blogList={data.getAllProductsByCategory}
        categoryList={["pet blog", "dasdadasd", "awajkxv "]}
      />
    </div>
  );
};

export default Blog;
