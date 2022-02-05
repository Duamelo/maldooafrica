import React from 'react';
import logo from '../../images/flavicon.png'
import scooter from '../../images/scooter.png'
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/js/bootstrap.js';

import AddCart from '../AddCart/AddCart';


function NavBar() {

    const dispatch = useDispatch();
    const { auth } = useSelector((state) => ({...state}));  
    const navigate = useNavigate();



    const logout = () => {
      
      dispatch({
        type: "LOGOUT",
        payload: null,
      });
  
      window.localStorage.removeItem("auth");
      navigate("/");
  
    }

    return <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <img src={logo} alt="" className="navbar-logo-img"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active navbar-link" aria-current="page"  to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active navbar-link" aria-current="page"  to="/menu">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active navbar-link" aria-current="page"  to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  active navbar-link" aria-current="page"  to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active navbar-link" aria-current="page"  to="/contact">Contact</Link>
                    </li>
                </ul>

                <div className="nav-contact-me">
                    <img src={scooter} alt="" className="nav-scooter"/>
                    <p className="nav-contact">
                        <span className="nav-contact-span-one">Appelle et commande au</span>
                        <span className="nav-contact-span-two">+229 61070775</span>
                    </p>
                </div>

                <div className="d-flex nav-">
                    <Link to="/search" className="nav-lin-icon-a">
                        <FontAwesomeIcon icon={faSearch}/>
                    </Link>

                    {auth !== null && <a  onClick={logout} className="nav-lin-icon-a">
                        {auth.user[0].toUpperCase()}
                    </a> }

                   

                    {auth === null && (
                        <a href="/login" className="nav-lin-icon-a">
                            <FontAwesomeIcon icon={faUser}/>
                        </a> 
                    )}
                    <Link to="/wishlist" className="nav-lin-icon-a">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">4</span>
                        <FontAwesomeIcon icon={faHeart}/>
                    </Link> 

                    <AddCart/>
                
                
                </div>
                </div>
                
            </div>
        </nav>

        
    </>
}

export default NavBar;
