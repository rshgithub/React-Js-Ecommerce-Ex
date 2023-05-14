import React from "react";
import "../App.css";
import {
  AdvantageCard,
  BestSellerSection, 
  FeaturedProductCard, 
  SearchBar,
  LatestNewsCard, 
} from "../components/HomePage";
import {  AdsSection } from "../common"; 
import { BrowserRouter } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <BrowserRouter>
        <BestSellerSection />
      </BrowserRouter>
      <AdsSection />
      <AdvantageCard />
      <LatestNewsCard />
      <FeaturedProductCard />
      <SearchBar /> 
    </div>
  );
};

export default HomePage;
