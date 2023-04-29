import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = () => {
  return (
    <div>
          <Search style={{width: 600 , margin : 40 }} placeholder="input search text" enterButton="Search" size="large" />
    </div>
  )
}

export default SearchBar
