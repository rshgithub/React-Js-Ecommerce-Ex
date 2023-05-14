import React from "react";
import { Carousel } from "antd";
import { BestSellerProductCard } from "../../common";
import "../../App.css";
import BestSellerProductsList from "../../utils/ProductsLists/BestSellerProductsList";

const BestSellerSection = () => { 
 

  const carouselCards = BestSellerProductsList.map((item, index) => (
    <div key={index} >
      <BestSellerProductCard key={index} index={index} obj={item} />
    </div>
  ));

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return ( 
    <Carousel 
    autoplay
    afterChange={onChange} 
    dotPosition="bottom" 
      dots={{ className: "carousel-dots" }}
      style={{ height: "500px", width: "80%" }}
    >
      {carouselCards}
    </Carousel>
 

  );
};

export default BestSellerSection;
