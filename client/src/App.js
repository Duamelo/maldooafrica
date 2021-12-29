import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//components

import Home from "./views/Home/Home";
import Menu from "./views/Menu/Menu.js";
import About from "./views/About/About.js";
import Shop from "./views/Shop/Shop.js";
import Login from "./views/Login/Login";
import Modals from './components/Modal/Modal';
import Contact from './views/Contact/Contact';
import Dish from './components/Dish/Dish';
import WhisList from './views/WishList/WhisList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/modal" element={<Modals/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/plat_id" element={<Dish/>}/>
        <Route exact path="/wishlist" element={<WhisList/>}/>

      </Routes>
    </Router>
  );
}

export default App;
