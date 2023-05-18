import React, { useState } from "react";
import { Tabs, Badge } from "antd";
import "../../App.css";
import ProductReviewsCard from "../../components/ProductDetails/ProductReviewsCard";

const { TabPane } = Tabs;

const ProductDescriptionSection = (props) => {
  const { product } = props;

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const [activeTab, setActiveTab] = useState("1");

  return (
    <Tabs
      style={{
        width: "95%",
        height: 400,
        backgroundColor: "#FAFAFB",
        padding: "2%", 
        marginTop: "4%", 
      }}
      defaultActiveKey="1"
      activeKey={activeTab}
      onChange={handleTabChange}
    >
<TabPane
  style={{
    maxHeight: 300,
    fontSize: 'clamp(12px, 1.5vw, 15px)',
    padding: '1rem',
    textAlign: 'start',
    overflow: 'auto',
  }}
  tab="Product Description"
  key="1"
>
  {product.description}
</TabPane>
      <TabPane
        key="2"
        style={{ maxHeight: 300, overflowY: "scroll" }}
        tab={
          <span>
            Reviews
            <Badge
              color="lightGrey"
              count="5" // {reviews.length}
              style={{ marginLeft: "8px" }}
            />
          </span>
        }
      >
        <ProductReviewsCard />
      </TabPane>
    </Tabs>
  );
};

export default ProductDescriptionSection;
