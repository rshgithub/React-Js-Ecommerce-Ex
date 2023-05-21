import React from "react";
import { Input, Row } from "antd";

const { Search } = Input;

const SearchBar = () => {
  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "5%",
        marginTop: "5%",
      }}
    >
      <Search
        style={{ width: "30%" }}
        placeholder="input search text"
        enterButton="Search"
        size="large"
      />
    </Row>
  );
};

export default SearchBar;
