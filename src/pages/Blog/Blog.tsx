import { ProductCategorySection } from "../../components/core";
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
