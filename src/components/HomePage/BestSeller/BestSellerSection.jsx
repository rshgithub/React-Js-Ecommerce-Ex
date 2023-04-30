import React from "react";
import {  Button } from "antd"; 
import { default as BestSellerNavbar } from "./BestSellerNavbar";
import { default as BestSellerProductCard } from "../../../common/BestSellerProductCard";

const BestSellerSection = () => {
  return (
    <div  style={{marginLeft : 200 , marginRight: 200 , marginTop : 40 , marginBottom: 40}} >
      <BestSellerNavbar />
      <BestSellerProductCard />
      <Button type="link" style={{ borderBottom: '2px solid blue' , marginTop: 40}} >LOAD MORE </Button>
    </div>
  );
};

export default BestSellerSection;
