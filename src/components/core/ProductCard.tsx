import { useState, useEffect } from "react";
import { Button, Card, Rate, Form, Radio } from "antd";
import { Link } from "react-router-dom";
import { AddToCartIcon, SearchIcon } from "../../assets/icons/BlogCustomIcon";
import "../../sass/Blog/ProductCard.scss";
import { productCardProps } from "./type";
import toSlug from "../../assets/toSlug";
import { comment } from "./../../modules/Detail/Data";

const ProductCard = ({ product }: productCardProps) => {
  if (!window.localStorage.getItem("products")) {
    window.localStorage.setItem("products", "[]");
  }
  const [products, setProducts]: any = useState(
    window.localStorage.getItem("products")
  );
  const [viewHidden, setViewHidden] = useState(false);

  const rating =
    Math.round(
      (product.comments.reduce(
        (total, comment: any) => total + comment.rating,
        0
      ) /
        product.comments.length) *
        2
    ) / 2;
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
    let productCart: any = {
      variant: value ?? null,
      _id: product._id,
      name: product.name,
      price: product.salePrice ?? product.price,
      image: product.images[0],
      quantity: 1, /* i nop du chu ca mo */
    };
    let flag = false;
    const localCarts = JSON.parse(window.localStorage.getItem("products") as string);
    if(localCarts[0] === undefined) {
      productCart.quantity--;
      localCarts.push(productCart);
    }
    for (let i = 0; i < localCarts.length; i++) {
      if(localCarts[i].name === productCart.name) {
        localCarts[i].quantity++
        flag = true
        break
      }
    }
    if(!flag) {
      localCarts.push(productCart)
    }
    window.localStorage.setItem("products", JSON.stringify(localCarts));
    setProducts(window.localStorage.getItem("products") as string);
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
        <Rate
          disabled
          allowHalf
          value={product.comments.length > 0 ? rating : 5}
        />
        <span>{`(${product.comments.length}) nhận xét)`}</span>
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
