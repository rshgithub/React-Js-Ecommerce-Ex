import React from "react";
import { List, Button, Typography } from "antd";
import { default as BestSellerNavbar } from "./BestSellerNavbar";
import { default as BestSellerProductCard } from "../../../common/BestSellerProductCard";
import BestSellerProductsList from "../../../utils/ProductsLists/BestSellerProductsList";

const BestSellerSection = () => {
  return (
    <div
      style={{
        marginLeft: 200,
        marginRight: 200,
        marginTop: "18%",
        marginBottom: "10%",
      }}
    >
      <Typography.Text style={{ fontWeight: "bold", fontSize: "30px" }}>
        BEST SELLER
      </Typography.Text>
      <BestSellerNavbar />

      <List
        grid={{
          gutter: 16,
          column: 4,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 4,
        }}
        dataSource={BestSellerProductsList}
        renderItem={(item, index) => (
          <BestSellerProductCard key={index} index={index} obj={item} />
        )}
      />
      <Button
        type="link"
        style={{ borderBottom: "2px solid blue", marginTop: 40 }}
      >
        LOAD MORE
      </Button>
    </div>
  );
};

export default BestSellerSection;
