import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import 'bootstrap/dist/js/bootstrap.js';

//components
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Menu from "./views/Menu/Menu.js";
import About from "./views/About/About.js";
import Shop from "./views/Shop/Shop.js";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
