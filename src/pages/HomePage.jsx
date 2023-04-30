import React from "react";
import "../App.css";
import {
  AdvantageCard,
  BestSellerSection,
  CenterBannerSection,
  FeaturedProductCard,
  HeaderBannerImages,
  ImageSlider,
  SearchBar,
  LatestNewsCard,
  PageBotton,
} from "../components/HomePage";
import { ContactUs, Footer, Header, Navbar } from "../common";
import { NewsletterCard } from "../components/NewsLetter";
import { BrowserRouter } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <BrowserRouter>
        <BestSellerSection />
      </BrowserRouter>
      <CenterBannerSection />
      <AdvantageCard />
      <LatestNewsCard />
      <FeaturedProductCard />
      <SearchBar />

    </div>
  );
};

export default HomePage;
