import React from "react";
import "../App.css";
import {
  AdvantageCard,
  BestSellerSection,
  FeaturedProductCard,
  SearchBar,
  LatestNewsCard,
  ImageSlider,
} from "../components/HomePage";
import { AdsSection } from "../common";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <ImageSlider />
      <BestSellerSection />
      <AdsSection />
      <AdvantageCard />
      <LatestNewsCard />
      <FeaturedProductCard />
      <SearchBar />
    </div>
  );
};

export default HomePage;
