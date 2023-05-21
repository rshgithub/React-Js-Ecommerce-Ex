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
  const { Title, Text } = Typography;

  return (
    <Col
      style={{
        width: "100%",
      }}
    >
      <Col>
        <Title level={2}>{product.name}</Title>
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
              style={{ fontSize: "2rem" }}
              allowClear={false}
              allowHalf
              disabled
              value={product.rating}
            />
            <Text
              type="secondary"
              style={{ fontSize: "2rem", fontWeight: "normal" }}
            >
              0 Reviews
            </Text>
            <Button type="link" style={{ fontSize: "2rem" }}>
              Submit a review
            </Button>
          </Space>
        </Row>
      </Col>

      <Divider />

      <Typography.Paragraph style={{ textAlign: "left", fontSize: "1.2rem" }}>
        <Space size="middle">
          <Typography.Text type="danger" style={{ fontSize: "4rem" }}>
            {"$ "}
            {product.lastPrice}
          </Typography.Text>
          <Typography.Text
            delete
            disabled
            style={{ fontSize: "4rem", marginLeft: "1rem" }}
          >
            {"$ "}
            {product.originalPrice}
          </Typography.Text>
        </Space>
      </Typography.Paragraph>
      <Row style={{ fontSize: "1rem" }}>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <Title level={5}>Availability:</Title>
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
      <Row style={{ fontSize: "1rem" }}>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <Title level={5}>Category:</Title>
        </Col>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <Typography.Title level={5}>{product.category}</Typography.Title>
        </Col>
      </Row>
      <Row style={{ fontSize: "1rem" }}>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <Title level={5}>Free shipping:</Title>
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

      <Row style={{ fontSize: "1rem" }}>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <Title level={5}>Select Color:</Title>
        </Col>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <SelectProductColorOptios />{" "}
        </Col>
      </Row>
      <Row style={{ fontSize: "1rem", height: 40, marginTop: "3%" }}>
        <Col xs={12} sm={6} lg={11} style={{ textAlign: "left" }}>
          <Title level={5}>Size:</Title>
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
