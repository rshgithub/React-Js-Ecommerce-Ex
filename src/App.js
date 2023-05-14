import {
  AdvantageCard,
  BestSellerSection,
  FeaturedProductCard,
  HeaderBannerImages,
  ImageSlider,
  SearchBar,
  LatestNewsCard,
  PageBotton,
} from "./components/HomePage";

import { BrowserRouter } from "react-router-dom";
import {  ProductDetails } from "./pages";
import { Footer, Header, Navbar } from "../src/common";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
