import "./App.css";
import { HomePage, ProductDetails, ProductGrid, ProductsList } from "./pages";
import { Footer, Header, Navbar } from "../src/common";
import { BrowserRouter, BrowserRouter as Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        </Routes>
        <Routes>
          <Route exact path="/productgrid" element={< ProductGrid/>} />
          </Routes>
          <Routes>
          <Route exact path="/productdetails" element={<ProductDetails />} />
          </Routes>
      <Footer />

    </BrowserRouter>
      {/* <ProductsList /> */}
      {/* <ProductGrid/> */}
      {/* {<HomePage/>} */}
     
    </div>
  );
}

export default App;
