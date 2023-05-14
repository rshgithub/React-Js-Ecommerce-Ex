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
        marginBottom: 20,
        osition: "relative",
        borderBottom: "none",
        display: "flex",
        justifyContent: "center",
      }}
      onClick={onMenuClick}
      mode="horizontal"
      items={[
        {
          label: "All",
          key: "",
        },
        {
          label: "Mac",
          key: "mac",
        },
        {
          label: "iPhone",
          key: "iphone",
        },
        {
          label: "iPad",
          key: "ipad",
        },
        {
          label: "iPod",
          key: "ipod",
        },
        {
          label: "Accessories",
          key: "accessories",
        },
      ]}
    />
  );
}

export default BestSellerNavbar;
