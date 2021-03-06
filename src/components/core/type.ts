export interface product {
  name: string;
  description: string;
  stock: number,
  comments: comment[];
  price: number;
  salePrice?: number;
  variant?: Variant;
  images: [Image];
  categories: string[];
  _id: string;
}
interface Variant {
  size: [string];
  color: [string];
}
interface Image {
  url: string;
  title?: string;
  author?: string;
}
export interface productDetail {
  name: string; //
  price: number; //
  stock: number; //
  salePrice?: number; //
  description: string; //
  content: string; //
  variant?: Variant; //
  images: Image[]; //
  categories: string[]; //
  _id: string;
  comments: [];
}
export interface commentAuthor {
  _id: string;
  name: string;
  avatar: string;
}
export interface comment {
  _id: string;
  content: string;
  rating?: number;
  user:string;
  date: string;
  idProduct: string;
  idBlog: string;
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
  comments: any[];
  submitting: boolean;
  value: string;
}

export interface Props {
  CategoryList: String[];
  currentCategory: number;
  updateCategory: (index: number) => void;
}
export interface blog {
  _id: string;
  title: string;
  like: String[];
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