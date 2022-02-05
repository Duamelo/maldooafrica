import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import './card-menu.css';

//images

import pizza from "../../images/pizza.png";
import basket from "../../images/shopping.png";
import Button from '../Button/Button';



function cardMenu({name, description, price}) {

    
    return <>
    <li className="col-lg-2 product-item">
        <div className="product-list-inner">
        <a href="/"> <img src={pizza} alt=""></img> </a>
        <div className="product-content">
            <div className="start-rating">
            <span>
                {/*<Rate disabled defaultValue={2} />*/}
            </span>
            </div>
            <Link className="product-title" to="/plat_id"><span>{name}</span></Link>
            <span className="price">
                {price} FCFA 
            </span>
            <div className="short-description">
                    {description} 
                    
            </div>
            <Link to="plat_id"className="button"> <img src={basket} alt="basket"/></Link>
        </div>
        </div>                      
    </li>
    </>
}

cardMenu.defaultProps = {
    image: pizza,
    name: "Delicious pizza",
    description: "lorem ipsum dolor expres ta fos cxz",
    price: "1000"   
}

export default cardMenu;
