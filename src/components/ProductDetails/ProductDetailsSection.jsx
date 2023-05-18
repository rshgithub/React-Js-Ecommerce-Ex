import React from "react";
import { Rate, Space, Button, Row, Col, Divider, Typography } from "antd";
import { StopOutlined } from "@ant-design/icons";
import "../../App.css";
import {
  ProductOptions,
  SelectProductColorOptios,
  ProductSizeDropList,
} from "../../components/ProductDetails";

const ProductDetailsSection = (props) => {
  const { product } = props;

  return (
    <Col >
      <Col>
        <h2 style={{ fontSize: "2rem" }}>{product.name}</h2>
        <Row>
          <Space
            size="large"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              textAlign: "center",
            }}
          >
            <Rate
              style={{ fontSize: "1rem" }}
              allowClear={false}
              allowHalf
              disabled
              value={product.rating}
            />
            <p
              style={{
                color: "lightGrey",
                fontSize: "1rem",
                fontWeight: "normal",
              }}
            >
              0 Reviews
            </p>
            <Button type="link" style={{ fontSize: "1rem" }}>
              Submit a review
            </Button>
          </Space>
        </Row>
      </Col>

      <Divider />

      <Typography.Paragraph style={{ textAlign: "left", fontSize: "1.2rem" }}>
        <Space size="middle">
          <Typography.Text type="danger" style={{ fontSize: "2rem" }}>
            {"$ "}
            {product.lastPrice}
          </Typography.Text>
          <Typography.Text
            delete
            disabled
            style={{ fontSize: "2rem", marginLeft: "1rem" }}
          >
            {"$ "}
            {product.originalPrice}
          </Typography.Text>
        </Space>
      </Typography.Paragraph>
      <Row style={{ fontSize: "1rem", height: 35 }}>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <h3>Availability:</h3>
        </Col>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <h4>
            {product.Availability ? (
              <Typography.Title level={5}>In stock</Typography.Title>
            ) : (
              <Typography.Title level={5}>Out of stock</Typography.Title>
            )}
          </h4>
        </Col>
      </Row>
      <Row style={{ fontSize: "1rem", height: 35 }}>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <h3>Category:</h3>
        </Col>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <Typography.Title level={5}>{product.category}</Typography.Title>
        </Col>
      </Row>
      <Row style={{ fontSize: "1rem", height: 35 }}>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <h3>Free shipping:</h3>
        </Col>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <h4>
            {product.freeShipping ? (
              <Typography.Title level={5}>In stock</Typography.Title>
            ) : (
              <StopOutlined />
            )}
          </h4>
        </Col>
      </Row>

      <Divider />

      <Row style={{ fontSize: "1rem", height: 30 }}>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <h3> Select Color:</h3>
        </Col>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <SelectProductColorOptios />{" "}
        </Col>
      </Row>
      <Row style={{ fontSize: "1rem", height: 40, marginTop:  "3%" }}>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <h3>Size:</h3>
        </Col>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <ProductSizeDropList />
        </Col>
      </Row>

      <Divider />
      <ProductOptions product={product} />
    </Col>
  );
};

export default ProductDetailsSection;
