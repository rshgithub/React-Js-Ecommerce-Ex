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
 
  const {product} = props;
  
  
  return (
    <div> 
        <div className="container">
          <h2>{product.name}</h2>
          <Space size="large">
            <Rate
              style={{ fontSize: 15 }}
              allowClear={false}
              allowHalf
              disabled
              value={product.rating}
            />
            <p
              style={{
                color: "lightGrey",
                fontSize: 15,
                fontWeight: "normal",
              }}
            >
              0 Reviews
            </p>
            <Button type="link" style={{ fontSize: 15 }}>
              Submit a review
            </Button>
          </Space>
        </div>

        <Divider />

        <Typography.Paragraph style={{ textAlign: "left" }}>
      <Space size="middle">
        <Typography.Text type="danger" style={{ fontSize: 30 }} >{"$ "}{product.lastPrice}</Typography.Text>
        <Typography.Text delete disabled style={{ fontSize: 30 }}>
          {"$ "}
          {product.originalPrice}
        </Typography.Text>
      </Space>
    </Typography.Paragraph>

        <Row>
          <Col span={6} style={{ textAlign: "left" }}>
            <h3>Availability:</h3>
            <h3>Category:</h3>
            <h3>Free shipping:</h3>
          </Col>
          <Col span={6} style={{ textAlign: "left" }}>
            <h4>
              {product.Availability ? (
                <p>In stock</p>
              ) : (
                <p>
                  <StopOutlined /> Out of stock
                </p>
              )}
            </h4>
            <h4>{product.category}</h4>
            <h4>{product.freeShipping ? <p>In stock</p> : <StopOutlined />}</h4>
          </Col>
        </Row>
        <Divider />

        <Row>
          <Col span={6} style={{ textAlign: "left" }}>
            <h3>Select Color :</h3>
            <h3>Size :</h3>
          </Col>
          <Col span={6}>
            <SelectProductColorOptios />
            <ProductSizeDropList />
          </Col>
        </Row>

        <Divider />
        <ProductOptions product={product} />
 
    </div>
  );
};

export default ProductDetailsSection;
