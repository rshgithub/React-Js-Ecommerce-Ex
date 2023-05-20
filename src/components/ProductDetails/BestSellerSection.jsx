import React from "react";
import { Carousel , Row , Col } from "antd";
import { BestSellerProductCard } from "../../common";
import "../../App.css";
import BestSellerProductsList from "../../utils/ProductsLists/BestSellerProductsList";

const BestSellerSection = () => {
  const carouselCards = BestSellerProductsList.map((item, key) => (
    <div key={key}>
      <BestSellerProductCard key={key} index={key} obj={item} />
    </div>
  ));

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return ( 
      <Carousel style={{height: 480 , width: 300}}
        autoplay
        afterChange={onChange}
        dotPosition="bottom"
        dots={{ className: "carousel-dots" }}
        vertical-align="top"
      >
        {carouselCards}
      </Carousel>
 
  );
};

export default BestSellerSection;
