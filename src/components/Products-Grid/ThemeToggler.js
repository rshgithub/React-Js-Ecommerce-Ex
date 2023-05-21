import React, { useState } from "react";
import { Row } from "antd";
import "../../App.css";

function ThemeToggler() {
  const [value, setValue] = useState("1");
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Row onChange={onChange} value={value}>
      <div style={{ marginRight: "16px" }}>
        <label style={{ background: "Blue" }} className="css-lqqdgu">
          <input id="Blue" value={1} type="radio" name="color" />
        </label>
      </div>
      <div style={{ marginRight: "16px" }}>
        <label style={{ background: "Red" }} className="css-1j6rah6">
          <input id="Red" value={2} type="radio" name="color" />
        </label>
      </div>
      <div style={{ marginRight: "16px" }}>
        <label style={{ background: "Black" }} className="css-1j6rah6">
          <input id="Black" value={3} type="radio" name="color" />
        </label>
      </div>
      <div style={{ marginRight: "16px" }}>
        <label style={{ background: "Yellow" }} className="css-1j6rah6">
          <input id="Yellow" value={4} type="radio" name="color" />
        </label>
      </div>
      <div style={{ marginRight: "16px" }}>
        <label style={{ background: "#FF00B4" }} className="css-1j6rah6">
          <input id="Rose" value={5} type="radio" name="color" />
        </label>
      </div>
      <div style={{ marginRight: "16px" }}>
        <label style={{ background: "Pink" }} className="css-1j6rah6">
          <input id="Pink" value={6} type="radio" name="color" />
        </label>
      </div>
    </Row>
  );
}

export default ThemeToggler;
