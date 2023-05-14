 import "./App.css";
import {  HomePage, ProductDetails,ProductGrid } from "./pages";
import { Footer, Header, Navbar,CategoryNavbar } from "../src/common";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
  
      
      {/* <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> }/>
       
        </Routes>
        <Footer />
        </BrowserRouter> */}
      <Header />
      {/* <Navbar />
      <HomePage/> */}
      <ProductDetails/>
      <Footer />
     

      
    </div>
  );
}

export default App;


