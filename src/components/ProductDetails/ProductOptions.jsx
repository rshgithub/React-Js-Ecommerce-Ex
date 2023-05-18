import React, { useState } from "react";
import { Button, Row, Col, Divider, Space, Typography } from "antd";
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

  const { Text } = Typography;

  return (
    <Col >
      <Col style={{ display: "flex" , justifyContent: "space-between" ,marginTop: "5%" ,  marginBottom: "5%" ,  }}>
        <Col > 
          <Col style={{ backgroundColor: "#F6F7F8", width: "100%" }}>
 
              <Button
                onClick={handleDecrement}
                type="link"
                style={{ fontSize: 25, marginBottom: 20 }}
              >
                -
              </Button>
              <Text  style={{ fontSize: 18 }}>{count}</Text>
              <Button
                onClick={handleIncrement}
                type="link"
                style={{ fontSize: 25, marginBottom: 20 }}
              >
                +
              </Button> 
          </Col>
        </Col>
        <Col  style={{ display: "flex"  ,  justifyContent: "space-between" }} > 
          <Button
              style={{
                backgroundColor: "rgb(51,160,255,.2)",
                height: "auto",
                width: "100%", 
                padding : 12,
                fontSize: 16,
                color: "#33A0FF",
                fontWeight: "bold",
                border: "none", 
                marginRight: "5%",
              }}
              onClick={handleAddToCartClick}
              icon={<ShoppingCartOutlined />}
            >
              Add to cart
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(51,160,255,.2)",
                height: "auto",
                width:  50 , 
                padding : 12,
                fontSize: 16,
                color: "#33A0FF",
                fontWeight: "bold",
                border: "none",
              }}
              onClick={handleFavoriteClick}
              icon={<HeartOutlined />}
            /> 
        </Col>
      </Col>
      <Divider style={{ width: "100%" }} />

      <Col style={{ display: "flex" ,  justifyContent: "space-between"}}>
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
          <FacebookOutlined style={{ color: "#fff" }} />
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
          <TwitterOutlined style={{ color: "#fff", fontSize: "1.2rem" }} />{" "}
          Share on Twitter
        </Button>
        <div style={{ marginLeft: 16 }}></div>
      </Col>
    </Col>
  );
};

export default ProductOptions;
