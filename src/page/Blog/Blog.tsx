import BlogCategory from "../../component/BlogCategory/BlogCategory";
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
  
  const blogList = [
    { ...exampleLargeBlogCard, id: 1 },
    { ...exampleLargeBlogCard, id: 2 },
    { ...exampleLargeBlogCard, id: 3 },
    { ...exampleLargeBlogCard, id: 4 },
    { ...exampleLargeBlogCard, id: 5 },
    { ...exampleLargeBlogCard, id: 6 },
    { ...exampleLargeBlogCard, id: 7 },
    { ...exampleLargeBlogCard, id: 8 },
    { ...exampleLargeBlogCard, id: 9 },
    { ...exampleLargeBlogCard, id: 10 },
    { ...exampleLargeBlogCard, id: 11 },
  ];
const Blog = () => {
  return (
    <div className="Blog">
      <BlogCategory
        blogList={blogList}
        categoryList={["pet blog", "Nổi bật", "adasc"]}
      />
    </div>
  );
};

export default Blog;
