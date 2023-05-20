import "./App.css";
import { HomePage, ProductDetails, ProductGrid, ProductsList } from "./pages";
import { Footer, Header, Navbar } from "../src/common";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />

        <Route exact path="/productgrid" element={<ProductGrid />} />
        <Route exact path="/productlist" element={<ProductsList />} />
        <Route exact path="/productdetails" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
