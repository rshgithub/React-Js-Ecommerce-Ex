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
        style={{ width: "60%" , marginTop: "2%" }}
      >
        <Option value="S">S</Option>
        <Option value="M">M</Option>
        <Option value="L">L</Option>
      </Select>
    </div>
  );
};

export default ProductSizeDropList;
