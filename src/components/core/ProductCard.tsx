import { useState, useEffect } from "react";
import { Button, Card, Rate, Form, Radio } from "antd";
import { Link } from "react-router-dom";
import { AddToCartIcon, SearchIcon } from "../../assets/icons/BlogCustomIcon";
import "../../sass/Blog/ProductCard.scss";
import { productCardProps } from "./type";
import toSlug from "../../assets/toSlug";

const ProductCard = ({ product }: productCardProps) => {
  const [viewHidden, setViewHidden] = useState(false);
  useEffect(() => {
    const productAddInfo = document.querySelector(
      `#${toSlug(product.name)} .card-additional-info`
    );
    if (viewHidden) {
      productAddInfo?.classList.remove("hidden");
    } else {
      productAddInfo?.classList.add("hidden");
    }
  }, [viewHidden]);

  function handelAddToCart(value: any) {
    console.log({
      variant: value ?? null,
      _id: product._id,
      name: product.name,
      price: product.salePrice ?? product.price,
      image: product.images,
      quantity: 1,
    });
  }

  return (
    <Card
      onMouseEnter={() => setViewHidden(true)}
      onMouseLeave={() => setViewHidden(false)}
      className="product-card"
      id={`${toSlug(product.name)}`}
      hoverable={true}
      cover={
        <Link to={`/${toSlug(product.name)}`}>
          <img src={product.images[0].url} alt="product" />
        </Link>
      }
    >
      <Card.Meta
        title={<Link to={`/${toSlug(product.name)}`}>{product.name}</Link>}
        description={product.description}
      />
      <div className="rating-container">
        <Rate disabled allowHalf value={product.rating} />
        <span>{`(${product.ratingCount} nhận xét)`}</span>
      </div>
      <div className="price-section">
        {product.salePrice ? (
          <>
            <span className="original-price">
              {product.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
            <span className="sale-price price">
              {product.salePrice.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </>
        ) : (
          <span className="price">
            {product.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        )}
      </div>
      {/* Khi hover vao trong Card  */}
      <Form onFinish={handelAddToCart}>
        <div className="card-additional-info hidden">
          {product.variant ? (
            <div className="obtional-variant">
              {product.variant?.size.length > 0 ? (
                <Form.Item
                  initialValue={product.variant.size[0]}
                  label="Kích cỡ:"
                  name="size"
                  className="size"
                >
                  <Radio.Group defaultValue={product.variant.size[0]}>
                    {product.variant.size.map((size: string) => (
                      <Radio.Button key={size} value={size}>
                        {size}
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                </Form.Item>
              ) : null}
              {product.variant?.color.length > 0 ? (
                <Form.Item
                  initialValue={product.variant.color[0]}
                  label="Màu sắc:"
                  name="color"
                  className="color"
                >
                  <Radio.Group defaultValue={product.variant.color[0]}>
                    {product.variant.color.map((color: string) => (
                      <Radio.Button key={color} value={color}>
                        {color}
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                </Form.Item>
              ) : null}
            </div>
          ) : null}
          <div className="action">
            <Link to={`/${toSlug(product.name)}`}>
              <Button type="primary" icon={<SearchIcon />} />
            </Link>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<AddToCartIcon />}
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </Card>
  );
};

export default ProductCard;
