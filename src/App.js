import "./App.scss";
import {
AdvantageCard,
BestSellerSection,
CenterBannerSection,
Header,
ImageSlider,
SearchBar,
Navbar,
} from "./components/HomePage/index";
import Footer from './components/HomePage/Footer' 
import { BrowserRouter } from 'react-router-dom';

function App() {
return (
  <div className="App">
<Header/>
    <Navbar/>
    <ImageSlider/>
        <BrowserRouter> 
        <BestSellerSection />
        </BrowserRouter>
        <CenterBannerSection/>
        <AdvantageCard/>
        <SearchBar/>
        
        <Footer/>

  </div>
);
}

export default App;
