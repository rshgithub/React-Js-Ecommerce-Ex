import "./App.scss";
import {Breadcrumb,ProductGrid,Cart} from './components/Products-Grid/index' 
import {Header,Navbar,Footer,ImageSlider} from './components/HomePage/index' 
//import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
return (
<div className="App">

<Header/>
<Navbar/>
<Breadcrumb/>
<ProductGrid/> 
<Footer/>
</div>
);
}

export default App;
