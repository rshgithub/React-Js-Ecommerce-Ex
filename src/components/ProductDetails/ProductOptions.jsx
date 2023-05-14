import React, { useState } from "react";
import { Button, Row, Col, Divider, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const ProductOptions = ({ product }) => {
  console.log({ product });
  const handleFacebookShare = () => {
    const url = `https://example.com/products/${product.id}`;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const handleTwitterShare = () => {
    const text = `Check out this cool product: ${product.name}!`;
    const url = `https://example.com/products/${product.id}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const handleCountChange = (value) => {
    setCount(value);
  };

  const handleAddToCartClick = () => {
    console.log("Add to cart clicked");
  };

  const handleFavoriteClick = () => {
    console.log("Favorite clicked");
  };

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ alignItems: "center", marginTop: 50 }}>
      <Row gutter={[16, 16]}>
        <Col Col span={15}>
          <div style={{ backgroundColor: "#F6F7F8", width: 130 }}>
            <Space>
              <Button
                onClick={handleDecrement}
                type="link"
                style={{ fontSize: 23, marginBottom: 20 }}
              >
                -
              </Button>
              <span style={{ fontSize: 18 }}>{count}</span>
              <Button
                onClick={handleIncrement}
                type="link"
                style={{ fontSize: 23, marginBottom: 20 }}
              >
                +
              </Button>
            </Space>
          </div>
        </Col>
        <Col span={6}>
          <Space>
            <Button
              style={{
                backgroundColor: "rgb(51,160,255,.2)",
                height: 50,
                width: 190,
                fontSize: 16,
                color: "#33A0FF",
                fontWeight: "bold",
                border: "none",
              }}
              onClick={handleAddToCartClick}
              icon={<ShoppingCartOutlined />}
            >
              Add to cart
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(51,160,255,.2)",
                height: 50,
                width: 50,
                fontSize: 16,
                color: "#33A0FF",
                fontWeight: "bold",
                border: "none",
              }}
              onClick={handleFavoriteClick}
              icon={<HeartOutlined />}
            />
          </Space>
        </Col>
      </Row>
      <Divider />

      <div style={{ display: "flex" }}>
        <Button
          type="primary"
          style={{
            height: 50,
            fontSize: 15,
            fontWeight: "bold",
            width: "100%",
            background: "#3b5998",
            marginRight: 8,
          }}
          onClick={handleFacebookShare}
        >
          <FacebookOutlined style={{ color: "#fff", marginRight: 8 }} />
          Share on Facebook
        </Button>
        <Button
          style={{
            height: 50,
            fontSize: 15,
            fontWeight: "bold",
            width: "100%",
            background: "#1da1f2",
            color: "#fff",
          }}
          onClick={handleTwitterShare}
        >
          <TwitterOutlined style={{ color: "#fff", marginRight: 8 }} />
          Share on Twitter
        </Button>
        <div style={{ marginLeft: 16 }}></div>
      </div>
    </div>
  );
};

export default ProductOptions;
