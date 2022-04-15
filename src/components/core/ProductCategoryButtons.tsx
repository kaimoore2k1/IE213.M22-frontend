import {Props} from './type'
const ProductCategoryMenu = ({
  CategoryList,
  currentCategory,
  updateCategory,
}: Props) => {
  return (
    <div className="product-category-buttons">
      {CategoryList.map((item, index) => {
        return (
          <button
            className={`product-category ${
              index === currentCategory ? "active" : ""
            }`}
            type="button"
            key={index}
            onClick={() => updateCategory(index)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default ProductCategoryMenu;
