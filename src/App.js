import "./App.css"; 
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
} from "./components/HomePage";
import {
  NewsletterCard
} from "./components/NewsLetter";


import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";
import { ContactUs, Footer, Header, Navbar } from "../common";

function App() {
  return (
    <div className="App">
      
      <Header />
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <HomePage />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
