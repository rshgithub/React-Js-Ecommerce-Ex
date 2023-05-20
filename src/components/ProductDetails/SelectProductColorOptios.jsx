import React, { useState } from "react";
import { Radio } from "antd";
import "../../App.css";

const SelectProductColorOptios = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const colorOptions = [
    { value: "red", color: "#f5222d" },
    { value: "green", color: "#52c41a" },
    { value: "blue", color: "#1890ff" },
    { value: "purple", color: "#722ed1" },
  ];

  const colorRadioButtons = colorOptions.map((option) => (
    <Radio.Button
      key={option.value}
      value={option.value}
      style={{ borderRadius: "50%", padding:5 , margin:5}}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: option.color,
            width: 20,
            height: 20,
            borderRadius: "50%",
           
          }}
        />
      </div>
    </Radio.Button>
  ));

  return (
    <Radio.Group
      value={selectedColor}
      onChange={handleColorChange}
      buttonStyle="outline"
      style={{ display: "flex", flexDirection: "row" , marginTop: 10}}
    >
      {colorRadioButtons}
    </Radio.Group>
  );
};

export default SelectProductColorOptios;
