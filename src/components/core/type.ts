export interface product {
    name: string;
    description: string;
    rating: number;
    ratingCount: number;
    price: number;
    salePrice?: number;
    variant?: Variant;
    images: [Image];
    categories: string[];
    _id: string;
}
interface Variant {
  size: [string]
  color: [string]
}
interface Image {
    url: string;
    title?: string;
    author?: string;
}
export interface productDetail{
  name: string;//
  price: number;//
  stock: number;//
  salePrice?: number;//
  description: string;//
  content: string;//
  rating: number;//
  variant?: Variant;//
  images: Image[];//
  categories: string[];//
  _id: string;
}
export interface commentAuthor{
  _id: string;
  name: string;
  avatar:{
    url: string;
    alt?: string;
  }

}
export interface comment{
  _id: string;
  content: string;
  rating?: number;
  author:commentAuthor;
}
export interface productCardProps {
  product: product;
}

export interface productCategorySectionProps {
    productList: product[];
    categoryList: string[];
    sectionName: string;
}

export interface CommentState {
  comments: any[],
  submitting: boolean,
  value: string
}

export interface Props {
  CategoryList: String[];
  currentCategory: number;
  updateCategory: (index: number) => void;
}
export interface blog{
  _id: string;
  title: string;
  like: number;
  share: number;
  description: string;
  category: string;
  author: string;
  date: Date;
  image: {
      url: string;
      title?: string;
  };
  content: string;
}