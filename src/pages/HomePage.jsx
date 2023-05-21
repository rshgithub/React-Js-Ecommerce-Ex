import React from "react";
import "../App.css";
import { 
  BestSellerSection, 
  SearchBar, 
  ImageSlider,
} from "../components/HomePage";
import { AdsSection } from "../common";
import  LatestNewsList  from "../components/HomePage/Lists/LatestNewsList";
import  AdvantagesList  from "../components/HomePage/Lists/AdvantagesList";
import  FeaturedProductsList  from "../components/HomePage/Lists/FeaturedProductsList"; 
 

const HomePage = () => {
  return (
    <>
      <ImageSlider />
      <BestSellerSection />
      <AdsSection />
      <AdvantagesList />
      <LatestNewsList/> 
      <FeaturedProductsList /> 
      <SearchBar />
    </>
  );
};

export default HomePage;
