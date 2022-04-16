import { useState, useEffect } from "react";
import { Button, Card, Rate, Form, Radio } from "antd";
import { AddToCartIcon, SearchIcon } from "../../assets/icons/BlogCustomIcon";
import "../../sass/Blog/ProductCard.scss";
import {productCardProps} from './type'


const ProductCard = ({ product }: productCardProps) => {
  const [viewHidden, setViewHidden] = useState(false);
  useEffect(()=>{
    const productAddInfo = document.querySelector(`#product-card-${product.id} .card-additional-info`);
    if(viewHidden){
      productAddInfo?.classList.remove("hidden");
    }
    else{ 
      productAddInfo?.classList.add("hidden");
    }
  },[product.id, viewHidden])

  return (
    <Card
      onMouseEnter={() => setViewHidden(true)}
      onMouseLeave={() => setViewHidden(false)}
      className="product-card"
      id={`product-card-${product.id}`}
      hoverable={true}
      cover={<img src={product.image.url} alt='product' />}
    >
      <Card.Meta
        title={product.productName}
        description={product.description}
      />
      <div className="rating-container">
        <Rate disabled allowHalf value={product.rating} />
        <span>{`(${product.ratingCount} nhận xét)`}</span>
      </div>
      <div className="price">
        {product.salePrice ? (
          <>
            <span className="sale-price">{product.salePrice}VNĐ</span>
            <sub className="original-price">{product.price}VNĐ</sub>
          </>
        ) : (
          <span className="original-price">{product.price}VNĐ</span>
        )}
      </div>
      {/* Khi hover vao trong Card  */}
      <Form>
        <div className="card-additional-info hidden">
          {product.productVariant ? (
            <div className="obtional-variant">
              {product.productVariant.size ? (
                <div className="size">
                  <span className="field">Size:</span>
                  <Radio.Group defaultValue="S">
                    {product.productVariant.size.map((size: string) => (
                      <Radio.Button key={size} value={size}>
                        {size}
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                </div>
              ) : null}
              {product.productVariant.color ? (
                <div className="color">
                  <span className="field">Color:</span>
                  <Radio.Group defaultValue="red">
                    {product.productVariant.color.map((color: string) => (
                      <Radio.Button key={color} value={color}>
                        {color}
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="action">
            <Button type="primary" icon={<SearchIcon />} />
            <Button type="primary" icon={<AddToCartIcon />} />
          </div>
        </div>
      </Form>
    </Card>
  );
};

export default ProductCard;
