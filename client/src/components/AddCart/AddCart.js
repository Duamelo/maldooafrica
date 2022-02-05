import React, { useContext } from 'react'
import "../NavBar/navBar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import CartContext from '../../context/cart';


function AddCart() {

    const shopping = useContext(CartContext);

    console.log(shopping.length);

 

return <>
        <Link to="/basket" className="nav-lin-icon-a">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{shopping.length}</span>
            <FontAwesomeIcon icon={faShoppingBasket}/>
        </Link> 
    </>
}

export default AddCart;
