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
    <>
      <ImageSlider />
      <BestSellerSection />
      <AdsSection />
      <AdvantageCard />
      <LatestNewsCard />
      <FeaturedProductCard />
      <SearchBar />
    </>
  );
};

export default HomePage;
