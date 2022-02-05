import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext, useReducer } from 'react';



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

import CartContext from './context/cart';

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}



export function getTotal(cart)
{
  const total = cart.reduce( (totalCost, item) => totalCost + item.price);
  return total.toLocalString(undefined, currencyOptions);
}

function cartReducer(state, action)
{
  switch(action.type)
  {
    case 'add':
      return [...state, action.product];
      
    case 'remove':
      const productIndex = state.findIndex(item => item.name === action.product.name);
      if(productIndex < 0)
        return state;
      
      const update = [...state];
      update.splice(productIndex, 1);
      return update;

      default:
        return state;
  }
}

function App() {

  const [cart, setCart] = useReducer(cartReducer, []);

  return (

    <CartContext.Provider value={{cart, setCart}}>
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
    </CartContext.Provider>
  );
}

export default App;




