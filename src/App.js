import "./App.scss";
import {
  AdvantageCard,
  BestSellerSection,
  CenterBannerSection,
  ContactUs,
  FeaturedProductCard,
  Footer,
  Header,
  HeaderBannerImages,
  ImageSlider,
  SearchBar,
  LatestNewsCard,
  Navbar,
  PageBotton,
} from "./components/HomePage";
import {
  NewsletterCard
} from "./components/NewsLetter";


import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BestSellerSection />
      </BrowserRouter>
      <CenterBannerSection />
      <AdvantageCard />
      <LatestNewsCard />
      <FeaturedProductCard/>
      <SearchBar />


    </div>
  );
}

export default App;
