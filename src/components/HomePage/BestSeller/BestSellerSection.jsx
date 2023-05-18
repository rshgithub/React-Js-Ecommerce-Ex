import React from "react";
import { List, Button } from "antd";
import { default as BestSellerNavbar } from "./BestSellerNavbar";
import { default as BestSellerProductCard } from "../../../common/BestSellerProductCard";
import BestSellerProductsList from "../../../utils/ProductsLists/BestSellerProductsList";

const BestSellerSection = () => {
  return (
    <div
      style={{
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "2%",
        marginBottom: "2%",
      }}
    >
      <BestSellerNavbar />

      <List
    grid={{  
      column : 4 ,  
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2,
      xl: 3,
      xxl: 4,
    }}
        dataSource={BestSellerProductsList}
        renderItem={(item, index) => (
          <List.Item>
          <BestSellerProductCard key={index} index={index} obj={item} />
        </List.Item>

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
