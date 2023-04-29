import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../../API";

function BestSellerNavbar() {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };

  return (
    <Menu 
      className="appMenu"
      style={{ 
      marginBottom : 20 ,  
      osition: 'relative',
      borderBottom:'none',
      display: 'flex',
      justifyContent: 'center'}}
      onClick={onMenuClick}
      mode="horizontal"
      items={[
        {
          label: "All",
          key: "",
        },
        {
          label: "Men's Shirts",
          key: "mens-shirts",
        },
        {
          label: "Men's Shoes",
          key: "mens-shoes",
        },
        {
          label: "Men's Watches",
          key: "mens-watches",
        },
        {
          label: "Women's Dresses",
          key: "womens-dresses",
        },
        {
          label: "Women's Shoes",
          key: "womens-shoes",
        },
        {
          label: "Women's Watches",
          key: "womens-watches",
        },
        {
          label: "Women's Bags",
          key: "womens-bags",
        },
        {
          label: "Women's Jewellery",
          key: "womens-jewellery",
        },
        {
          label: "Fragrances",
          key: "fragrances",
        },
      ]}
    />
  );
}

export default BestSellerNavbar;
