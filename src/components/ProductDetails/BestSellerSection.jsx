import React from "react";
import { Carousel } from "antd";
import { BestSellerProductCard } from "../../common";
import "../../App.css";
import BestSellerProductsListData from "../../utils/ProductsLists/BestSellerProductsListData";

const BestSellerSection = () => {
  const carouselCards = BestSellerProductsListData.map((item, key) => (
    <div key={key}>
      <BestSellerProductCard key={key} index={key} obj={item} />
    </div>
  ));

  return (
    <Carousel
      style={{ height: 480, width: 300 }}
      autoplay
      dotPosition="bottom"
      dots={{ className: "carousel-dots" }}
      vertical-align="top"
    >
      {carouselCards}
    </Carousel>
  );
};

export default BestSellerSection;
