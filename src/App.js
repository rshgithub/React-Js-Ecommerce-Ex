import { BrowserRouter } from "react-router-dom";
import { HomePage, ProductDetails } from "./pages";
import { Footer, Header, Navbar } from "../src/common";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Navbar />

        <HomePage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
