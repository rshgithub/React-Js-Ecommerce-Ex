import { List  } from "antd"; 
import { useState } from "react";
import "../../App.css";
import { BestSellerProductCard } from "../../common";
import RelatedProductsList from "../ProductDetails/ProductsLists/RelatedProductsList";

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
        dataSource={RelatedProductsList}
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
