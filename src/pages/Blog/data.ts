export const exampleProduct = {
    name: "Example Product",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    rating: 4,
    ratingCount: 20,
    price: 10000,
    salePrice: 2000,
    productVariant: {
        size: ["S", "M", "L", "XL"],
        color: ["red", "blue", "green"],
    },
    images: [{
        url: "https://via.placeholder.com/600/92c952",
        title: "hello world"
    }],
    categories: ["pet"],
    id: 1,
};

export const exampleSmallBlogCard = {
    title: "Cách để thú cưng sớm quen ngôi nhà mới abcd efgh",
    likeCount: 12,
    commentCount: 3,
    shareCount: 2,
    images: {
        url: "https://via.placeholder.com/600/92c952",
        title: "hello world"
    },
    id: 1,
    author: "John Smith",
    date: new Date(),
};

export const exampleLargeBlogCard = {
    title: "Cách để thú cưng sớm quen ngôi nhà mới abcd efgh",
    likeCount: 12,
    commentCount: 3,
    shareCount: 2,
    description:
        "lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip lorem",
    categories: "pet blog",
    images: {
        url: "https://via.placeholder.com/600/92c952",
        title: "hello world"
    },
    id: 1,
    author: "John Smith",
    date: new Date(),
};
export const blogList = [
    exampleLargeBlogCard,
    exampleLargeBlogCard,
    exampleLargeBlogCard,
    exampleLargeBlogCard,
    exampleLargeBlogCard,
    exampleLargeBlogCard,
    exampleLargeBlogCard,
];
export const productList = [
    { ...exampleProduct, id: 1 },
    { ...exampleProduct, id: 2 },
    { ...exampleProduct, id: 3 },
    { ...exampleProduct, id: 4 },
    { ...exampleProduct, id: 5 },
    { ...exampleProduct, id: 6 },
    { ...exampleProduct, id: 7 },
];
export const categoryList = ["pet", "clothes", "food"];
export const sectionName = "product-category-section";