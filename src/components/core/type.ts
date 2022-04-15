export interface product {
    productName: string;
    description: string;
    rating: number;
    ratingCount: number;
    price: number;
    salePrice?: number;
    productVariant?: {
      size?: string[];
      color?: string[];
    };
    image: {
      url: string;
      title: string;
    };
    category: string[];
    id: number;
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