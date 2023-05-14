import { Select } from "antd";
import React, { useState } from "react";
const ProductSizeDropList = () => {
  const { Option } = Select; 
  const [selectedSize, setSelectedSize] = useState("M");
  const handleSizeChange = (value) => {
    setSelectedSize(value);
  };

  return (
    <div>
      <Select
        value={selectedSize}
        onChange={handleSizeChange}
        style={{ width: "100%", marginBottom: 16 , marginTop: 5 }}
      >
        <Option value="S">S</Option>
        <Option value="M">M</Option>
        <Option value="L">L</Option>
      </Select>
    </div>
  );
};

export default ProductSizeDropList;
