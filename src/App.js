import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from "react-router-dom";
import data from "./data/data.json";
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import ProductReviews from './components/ProductReviews';



function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCT" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text = "HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>

    </Router>
  );
}

export default App;
