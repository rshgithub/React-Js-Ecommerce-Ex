import { List, Card, Button, Space, Badge, Typography, Rate } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import "../../App.css";
import { BestSellerProductCard } from "../../common";
import BestSellerProductsList from "../ProductDetails/ProductsLists/BestSellerProductsList";

const RelatedProductsSections = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  return (
    <div
      style={{
        marginTop: 50,
        marginBottom: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontWeight: "normal" }}>RELATED PRODUCTS</h1>
      <List
        grid={{ column: 4 }}
        dataSource={BestSellerProductsList}
        size="small"
        style={{ marginTop: 50, width: "80%" }}
        renderItem={(item, index) => (
          <List.Item
            onMouseEnter={() => handleCardMouseEnter(index)}
            onMouseLeave={() => handleCardMouseLeave()}
          >
            <div key={index}>
              <BestSellerProductCard key={index} index={index} obj={item} />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default RelatedProductsSections;
