import React from "react";
import { List, Button, Typography, Col, Row } from "antd";
import { default as BestSellerNavbar } from "./BestSellerNavbar";
import { default as BestSellerProductCard } from "../../../common/BestSellerProductCard";
import BestSellerProductsList from "../../../utils/ProductsLists/BestSellerProductsListData";

const BestSellerSection = () => {
  return (
    <Row justify="center" align="middle">
      <Col
        align="middle"
        justify="center"
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          marginTop: "18%",
          marginBottom: "2%",
        }}
      >
        <Typography.Text style={{ fontWeight: "bold", fontSize: "30px" }}>
          BEST SELLER
        </Typography.Text>
        <BestSellerNavbar />

        <List
          grid={{ 
            column: 4,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 4,
          }}
          dataSource={BestSellerProductsList}
          renderItem={(item, key) => (
            <List.Item>
              <BestSellerProductCard key={key} index={key} obj={item} />
            </List.Item>
          )}
        />
        <Button
          type="link"
          style={{ borderBottom: "2px solid blue", marginTop: 40 }}
        >
          LOAD MORE
        </Button>
      </Col>
    </Row>
  );
};

export default BestSellerSection;
