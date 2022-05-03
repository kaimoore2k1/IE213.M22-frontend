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
    id: number;
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
  name: string;
  description: string;
  price: number;
  rating: number;
  salePrice?: number;
  productVariant?: {
    size?: string[];
    color?: string[];
  };
  image: Image[];
  category: string[];
  content: string;
  id: number;
  stock: number;
  comment: comment[];
}
export interface commentAuthor{
  id: number;
  name: string;
  avatar:{
    url: string;
    alt?: string;
  }

}
export interface comment{
  id: number;
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