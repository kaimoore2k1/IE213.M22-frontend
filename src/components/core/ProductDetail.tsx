import {
  Button,
  Form,
  Image,
  Rate,
  InputNumber,
  Radio,
  Tabs,
  Row,
  Col,
  Typography,
} from "antd";
import { useState, useEffect } from "react";
import { productDetail, comment } from "./type";
import { decode } from "html-entities";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import CommentEditor from "./CommentEditor";
import { categoryTranslate } from "./../../assets/categoryTranslate";

interface ProductDetailProps {
  product: productDetail;
  comments: comment[];
}

const ProdcutDetail = ({ product, comments }: ProductDetailProps) => {
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    const quantity = document.querySelector(
      ".product-quantity-input .ant-input-number-input"
    ) as HTMLInputElement;

    if (quantity) {
      quantity.value = "" + productQuantity;

      console.log(quantity.value);
    }
  }, [productQuantity]);

  const handleCommentTab = () => {
    let antTabElement: HTMLElement = document.querySelectorAll(
      ".ant-tabs-tab"
    )[1] as HTMLElement;
    if (antTabElement) {
      antTabElement.click();
    }
  };

  function updateQuantity() {
    const quantity = document.querySelector(
      ".product-quantity-input .ant-input-number-input"
    ) as HTMLInputElement;
    if (quantity) {
      if (parseInt(quantity.value) > product.stock)
        quantity.value = product.stock + "";
      if (parseInt(quantity.value) < 1) quantity.value = 1 + "";
      setProductQuantity(parseInt(quantity.value));
    }
  }

  function handelAddToCart(value: any) {
    console.log({
      variant: value ?? null,
      _id: product._id,
      name: product.name,
      price: product.salePrice ?? product.price,
      image: product.images[0],
      quantity: productQuantity,
    });
  }

  return (
    <div className="product-detail">
      <Row gutter={40} className="product-detail_top">
        <Col xl={12} sm={24} className="product-detail-image">
          <Image.PreviewGroup>
            <Row className="main-image">
              <Image
                src={product.images[0].url}
                alt={product.images[0].title ?? product.name}
              />
            </Row>
            <Row gutter={16} className="sub-image">
              {product.images.slice(1, 5).map((image, index) => (
                <Col xl={6} sm={3}>
                  <Image
                    key={index}
                    src={image.url}
                    alt={image.title ?? product.name}
                  />
                </Col>
              ))}
            </Row>
          </Image.PreviewGroup>
        </Col>
        <Col xl={12} sm={24} className="product-detail-info">
          <div className="product-detail-info-title">
            <h1>{product.name}</h1>
          </div>
          <div className="product-detail-info-price">
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
          <div className="product-rating">
            <Rate disabled allowHalf value={product.rating} />
            <a href="#comment" onClick={handleCommentTab}>
              ({comments.length} nhận xét)
            </a>
          </div>
          <div className="product-description">{product.description}</div>
          <Form onFinish={handelAddToCart}>
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
                {product.variant?.color?.length > 0 ? (
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
            <Form.Item label="Số lượng:" className="product-quantity-section">
              <InputNumber
                className="product-quantity-input"
                size="middle"
                min={1}
                defaultValue={1}
                controls={false}
                onBlur={() => updateQuantity()}
                value={productQuantity}
                addonAfter={
                  <div
                    className="product-quantity-input-addon"
                    onClick={() =>
                      setProductQuantity((count) =>
                        count + 1 > product.stock ? count : ++count
                      )
                    }
                  >
                    +
                  </div>
                }
                addonBefore={
                  <div
                    className="product-quantity-input-addon"
                    onClick={() =>
                      setProductQuantity((count) =>
                        count - 1 == 0 ? count : --count
                      )
                    }
                  >
                    -
                  </div>
                }
                max={product.stock === 0 ? 1 : product.stock}
              />
            </Form.Item>
            <Form.Item className="button-section">
              <Button
                type="primary"
                disabled={product.stock === 0}
                htmlType="submit"
                size="large"
              >
                Thêm Vào Giỏ Hàng
              </Button>
              <Button type="link" disabled={product.stock === 0} size="large">
                Mua Ngay
              </Button>
            </Form.Item>
            {product.stock === 0 && (
              <Typography.Text type="danger">
                Sản phẩm này hiện tại đã hết hàng
              </Typography.Text>
            )}
          </Form>
          <div className="category">
            <span>Danh mục: </span>
            {product.categories.map((e: string, index: number, arr) => {
              let category = categoryTranslate(e);
              let url =
                arr.length == 0 || index == 0
                  ? `/${category?.slugName}`
                  : `/${categoryTranslate(arr[0])?.slugName}/${
                      category?.slugName
                    }`;
              return (
                <Link to={url} key={index}>
                  {category?.name}
                </Link>
              );
            })}
          </div>
        </Col>
      </Row>
      <div className="product-detail-bottom">
        <Tabs type="card">
          <Tabs.TabPane key="1" tab="Thông tin chi tiết">
            <div
              className="product-content"
              dangerouslySetInnerHTML={{
                __html: product.content
                  ? decode(product.content)
                  : `<h1>${product.name}</h1><p>Sản phẩm này không có mô tả</p>`,
              }}
            ></div>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Đánh giá">
            <div id="comment" className="comment-section">
              <CommentEditor idProduct={product._id} />
              <div className="comment-list">
                {comments.map((comment, index) => (
                  <Comment key={index} comment={comment} />
                ))}
              </div>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default ProdcutDetail;
