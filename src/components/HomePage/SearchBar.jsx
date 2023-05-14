import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = () => {
  return (
<div style={{ display: "flex", justifyContent: "center" }}>
  <Search
    style={{ width: "90%", maxWidth: 600, margin: "40px 0" }}
    placeholder="input search text"
    enterButton="Search"
    size="large"
  />
</div>
  )
}

export default SearchBar
