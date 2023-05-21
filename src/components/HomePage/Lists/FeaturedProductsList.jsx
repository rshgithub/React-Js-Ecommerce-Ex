import { List, Typography, Row, Col } from "antd";
import React from "react";
import FeaturedProductsListData from "../../../utils/ProductsLists/FeaturedProductsListData";
import FeaturedProductCard from "../Cards/FeaturedProductCard";

const FeaturedProductsList = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        marginBottom: "5%",
      }}
    >
      <Col align="middle" justify="center">
        <Typography.Title level={2}>FEATURED PRODUCTS</Typography.Title>
        <List
          size="large"
          style={{
            width: "100%",
          }}
          grid={{
            column: 3,
            gutter: 30,
            xs: 1,
            sm: 1,
            md: 1,
            lg: 2,
            xl: 2,
            xxl: 3,
          }}
          dataSource={FeaturedProductsListData}
          renderItem={(item, key) => (
            <List.Item>
              <List.Item>
                <FeaturedProductCard key={key} index={key} obj={item} />
              </List.Item>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default FeaturedProductsList;
